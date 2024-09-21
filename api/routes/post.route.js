import express from "express";
const router = express.Router();

// get all the posts
router.get("/test", (req, res) => {
  console.log("ss");
  res.send("working");
});

// add a post
router.put("/test", (req, res) => {
  console.log("ss");
});

// update a post
router.put("/test", (req, res) => {
  console.log("ss");
});

// deletea post
router.delete("/test", (req, res) => {
  console.log("ss");
});

export default router;
