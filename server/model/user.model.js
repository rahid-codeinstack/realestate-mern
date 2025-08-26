import mongoose from "mongoose";

const userSchema=mongoose.Schema({
     username:{
          type:String,
          required:true,
          
     }
      , email:{
               type:String,
               required:true,
               unique:true,

      }
      ,
      password:{
          type:String,
          required:true,
          
     }
     ,avetar:{
          type:String,
          required:true,
          default:"https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
     }
}, {timestamps: true})

const User=mongoose.model("UserModel",userSchema)

export default User;
