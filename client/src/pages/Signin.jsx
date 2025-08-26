import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {   signinFailur , signinSuccess  , singinStart   } from '../redux/user/userSlice';
import { useDispatch  , useSelector } from 'react-redux';
import Auth from '../components/auth/auth';
const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;




function SignIn() {
    const [FormData,setFormData]=useState({
        email:"",
        password:"",
    })
    // const [Error,setError]=useState('');
    // const [isLoading,setisLoadging]=useState(false);
    const navigate=useNavigate()
    const {isLoading,Error}=useSelector((  state  ) => {
        return state.user.userReducer;
    })
    const Dispatch = useDispatch()




function HandleChange(e){
  const Value=e.target.value;
  const id=e.target.id;
  setFormData({...FormData,[id]:Value});
}

async function HandleSubmiteForm(e){
    e.preventDefault();

  try {

      Dispatch(singinStart())
      alert('sign in')
    const res= await axios.post('/api/auth/signin',FormData)
   
    if(!res.data.success)
    {
    return  Dispatch(signinFailur(res.data.message));
    }

      Dispatch(signinSuccess(res.data.user))
       navigate("/")

  } catch (error) {
    console.log(error.message)
    Dispatch(signinFailur(error.message))
  }
    

}
  return (
      <div className="mt-3 w-70 sm:w-100 mx-auto py-3">
        <header><h1 className="text-2xl text-center mb-3 font-bold text-slate-700">Sign In</h1></header>
          <form onSubmit={HandleSubmiteForm} className="flex justify-center items-center flex-col   gap-3 ">
            
              <input type="email" onChange={HandleChange} value={FormData.email} placeholder="email" className="bg-slate-300 w-full rounded-md p-2  txt-white focus:border-2 " id="email" required />
              <input type="password" onChange={HandleChange} value={FormData.password} placeholder="password" className="bg-slate-300 w-full rounded-md p-2 border-2 txt-white focus:border-slate-500  " id="password" required />
              <button disabled={isLoading} type="submite" className="py-2 bg-slate-500 w-full px-2 text-white cursor-pointer rounded-md hover:opacity-90 transition-all ">{isLoading ? "Loading...":"Sign In"}</button>
                <Auth/>
              <div className="flex w-full mt-2 gap-3">
                  <span className="text-slate-700"> dont have Account ? </span>
                  <Link to="/sign-up" className='text-red-500'>Sign Up</Link>
              </div>
              <div className='text-red-500 w-full  py-2 px-2 '>
               {Error  && <span>{Error}</span>}
              </div>
          </form>
      </div>
  )
}

export default SignIn;
