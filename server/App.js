import express from 'express'
import { configDotenv } from 'dotenv'
configDotenv()


const app=express()

const port=process.env.PORT || 3000;

app.listen(3000,()=>{
     console.log("server runing on port 3000")
})