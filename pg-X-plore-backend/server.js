import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(cookieParser());
app.use(express.json());

dotenv.config(); // Load environment variables from the .env file

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("server listenings");
});
