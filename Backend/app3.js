import express from 'express'
import mongoose from 'mongoose';
const app=express();

app.use(express.json())   

mongoose.connect('mongodb://localhost:27017/DB1')
.then(()=>console.log("Mongo Connected Successfully"))


const User=mongoose.model('user',{name:String,age:Number})
app.post('/add',async(req,res)=>{
    const users=new User(req.body)
    await users.save()
    // res.send("Data Added Succesfull")
    res.json({message:"Data Sabved"})
})
app.get('/show',async(req,res)=>{
      const users = await User.find({});
      res.status(200).json(users);
})
app.put('/put/:id',async(req,res)=>{
    const users= await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({message:"Data updated",users})
})
app.delete('/delete/:id',async(req,res)=>{
    const deletedUsers=await User.findByIdAndDelete(req.params.id)
    res.status(200).json({succes:true,message:"Deleted Successfull",deletedUsers})
})
app.listen(3000)