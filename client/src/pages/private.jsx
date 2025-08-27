import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom";


function Private() {
     const {user}=useSelector((state)=>{
     return state.user.userReducer;
     })
     console.log(user)


  return (
          user?.avetar ? <Outlet/> :<Navigate to={"/sign-in"}/>
  )
}

export default Private