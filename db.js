const mongoose = require("mongoose")

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = new Schema({
    email:String,
    password:String,
    firstName:String,
})

const UserModel = mongoose.model('users',User)

module.exports = {
    UserModel
}