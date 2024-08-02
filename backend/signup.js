const express=require('express')
const app=express()
const mysql=require('mysql')
const cors=require('cors')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "M1racle@123",
    database: "itgdb",
    port: "3306",
  });
  app.use(express.json());
  app.use(cors());
  connection.connect((err) => {
    if (err) throw err;
    console.log("connected");
  });

app.post('/signup',(req,res)=>{
    let arr=[req.body.username,req.body.password];
let sql="insert into Stu values(?,?)";
connection.query(sql,arr, (err, result) => {
    if (err) throw err;
   res.json("inserted successfully")
  });
  console.log("success");
})

app.listen(3003,()=>{
    console.log('working')
})