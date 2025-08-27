import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom";


function Private() {
     const {user}=useSelector((state)=>{
     return state.user.userReducer;
     })


  return (
          user.email ? <Outlet/> :<Navigate to={"/sign-in"}/>
  )
}

export default Private