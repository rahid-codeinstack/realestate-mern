import { createSlice } from "@reduxjs/toolkit";
const initialState={
     user:null,
     isLoading:false,
     Error:null,

}

const userSlice=createSlice({
     name:"user",
     initialState,
     reducers:{
          singinStart:function(state){
               state.isLoading=true;

          }
          ,
          signinSuccess:function(state,action){
          
               state.user=action.payload;
               state.isLoading=false;
          } ,
              signinFailur:function(state,action){
                    state.Error=action.payload;
                    state.isLoading=false;

              }
              ,
                    updateStart:function(state){
                              state.isLoading=true;
                    }, 
                         updateSuccess:function (state,action){
                                   state.user=action.payload;
                                   state.isLoading=false;

                         } ,
                              updateFail:function (state,action){
                                   state.Error=action.payload;
                                   state.isLoading=false;

                              }, 
                                   deletStart: function (state){
                                        state.isLoading=false;
                                        
                                   },
                                        deletSuccess: function (state){
                                             state.user=null;
                                             isLoading=false;
                                        },
                                             deletFail: function (state,action){
                                                       state.Error=action.payload;
                                                       state.isLoading=false;
                                             }
     }
})

export const { 
      singinStart ,
       signinSuccess ,
       signinFailur   ,
       updateStart ,
       updateSuccess,
       updateFail,
       deletStart,
       deletSuccess,
       deletFail
       } = userSlice.actions;

export default userSlice.reducer;

