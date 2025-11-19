import express from 'express'
const app=express()  

app.get('/',(req,res)=>{
    const url=req.url
    res.send("Hello This is from Express JS"+url)
})

app.get("/add",(req,res)=>{
    const url=req.params 
    const search=req.query
    console.log(search);
    
    res.send("Hello this is post method  ")
})

app.put("/put",(req,res)=>{
    res.send("Hello this is put method")
})

app.delete("/delete",(req,res)=>{
    res.send("Hello this is delete method")
})

app.listen(3000,()=>console.log("Server is running"))