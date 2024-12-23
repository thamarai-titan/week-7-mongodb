const express = require("express")
const mongoose = require("mongoose")
const {UserModel} = require("./db")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://tmanalan711:Thamarai@cluster0.xqnzc.mongodb.net/todo-testing")

app.post("/signup",async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    await UserModel.create({
        email:email,
        password:password,
        firstName:firstName
    })

    res.send({
        message:"you are data was inserted"
    })

})

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})