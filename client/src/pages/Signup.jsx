import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;



function Signup() {
    const [FormData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
    })
    const [Error,setError]=useState('');
    const [Message,setMessage]=useState('')
    const [isLoading,setisLoadging]=useState(false);
    const navigate=useNavigate()



function HandleChange(e){
  const Value=e.target.value;
  const id=e.target.id;
  setFormData({...FormData,[id]:Value});
}

function ClearError(){
    setTimeout(() => {
        setError("")
    }, 4000);
}
function ValidateForm(){
  const {username,email,password}=FormData;
  if(username,!email,!password)
  {
     setError('form all field required')
    return ClearError()
  }
  if(FormData.username.length<3)
  {
     setError("username must aleast 3 character")
    return ClearError()
  }
  if(!emailRegix.test(email))
  {
     setError("incorrect email")
    return ClearError()
  }
  if(password.length < 6)
  {
     setError("password atleast 6 character")
    return ClearError()
  }
}
async function HandleSubmiteForm(e){
    e.preventDefault();
    ValidateForm()
  try {
      setisLoadging(true)  
    const res= await axios.post('/api/auth/signup',FormData)
    if(!res.data.success)
    {
      setisLoadging(false)
      setError(res.data.message)
      return ClearError();
    }
      setisLoadging(false)
      alert("hellow world")
      setMessage(res.data.message)
       navigate("/sign-in")
  


  } catch (error) {
      setError(error.message)
      setisLoadging(false)
      ClearError()

  }
    

}
  return (
      <div className="mt-3 w-70 sm:w-100 mx-auto py-3">
        <header><h1 className="text-2xl text-center mb-3 font-bold text-slate-700">Sign Up</h1></header>
          <form onSubmit={HandleSubmiteForm} className="flex justify-center items-center flex-col   gap-3 ">
              <input type="text" onChange={HandleChange} value={FormData.username} placeholder="username" className="bg-slate-300 w-full rounded-md p-2  txt-white focus:border-2 " id="username" required  />
              <input type="email" onChange={HandleChange} value={FormData.email} placeholder="email" className="bg-slate-300 w-full rounded-md p-2  txt-white focus:border-2 " id="email" required />
              <input type="password" onChange={HandleChange} value={FormData.password} placeholder="password" className="bg-slate-300 w-full rounded-md p-2 border-2 txt-white focus:border-slate-500  " id="password" required />
              <button disabled={isLoading} type="submite" className="py-2 bg-slate-500 w-full px-2 text-white cursor-pointer rounded-md hover:opacity-90 transition-all ">{isLoading ? "Loading...":"Sign Up"}</button>
              <div className="flex w-full mt-2 gap-3">
                  <span className="text-slate-700">have Account ? </span>
                  <Link to="/sign-in" className='text-red-500'>Sign In</Link>
              </div>
              <div className='text-red-500 w-full  py-2 px-2 '>
               {Error && !Message && <span>{Error}</span>}
              {!Error && Message && <span>{Message}</span>}
              </div>
          </form>
      </div>
  )
}

export default Signup