import { configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../user/userSlice.js';
import {
     persistReducer
    ,persistStore
    ,FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// FLUSH,
//      REHYDRATE,
//      PAUSE,
//      PERSIST,
//      PURGE,
     // REGISTER,

const persistConfige={
          key:'root',
          storage,
          version:1,
}


const rootReducer = combineReducers({userReducer})

const persistreducer = persistReducer(persistConfige,rootReducer)


const Store=configureStore({
          reducer:{
               user:persistreducer,  
          },
          middleware:(getdefaultMiddleware)=>getdefaultMiddleware({serializableCheck:{ignoreActions:[FLUSH,PAUSE,PERSIST,PURGE,REGISTER]},})
})

export const persiststore=persistStore(Store)
export default Store;