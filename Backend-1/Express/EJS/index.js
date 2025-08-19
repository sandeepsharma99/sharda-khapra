const path = require("path")

const port = 3000;

appendFile.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("homes.ejs")
})

















