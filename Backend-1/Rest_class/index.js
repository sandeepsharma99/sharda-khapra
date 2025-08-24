const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended :true}));

app.set("view engine","ejs")

app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let post = [
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
    }
];

app.get("/post",(req,res)=>{
    res.render("index.ejs");
})

app.listen(port,()=>{
    console.log("listening on port:3000");
})

// comment
// new comment
//comment:1