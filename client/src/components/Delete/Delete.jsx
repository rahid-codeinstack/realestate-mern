import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deletStart,deletSuccess,deletFail } from "../../redux/user/userSlice";
import { useDispatch,useSelector } from "react-redux";



 function Delete({userid}) {
     const {Error}=useSelector((state)=>{
          return state.user.userReducer;
     });
     const Dispatch = useDispatch();
     const navigate=useNavigate()
    async function DeletUser(){
          try {
               Dispatch(deletStart())
               const res= await axios.delete("api/user/delet"+userid);
               if(!res.data.statusCode===200)
               {
                    throw new Error("delet confused")
               }
               Dispatch(deletSuccess());
               document.cookie.remove();
               navigate("/sign-up");
          } catch (error) {
               Dispatch(deletFail(error.message));  
          };
     };

  return (
    <span onClick={DeletUser} className="text-red-500 cursor-pointer hover:text-red-700 transition-all">Delete Account</span>
  )
};

export default Delete;