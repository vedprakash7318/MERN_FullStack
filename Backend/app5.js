import express from 'express'
import multer from 'multer'
import path from 'path'
import cors from 'cors'
const app=express();

app.use(cors())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
   cb(null,Date.now()+path.extname(file.originalname))  //20112925.jpg
  }
})
const upload = multer({ storage: storage })


app.post('/img',upload.single('image'),(req,res)=>{
    const file=req.file;
    res.status(200).json({Success:true,message:"Image Upload success"})
})



app.listen(3000,()=>console.log("Server is ruuning"))
