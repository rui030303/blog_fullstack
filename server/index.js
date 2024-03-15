import express from "express"
import postsRouter from "./route/posts.js"
import authRouter from "./route/auth.js"
import usersRouter from "./route/users.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:5173', // 允许这个域的跨源请求
    credentials: true, // 允许发送凭证
  };
  
app.use(cors(corsOptions));

app.get('/', (req,res)=>{
    res.json("hello")
})

app.use("/", postsRouter)
app.use("/", usersRouter)
app.use("/", authRouter)

app.listen(3000, (req, res)=>{
    console.log("Backend successfullly start");
})