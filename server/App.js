import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './mongodb/connect.js'
configDotenv()

const app=express()
const port=process.env.PORT || 3000;

console.log(process.env)
app.listen(port,()=>{
     console.log("server runing on port 3000")
})

connectDB(process.env.MONGO_URI)
