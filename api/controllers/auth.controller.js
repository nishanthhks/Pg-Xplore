import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // password Hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // user creation and save to db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed to send" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // CHECK IF USER EXISTS
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // CHECK IF PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid credentials" });

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7; // 7 days

    const token = jwt.sign(
      { id: user.id, isAdmin: true },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );
    const cookieOptions = {
      httpOnly: true,
      maxAge: age,
    };

    if (process.env.NODE_ENV === "production") {
      cookieOptions.secure = true; // Send cookie over HTTPS only in production
    }

    const { password: userPassword, ...userData } = user;

    res.cookie("token", token, cookieOptions).status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true, // Important for security
    secure: process.env.NODE_ENV === "production", // Only use HTTPS in production
  });
  res.status(200).json({ message: "Logged out successfully" });
};
