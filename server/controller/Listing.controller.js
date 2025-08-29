import ListModel from "../model/listing.model.js";
import { errorHandler } from "../utils/errorhandler.js";

export async function  createList(req,res,next) {

          if(!req.userid)
          {
               return next(errorHandler(401,'unauthorize : you can just read the page'))
          }
     const list=req.body;
     list.userid=req.userid;
     try {
               const createdList = await ListModel.create(list);
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