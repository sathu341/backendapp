const  express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const mongoose=require('mongoose')
require('dotenv').config() 
const port=process.env.PORT
main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}
const userModel=require('./model/userSchema')
console.log(port)
app.post("/",(req,res)=>{
    const{user}=req.body;
    userModel.create({user})
    console.log(user)

       res.json("hello")
})
app.listen(port,()=>{
    console.log("server running http://localhost:9000")
})
