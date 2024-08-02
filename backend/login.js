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

app.post('/login',(req,res)=>{
let sql=`select * from Stu where username='${req.body.username}' and password='${req.body.password}'`;
connection.query(sql, (err, result) => {
    if (err) throw err;
    else {
        if(result.length>0)
{
    res.json("login success")
}
else{
    res.json("Register before login")
}
    }
  });
  console.log("success");
})

app.listen(3004,()=>{
    console.log('working')
})