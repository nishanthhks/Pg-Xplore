import prisma from "../lib/prisma.js";

// router.get("/", getPosts);
// router.get("/:id", getpost);
// router.post("/", verifyToken, addPost);
// router.put("/:id", verifyToken, updataPost);
// router.delete("/:id", verifyToken, deletePost);

export const getPosts = async (req, res) => {
  try {
    res.status(200).json()
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to getPosts"})
  }
};
export const getpost = async (req, res) => {
  try {
    res.status(200).json()

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to getpost"})

  }
};
export const addPost = async (req, res) => {
  try {
    res.status(200).json()

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to addPost"})

  }
};
export const updataPost = async (req, res) => {
  try {
    res.status(200).json()

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to updataPost"})

  }
};
export const deletePost = async (req, res) => {
  try {
    res.status(200).json()

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "failed to deletePost"})

  }
};
