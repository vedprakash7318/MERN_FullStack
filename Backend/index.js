import express from 'express'
const app=express()   // craete an instance


app.get('/',(req,res)=>{
    res.send("Hello This is from Express JS")
})

app.post("/add",(req,res)=>{
    res.send("Hello this is post method")
})

app.put("/put",(req,res)=>{
    res.send("Hello this is put method")
})

app.delete("/delete",(req,res)=>{
    res.send("Hello this is delete method")
})

app.listen(3000,()=>console.log("Server is running"))