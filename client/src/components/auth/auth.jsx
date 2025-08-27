import {GoogleAuthProvider,getAuth, reauthenticateWithCredential, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { signinSuccess} from '../../redux/user/userSlice';
import  {useNavigate} from 'react-router-dom'

import axios from 'axios';


function Auth() {
     const Dispatch=useDispatch()
      const navigate = useNavigate()




    async function google_Signin(){
          const provider= new GoogleAuthProvider()
          const auth=getAuth(app)
          const res= await signInWithPopup(auth,provider);
    
          const user=res.user;
          const username=user.displayName.split(" ").join("") + Math.floor(Math.random()).toString(36).split(-6);
          const email=user.email;
          const avetar=user.photoURL;
          try {
               const res = await axios.post("/api/auth/google",{username,email,avetar})
               Dispatch(signinSuccess(res.data.user))
               navigate("/")
          } catch (error) {
               console.log(error.message)
          }
         }







  return (
     <button onClick={google_Signin} type="button" className="bg-red-700 text-white  w-full p-2 rounded-md cursor-pointer 
     hover:opacity-80 transition-all disable:opacity-80">Continue with Google</button>
  )
}

export default Auth;
