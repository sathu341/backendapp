const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    user:{type:String}
})

module.exports=mongoose.model("userl",userSchema)