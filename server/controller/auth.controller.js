import { errorHandler } from "../utils/errorhandler.js";
import User from "../model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



//------------------- signup function -------------------------
export async function signup(req,res,next){
const signupUser=req.body;
console.log(signupUser)
if(!signupUser.email){
     next(errorHandler(204,'email required'))
}
if(!signupUser.email.includes('@' && '.'))
{
     return next(errorHandler(400,'wrong email type'));

}
if(!signupUser.username)
{
     return next(errorHandler(404, 'username required'))
}
if(!signupUser.username.length >=3){
     return next(errorHandler(400, 'username must be atleast 3 character'))
}
if(!signupUser.password)
{
     return next(errorHandler(404, 'password required'))
}
if(!signupUser.password.length >=6)
{
     next(errorHandler(400,'password must be atleat 6 character'))
}
const hashpassword=bcrypt.hashSync(signupUser.password,10)

try {
 const user= new User({...signupUser,password:hashpassword})
  await  user.save()
    res.status(201).json({
              message: 'sign up successfully' ,
              statusCode: 201,
              success: true,
    })
} catch (error) {
     next(error)  
}

}





//------------------- signin function -------------------------

export async function signin(req,res,next){
     const {email,password}=req.body;
     try {
          const validUser= await User.findOne({email})
          if(!validUser)
          {
               return next(errorHandler(404,'user not found'))
          }
          const validPassword = bcrypt.compareSync(password,validUser.password)
          if(!validPassword)
          {
               return next(errorHandler(404,'wrong credential'))
          }
          console.log("user signin successfully")
          const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
          const {password:pass,...rest}=validUser._doc;
          res.cookie('access_key',token,{
               httpOnly: true,        
               maxAge: 3 * 24 * 60 * 60 * 1000 
               
          }).json({
                    success:true,
                    user:rest,
                    status:200,

               
          })
     } catch (error) {
          next(errorHandler(500,error.message))          
     }
}





//--------------------------googlesigin-----------------------------------------------------------------


export async function google(req,res,next) {
     const {username,email,avetar}=req.body;
     console.log(req.body.avetar)
     try {
          const user= await User.findOne({email})
          if(user)
          {
               const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
               const {password:pass,...rest}=user._doc;
               res.cookie("access_key",token,{
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    maxAge: 3 * 24 * 60 * 60 * 1000 
               }).json({
                    success:true,
                    message:"user sigin in"
                    ,
                    user:rest,

               })
          }else{
               const password = Date.now().toString() + process.env.JWT_SECRET.substring(Math.floor(Math.random() * process.env.JWT_SECRET.length), Math.floor(Math.random() * process.env.JWT_SECRET.length));
               const hashPassword = bcrypt.hashSync(password,10)

            
               const user = new User({
                         username:username,
                         email:email,
                         password:hashPassword,
                         avetar:avetar,
               })
               await user.save()

               const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
               const {password:pass,...rest}=user._doc;
               res.
               cookie("access_key",token,{
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    maxAge: 3 * 24 * 60 * 60 * 1000 ,
               }).json({
                    success:true,
                    user:rest,
                    statusCode:201,

               })
               

          }
     }catch{
          next(errorHandler(500,error.message))
     }
     
}



