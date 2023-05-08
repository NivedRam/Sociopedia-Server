import express from "express";
import { getFeedPosts, GetUserPosts, likePost } from "../Controllers/posts.js";
import { verifyToken } from "../Controllers/middleware/auth.js";

const router = express.Router();

//---------------------READ------------------------------
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, GetUserPosts);

//-----------------------UPDATE---------------------------

router.patch("/:id/llike", verifyToken, likePost);
export default router;
