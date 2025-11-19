import express from 'express'
const app=express();

// Middleware
// req   middleware   res   

function  midleVed (req,res,next){
    console.log(`This is from Midleware `)
    next()
}
// app.use(midleVed)
app.get('/',midleVed,(req,res)=>{
    res.send("Hello")
})

app.get('/about',(req,res)=>{
    res.send("about")
})


app.listen(3000)

