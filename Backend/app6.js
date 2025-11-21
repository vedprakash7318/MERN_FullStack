import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer, { memoryStorage } from 'multer'
import {v2 as cloudinary} from 'cloudinary' 
const app = express();
app.use(express.json());
app.use(cors());
cloudinary.config({
    cloud_name: "d",
    api_key: "9369",
    api_secret: "2"
})
const upload = multer({ storage: memoryStorage() });

app.post('/img', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(404).json("Please Upload an image");
    }
    const uploadS = cloudinary.uploader.upload_stream({ folder: "Uploads" }, async (err, r) => {
        if (err) return res.status(500).json("Error upload image")
        res.status(200).json({message:"Done",r})
    })
    uploadS.end(req.file.buffer)

})





app.listen(3000, () => console.log("Server is ruuning"))