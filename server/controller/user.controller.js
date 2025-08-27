import User from '../model/user.model.js'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/errorhandler.js';

// ------------------------------------- userupdate ----------------------------------------------------

export
async function  UpdateUser(req,res,next) {
     const id=req.params.id;
     
     if(id !== req.userid)
     {
          return next(errorHandler(403,'wrong user not allowed to update just see the profile'));
     }
     const {username,email,password,avetar}=req.body;
     let hashpassword = '';

     if(password)
     {
          hashpassword=bcrypt.hashSync(password,10)

     };
     console.log(id)
   
     try {
          if(username || email || password || avetar)
          {
               const user = await User.findById(id)
               if(username && user.username !== username)user.username=username;
               if(email && user.email !== email)user.email=email;
               if(password)user.password=hashpassword;
               if(avetar)user.avetar=avetar;
               await user.save()
               
               res.status(200).json({
                    message:'user updated successfully',
                    statusCode:200,
                    user:user,
               })
          }
     } catch (error) {
               next(errorHandler(500,error.message))
     }
     
}