const express = require("express");
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`); 
})

// app.use((req,res)=>{
//     let code = "<h1>Fruits</h1>"
//     res.send(code)
// })

app.get("/",(res,req)=>{
    res.send("you contacted to root path")
})

app.get("/apple",()=>{
    res.send("you cantacted apple path")
});

app.get("/orange",()=>{
    res.send("you contacted to orenge")
})