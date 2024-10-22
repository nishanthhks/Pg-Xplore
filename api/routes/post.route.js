import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getPosts,
  getpost,
  addPost,
  updataPost,
  deletePost,
} from "../controllers/post.controller.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getpost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updataPost);
router.delete("/:id", verifyToken, deletePost);

export default router;
