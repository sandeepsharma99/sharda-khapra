const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended :true}));
app.use(methodOverride("_method"));

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
    id:uuidv4(),
    username:"sandeep",
    content:"I Love coding"
    },
    {
    id:uuidv4(),
    username:"ram",
    content:"I Love cricket"
    },
    {
    id:uuidv4(),
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
    let id = uuidv4();
    posts.push({id,username ,content})   // pushing new object to posts array
    // res.send("post request working")
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    
    let post = posts.find((p)=> id === p.id);
    // console.log(post);
    res.render("show.ejs",{post});
})

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);

    res.redirect("/posts")
})
// <--!edit route-->
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("edit.ejs", {post})
})

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port,()=>{
    console.log("listening on port:3000");
})

// comment
// new comment
//comment:1