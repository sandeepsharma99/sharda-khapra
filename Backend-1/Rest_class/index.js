const express = require("express");
const app = express();
const port = 3000;
const path = require("path")


app.set("view engine", "ejs")
app.set(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended :"true"}))

app.get("/",(res,res)=>{
    res.send("server responding well")
})

app.listen(port,()=>{
    console.log("listening on port:3000");
    
})