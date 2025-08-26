import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { signinSuccess,signinFailur,singinStart } from '../../redux/user/userSlice';
import axios from 'axios';


function Auth() {
     const {isLoading}=useSelector((state)=>{
          return state.user.userReducer;
     })
     const Dispatch=useDispatch()
     
    async function google_Signin(){
          const provider= new GoogleAuthProvider()
          const auth=getAuth(app)
          const {user}= await signInWithPopup(auth,provider)
          const username=user.displayName.split(" ").join("") + Math.floor(Math.random()).toString(36).split(-4);
          const email=user.email;
          const avetar=user.photoURL;
          try {
               const res = await axios.post("/api/auth/google",{username,email,avetar})
               Dispatch(signinSuccess(res.data))
          } catch (error) {
               console.log(error.message)
          }
         }
  return (
     <button disabled={isLoading} onClick={google_Signin} type="button" className="bg-red-700 text-white  w-full p-2 rounded-md cursor-pointer 
     hover:opacity-80 transition-all disable:opacity-80">Continue with Google</button>
  )
}

export default Auth;
