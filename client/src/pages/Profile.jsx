import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import axios from 'axios'
import { updateStart,updateFail,updateSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import Delete from "../components/Delete/Delete";
import Signout from "../components/Signout/Signout";

function Profile() {
const [File,setFile]=useState('')
const fileRef = useRef(null)
  const {user,isLoading,Error}=useSelector((state)=>{
    return state.user.userReducer;
  });
  
const [formData,setformData]=useState({
  username:user.username,
  email:user.email,
  avetar:'',
  password:'',
});
const [imageUrl,setimageUrl]=useState('');
const [isLoadingFile,setisLoadingFile]=useState(false);
const  [fileUploadError,setFileUploadError]=useState('');
const [fileSuccess,setfileSuccess]=useState(false)
const Dispatch=useDispatch()





useEffect(()=>{
  if(File)
  {
    changeProfile()

  }
},[File])

 async function changeProfile(){
    const FileData = new FormData();
  FileData.append("file",File);
  FileData.append("upload_preset",'profile_images');
  FileData.append("cloud_name","dmooukppx");

 try {
  setisLoadingFile(true)
  const res = await axios.post("https://api.cloudinary.com/v1_1/dmooukppx/image/upload",FileData);
  if(!res.data.status===200)
  {
    return setFileUploadError(res.data.message)
  }
  setisLoadingFile(false)
  setfileSuccess(true)
  setimageUrl(res.data.secure_url)
  setformData({...formData,avetar:res.data.secure_url})
 

  setTimeout(() => {
    setfileSuccess(false)
  }, 1000);

 } catch (error) { 
 setFileUploadError(error.message)

 }

}



function handleFormFieldChange({target}){
  const fieldName=target.id;
  const fieldValue=target.value;
  setformData({...formData,[fieldName]:fieldValue});
}

 async function handleUpdateUserForm(e){
  e.preventDefault()
 const id=user._id;



  try {
    Dispatch(updateStart())
    const res= await axios.post("api/user/updateuser/"+id,formData)
    Dispatch(updateSuccess(res.data.user))
  } catch (error) {
   Dispatch(updateFail(error.message))
  }

  


}

  return (
    <div className="profile-container max-w-lg  mt-5 mx-auto">
      <input type="file" hidden onChange={(e)=>setFile(e.target.files[0])} name="avetar" ref={fileRef} accept="image/*" />
        <div className="profile-image overflow-hidden mb-2 border-2 rounded-full border-slate-500 w-15 h-15 mx-auto">
          <img onClick={()=>fileRef.current.click()} className="w-full h-full" src={imageUrl ? imageUrl:user.avetar}  alt="user profile" />
        </div>
        <div className="text-center w-full   h-10">
        {
              fileUploadError ? <span className="text-center text-red-500 text-xl">{fileUploadError}</span>:
              isLoadingFile ? <span className="text-center text-slate-500 text-xl">uploading...</span>:
              fileSuccess ? <span className="text-center text-green-500 text-xl">uploaded successfully</span>: !fileSuccess && imageUrl && ""
        }

        </div>
        <form  onSubmit={handleUpdateUserForm}  className=" flex flex-col m-auto mt-2 justify-center">
            <input type="text" onChange={handleFormFieldChange} className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="username" placeholder={'username'} value={formData.username} />
            <input type="email" onChange={handleFormFieldChange} className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="email" placeholder={'email'} value={formData.email} />
            <input type="password" onChange={handleFormFieldChange} className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="password" placeholder="password" />
            <button disabled={isLoading}  className="p-3 bg-green-600 cursor-pointer  text-white w-full rounded-md mb-3 hover:opacity-80">{isLoading ? "updating...":"Update"}</button>
            <div className="py-3 flex justify-between items-center">
                <Delete userid={user._id && user._id}/>
                <Signout userid={user._id && user._id}/>
            </div>

            <div className="mt-4 w-full text-red-500 text-left">
                {Error && Error}
            </div>
        </form>
    </div>
  )
}

export default Profile