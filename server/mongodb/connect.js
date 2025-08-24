
     import mongoose from 'mongoose'
  


       export async function connectDB(uri){
          try {
              
               const res = await mongoose.connect(uri)
               console.log('connection success')
               
          } catch (error) {
               console.log("connection failed")
               
          }
     }

     