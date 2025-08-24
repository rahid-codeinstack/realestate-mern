import { errorHandler } from "../utils/errorhandler.js";
import User from "../model/user.model.js";

export async function signup(req,res,next){
const signupUser=req.body;


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
try {
     const user= new User(signupUser)
  await  user.save()
    res.status(201,{
     message:'sign up successfully'
     ,
     statusCode:201,
     success:true,


    })
} catch (error) {
     next(error)  
}

}