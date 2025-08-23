const express = require("express");
const path = require("path");
const app = express()

const port = 3000;

app.set("view engine","ejs");


app.set("views",path.join(__dirname,"/views"))
// app.get("/",(req,res)=>{
//     res.send("home page")    
// })

app.get("/",(req,res)=>{
    res.render("travelling.ejs")    
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{diceVal})    
})

app.get("/ig/:username",(req,res)=>{
    
    let {username} = req.params
    res.render("insta.ejs", {username})
})

app.listen(port,(req,res)=>{
    console.log(`listening on port${port}`);
    
});
















// const path = require("path")

// const port = 3000;

// appendFile.set("view engine", "ejs")
// app.set("views",path.join(__dirname,"/views"))

// app.get("/",(req,res)=>{
//     res.render("homes.ejs")
// })

















