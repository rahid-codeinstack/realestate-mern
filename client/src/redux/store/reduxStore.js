import { configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice.js';


const rootReducer = combineReducers({userReducer})



const Store=configureStore({
          reducer:{
               user:rootReducer,  
          },
          middleware:(getdefaultMiddleware)=>getdefaultMiddleware({serializableCheck:true})
})
export default Store;