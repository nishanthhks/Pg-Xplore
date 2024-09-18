import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token not valid" });
    }

    // Attach the decoded payload (user info) to the request object
    req.userId = payload.id;

    // Move to the next middleware/route handler
    next();
  });
};
