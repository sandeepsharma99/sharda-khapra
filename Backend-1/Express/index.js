const express = require("express");
const app = express();
console.dir(app);



let port = 3000;


app.listen(port,()=>{
    console.log(`app is lestening on port ${port}`); 
})

// app.use((req,res)=>{
//     console.log("request receive");  
//     res.send({
//         name:"apple",
//         color:"red",
//     })
// })

// app.use((req,res)=>{
//     console.log("request receive");
//     res.send("<h1>Fruits</h1><ul><li>Apple</li><li>orange</li><li>pineapple</li></ul>");
// })


app.get("/",(req,res)=>{
    res.send("this is home page")
})
app.get("/orange",(req, res)=>{
    res.send("you'r on orange page")
})
app.get("/apple",(req,res)=>{
    res.send("you'r on apple page")
});
// app.get("*",(req,res)=>{
//     res.send("you've select wrong path")
// })
// app.post("/",(req,res)=>{
//     res.send("you contacted root path")
// })
















// const express = require("express");
// const app = express();

// // console.dir(app);
// let port = 3000;

// app.listen(port,()=>{
//     console.log(`app is listening on port ${port}`); 
// })

// // // app.use((req,res)=>{
// // //     let code = "<h1>Fruits</h1>"
// // //     res.send(code)
// // // })

// // app.get("/",(res,req)=>{
// //     res.send("you contacted to root path")
// // })

// // app.get("/apple",()=>{
// //     res.send("you cantacted apple path")
// // });

// // app.get("/orange",()=>{
// //     res.send("you contacted to orenge")
// // })

// // app.post("/",(resq,res)=>{
// //     res.send("you've send req to root")
// // })

// //          pathparameter
// app.get("/",(req,res)=>{
//     res.send("hello, i'm root")
// })

// app.get("/:username",()=>{
//     console.log(req.params);
//     res.send("hello,i am root")
// });

// app.get("/serach",(req,res)=>{
//     console.log(req.query);
//     res.send("no results");
// })











