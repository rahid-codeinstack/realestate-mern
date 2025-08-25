import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;



function SignIn() {
    const [FormData,setFormData]=useState({
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
  if(!email || !password)
  {
     setError('form all field required')
    return ClearError()
  }

  if(!emailRegix.test(email))
  {
     setError("!wrong credential")
    return ClearError()
  }
  if(password.length < 6)
  {
     setError("!wrong credential")
    return ClearError();
  }
}
async function HandleSubmiteForm(e){
    e.preventDefault();
    ValidateForm()
  try {
      setisLoadging(true)  
    const res= await axios.post('/api/auth/signin',FormData)
    if(!res.data.success)
    {
      setisLoadging(false)
      setError(res.data.message)
      return ClearError();
    }
      setisLoadging(false)
      setMessage(res.data.message)
       navigate("/")
  


  } catch (error) {
    console.log(error)
      setError(error.message)
      setisLoadging(false)
      ClearError()

  }
    

}
  return (
      <div className="mt-3 w-70 sm:w-100 mx-auto py-3">
        <header><h1 className="text-2xl text-center mb-3 font-bold text-slate-700">Sign In</h1></header>
          <form onSubmit={HandleSubmiteForm} className="flex justify-center items-center flex-col   gap-3 ">
            
              <input type="email" onChange={HandleChange} value={FormData.email} placeholder="email" className="bg-slate-300 w-full rounded-md p-2  txt-white focus:border-2 " id="email" required />
              <input type="password" onChange={HandleChange} value={FormData.password} placeholder="password" className="bg-slate-300 w-full rounded-md p-2 border-2 txt-white focus:border-slate-500  " id="password" required />
              <button disabled={isLoading} type="submite" className="py-2 bg-slate-500 w-full px-2 text-white cursor-pointer rounded-md hover:opacity-90 transition-all ">{isLoading ? "Loading...":"Sign In"}</button>
              <div className="flex w-full mt-2 gap-3">
                  <span className="text-slate-700"> dont have Account ? </span>
                  <Link to="/sign-up" className='text-red-500'>Sign Up</Link>
              </div>
              <div className='text-red-500 w-full  py-2 px-2 '>
               {Error && !Message && <span>{Error}</span>}
              {!Error && Message && <span>{Message}</span>}
              </div>
          </form>
      </div>
  )
}

export default SignIn;
