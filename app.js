const express = require("express")
const bodyParser= require("body-parser")

const adminRoutes=require("./routes/admin")
const userRoutes=require("./routes/user")
const shopRoutes=require("./routes/shop")

const app = express();

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization")
    next()
})


app.use("/shop",shopRoutes)
app.use("/admin",adminRoutes)
app.use("/user",userRoutes)


app.listen(8080)