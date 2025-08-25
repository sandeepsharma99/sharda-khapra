const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended :true}));

app.set("view engine","ejs")

app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
    username:"sandeep",
    content:"I Love coding"
    },
    {
    username:"ram",
    content:"I Love cricket"
    },
    {
    username:"laxman",
    content:"I Love boxing"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

// *creating a form in  new.ejs file and getting*

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let { username , content } = req.body;  // req goes within body in post
    posts.push({username ,content})   // pushing new object to posts array
    // res.send("post request working")
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log("listening on port:3000");
})

// comment
// new comment
//comment:1