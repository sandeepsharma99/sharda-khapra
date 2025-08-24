const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json);

app.get("/register",(req,res)=>{
    let {user ,password } = req.query;
    res.send("Standard GET response")
})

app.post("/register",(req,res)=>{
    let {user,password} = req.body
    res.send(`Standard Post response, welcome ${user}`)
})

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})