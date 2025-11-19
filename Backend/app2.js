import express from 'express';
import cors from 'cors'
const app=express();
// Cross-Orign resource sharing  
// const or=['http://localhost:5173','http://localhost:5178']
// app.use(cors({
//     origin:function(origin,cb){
//         if(!origin || or.includes(origin)){
//             cb(null,true)
//         }
//     }
// }))
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Hello CORS is activated")
})

app.listen(3000)