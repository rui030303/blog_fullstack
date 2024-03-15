import db from "../db.js"
const getPosts = (req,res)=>{
    const q = (req.query.cat ? "SELECT * FROM `posts` WHERE cat = ?" : "SELECT * FROM `posts`")
    db.query(q, [req.query.cat],(err, data)=>{
        if(err){return res.json(err)}
        return (res.status(200).json(data))
    })
    
}
const getPost = (req,res)=>{
    
    // const q = "SELECT * FROM `users` u JOIN `posts` p ON u.id = p.uid WHERE p.id = ?"
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? "
    db.query(q, [req.params.id], (err, data)=>{
        if(err){return res.json(err)}
        return (res.status(200).json(data))
    })
}

const addPost = (req,res)=>{
    res.json("addpost")
}
const deletePost = (req,res)=>{
    console.log(req.cookies.access_token);
    // const token = req.cookies.access_token
    // const q = "DELETE FROM posts WHERE id = ?"
    // console.log(req.params.id);
    // db.query(q, [req.params.id], (err,data)=>{})
    // res.json("deletepost")
}
const updatePost = (req,res)=>{
    res.json("addpost")
}

export {getPosts, getPost, addPost, deletePost, updatePost}