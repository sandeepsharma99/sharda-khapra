const express = require("express");
const app = express();
console.dir(app);

let port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})


app.get("/:username/:id",(req,res)=>{
    let {username ,id} = req.params;
    console.log(`welcome to the page  of @${username}`);
    
    console.log(req.params);
    res.send("hello, this is root")
})

app.get("/search",(req,res)=>{
    let {q} = req.query
    // console.log(req.query);
    res.send(`<h1>${q} page</h1>`);
})
