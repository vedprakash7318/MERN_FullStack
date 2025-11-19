import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
const app=express();
const PORT=4000;
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/DB2")
.then(()=>console.log("MongoDB Connected Successfully"))

function getPass(){
    return Math.random().toString(36).slice(-8)
}

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        default:function(){
            if(!this.password){
                return getPass()
            }
            else{
                this.password
            }
        }
    },
    gender:{
        type:String,
        enum:['Male','Female','Others']
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const User=mongoose.model('Users',userSchema);

app.post('/add',async(req,res)=>{
    const {name,email,password,age,gender}=req.body
    if(!email || !name){
        return res.status(500).json({Success:false,message:"Name,Email,Password are required"});
    }
    const users= new User(req.body)
    await users.save()
    // const users = await User.create(req.body)
    res.status(200).json({Success:true,message:"Data Saved Successfully"});
})


app.get('/get',async(req,res)=>{
    const data=await User.find()
    return res.status(200).json({Success:true,message:"Data Found Successfully",data});
})



app.delete('/delete/:id',async(req,res)=>{
    const data=await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({Success:true,message:"User Deleted Successfully",data})
})
app.put('/edit/:id',async(req,res)=>{
    const data=await User.findByIdAndUpdate(req.params.id,req.body)
    return res.status(200).json({Success:true,message:"User Updated Successfully",data})
})



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})