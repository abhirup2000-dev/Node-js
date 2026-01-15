const express=require('express')

const app=express()

app.get('/',(req,res)=>{
  res.send('Home Page')
})

app.get('/about',(req,res)=>{
  res.send('About page')
})

app.get('/contact',(req,res)=>{
  res.send('Contact page')
})

app.get('/details',(req,res)=>{
  res.send('Welcome to details page')
})
const port=3004

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})