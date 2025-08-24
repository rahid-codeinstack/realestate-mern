import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './mongodb/connect.js'
import authRouter from './routes/auth.route.js'

configDotenv()

const app=express()
app.use("/api/auth/",authRouter)
const port=process.env.PORT || 3000;
app.get("/test",(req,res)=>{
     res.send({
          success:true,
          message:"hellow world server is working "
     }
     )
})

console.log(process.env)
app.listen(port,()=>{
     console.log("server runing on port 3000")
})

connectDB(process.env.MONGO_URI)
