import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deletStart,deletSuccess,deletFail } from "../../redux/user/userSlice";
import { useDispatch,useSelector } from "react-redux";



 function Delete({userid}) {
     const {Error,user}=useSelector((state)=>{
          return state.user.userReducer;
     });
     const Dispatch = useDispatch();
     const navigate=useNavigate()
     console.log(user)
    async function DeletUser(){
          try {
               Dispatch(deletStart())
               const res= await axios.delete("api/user/deleteuser/"+userid);
               alert('deleted')
               console.log('delet res',res.data)
               
               if(!res.data.statusCode===200)
               {
                    Dispatch(deletFail(res.data.message))
               }
               Dispatch(deletSuccess(null));
          } catch (error) {
               Dispatch(deletFail(error.message)); 
               console.log('delet funcitoni',error.message);
          };
     };

  return (
    <span onClick={DeletUser} className="text-red-500 cursor-pointer hover:text-red-700 transition-all">Delete Account</span>
  )
};

export default Delete;