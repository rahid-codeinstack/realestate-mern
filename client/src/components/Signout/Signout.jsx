import { signOutSuccess , signOutFail , signOutStart} from "../../redux/user/userSlice"
import { useNavigate, useNavigation } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from 'axios'
import { useState } from "react"


function Signout() {
    const [loading,setloading]=useState(false)    

     const Dispatch = useDispatch();
    async  function handleSignOut(){
         try {
                setloading(true)
                Dispatch(signOutStart())
                
                alert('sigout start')
                const res= await axios.post('api/auth/signout');
                if(!res.data.success)
                {
                return Dispatch(signOutFail(res.data.message));
                }
                Dispatch(signOutSuccess(null));
                setloading(false)

         } catch (error) {
          Dispatch(signOutFail(error.message))
          setloading(false);
         }
     }
  return (
     <span onClick={handleSignOut} disabled={loading} className="text-red-500 hover:text-red-700 transition-all cursor-pointer">Sign out</span>
  )
}

export default Signout