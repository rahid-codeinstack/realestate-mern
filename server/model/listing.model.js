import mongoose  from "mongoose";
const listingSchema=mongoose.Schema({
          name:{
               type:String,
               required:true,
          }
          ,discription:{
               type:String,
               required:true,

          },
          address:{
               type:String,
               required:true,
          },
          regularprice:{
                    type:Number,
                    required:true,

          }
          ,
          discountprice:{
               type:Number,
               required:true,

          },
          bathroom:{
               type:Boolean,
               required:true,
          },
          bedroom:{
               type:Boolean,
               required:true,
          },
          furnished:{
               type:Boolean,
               required:true,
          },
          parking:{
               type:Boolean,
               required:true,
          },
          type:{
               type:String,
               required:true,

          },
          imageurls:{
               type:[String],
               required:true,

          },
          userid:{
               type:mongoose.Schema.Types.ObjectId,
               required:true,
               ref:'User'    
          }
         
       
},{timestamp:true})

const ListModel =mongoose.model("ListModel",listingSchema)
export default ListModel;

