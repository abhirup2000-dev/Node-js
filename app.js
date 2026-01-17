const express=require('express')
const app=express()
const ejs=require('ejs')

app.set('view engine', 'ejs')
app.set('views', 'views')

const homerouter=require('./app/routes/homeroute')
app.use(homerouter)




const port=3006

app.listen(port,()=>{
  console.log(`Your project successfully run on this port ${port}`)
})