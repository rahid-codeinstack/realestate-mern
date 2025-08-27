import { errorHandler } from "./errorhandler.js";
import jwt from 'jsonwebtoken'



export function verify(req,res,next){
          const token=req.cookies.access_key;
          if(!token)
          {
           next(errorHandler(401,'unathorize'))  
          }else{
               jwt.verify(token,process.env.JWT_SECRET,(error,result)=>{
                    if(error)
                    {
                         return next(errorHandler(403,'forbidden'))
                    }
                    req.userid=result.id;
                    next()

               })
               
          }
}