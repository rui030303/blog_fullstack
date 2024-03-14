import express from "express"
import addpost from "../controllers/post.js"

const router = express.Router()

router.get("/posts", addpost)

export default router