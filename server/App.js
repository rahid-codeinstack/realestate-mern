import express from 'express'
import { configDotenv } from 'dotenv'
import { connectDB } from './mongodb/connect.js'
import authRouter from './routes/auth.route.js'

configDotenv()

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRouter)

const port=process.env.PORT || 3000;
app.get("/test",(req,res)=>{
     res.send({
          success:true,
          message:"hellow world server is working "
     }
     )
})


app.listen(port,()=>{
     console.log("server runing on port 3000")
})

connectDB(process.env.MONGO_URI)

app.use((err, req, res, next)=>{
     console.log(err.statusCode,err.message)
     const statusCode=err.statusCode || 500;
     const message=err.message || "internal server error";

     res.status(statusCode).json({
          message,
          statusCode
          ,
          success:false,

     })

})
