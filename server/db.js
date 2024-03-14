import mysql from "mysql2"

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Rr951753123!",
        database:"blog_fullstack"
    }
)

export default db