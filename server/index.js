import express from "express"
import postsRouter from "./route/posts.js"
import authRouter from "./route/auth.js"
import usersRouter from "./route/users.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get('/', (req,res)=>{
    res.json("hello")
})

app.use("/", postsRouter)
app.use("/", usersRouter)
app.use("/", authRouter)

app.listen(3000, (req, res)=>{
    console.log("Backend successfullly start");
})