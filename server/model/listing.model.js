import mongoose  from "mongoose";
const listingSchema=mongoose.Schema({
      name:{
               type:String,
               required:true,
              
      }
          
     , description:{
               type:String,
               required:true,

     },
          address:{
               province:{
                    type:String,
                    required:true,
               },
               city:{
                    type:String,
                    required:true,

               }
               ,
               zipCode:{
                    type:String,
                    required:true,

               }
               ,
               district:{
                    type:String,
                    required:true,

               }
          },
          prices:{
                regularprice: {
                    type: Number,
                    required: true,

                 }
                 ,
                discountprice: {
                    type: Number,
                    required: true,

                }
          }
          ,
            propertiesfeatures:{
                 bathroom: {
                      type: Number,
                      required: true,
                    
                 },
                 kitchen: {
                      type: Boolean,
                      required: true,
                 },
                 bedroom: {
                      type: Number,
                      required: true,
                 },
                 furnished: {
                      type: Boolean,
                      required: true,
                 },
                 parking: {
                      type: Boolean,
                      required: true,
                 },
                 elevater: {
                      type: Boolean,
                      required: true,
                 }
            }   
          ,

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

