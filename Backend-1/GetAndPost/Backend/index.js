const express = require("express");
const app = express();

const port = 3000;

app.get("/register",(req,res)=>{
    res.send("Standard GET response")
})

app.post("/register",(req,res)=>{
    // let {user ,password } = req.query;
    res.send("Standard Post response")
})

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
})