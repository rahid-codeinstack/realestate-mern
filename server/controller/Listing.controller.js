import ListModel from "../model/listing.model.js";
import { errorHandler } from "../utils/errorhandler.js";

export async function  createList(req,res,next) {

          if(!req.userid)
          {
               return next(errorHandler(401,'unauthorize : you can just read the page'))
          }
     const list=req.body;
     list.userid=req.userid;
     if(
          !list.name && !list.discription && !list.address 
          &&  !list.bathroom && !list.badroom && !list.parking
          && !list.regularprice && !list.discountprice
          && !list.furnished && !list.type && !list.imageurls
     ){
          return next(errorHandler(400,{
               message:'create list form all field required'
               ,
               status:400,
               success:false,
          }))
     }
     
 
     
     try {
               const createdList = await ListModel.create(list);
               return console.log(createdList)
               res.status(201).json({
                         message:'list created successfully',
                         status:201,
                         success:true,
                         createdList,
               })
     } catch (error) {
          next(errorHandler(error))  
     }
     
}