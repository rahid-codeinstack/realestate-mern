import { useSelector } from "react-redux"
function Profile() {
  const {user}=useSelector((state)=>{
    return state.user.userReducer;
  });

  return (
    <div className="profile-container max-w-lg  mt-5 mx-auto">
        <div className="profile-image overflow-hidden mb-2 border-2 rounded-full border-slate-500 w-15 h-15 mx-auto">
          <img className="w-full h-full " src={user.avetar} alt="user profile" />
        </div>
        <form   className=" flex flex-col m-auto mt-2 justify-center">
            <input type="text" className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="username" placeholder={'username'} value={user.username} />
            <input type="email" className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="email" placeholder={'email'} value={user.email} />
            <input type="password" className="p-3 bg-slate-300 tex-black rounded-md mb-3 focus:ouline-1 focus:outline-slate-500" id="password" placeholder="password"  />
            <button className="p-3 bg-green-600 cursor-pointer  text-white w-full rounded-md mb-3 hover:opacity-80">Update</button>
            <div className="py-3 flex justify-between items-center text-red-700">
                <span className="text-red-500 cursor-pointer hover:text-red-700 transition-all">Delete Account</span>
                <span className="text-red-500 cursor-pointer hover:text-red-700 transition-all">Sign out</span>
            </div>


        </form>
    </div>
  )
}

export default Profile