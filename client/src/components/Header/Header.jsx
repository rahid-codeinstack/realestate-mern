
import './Header.css'
import estateLogo from '../../assets/estate.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
     const {user} = useSelector((state)=>{
          return state.user.userReducer;
     });
     console.log(user)

  return (
     <>

          <header className='header bg-slate-200 shadow-sm p-3'>
               <nav className='nav-bar m-auto flex justify-between items-center'>

                         <div className="flex flex-col justify-center i tems-center relative ">
                               <h1 className='text-center -translate-y-2   border-2 border-slate-500 rounded-full overflow-hidden  '>
                              <Link to={'/'}> <img src={estateLogo} alt="estate-logo" className='w-12 h-12 hover:scale-[102%] rounded-full  px-2 bg-red-500  transition-all bg-white' />     </Link> 
                             </h1>
                           <div className="flex gap-1 absolute top-10  -left-2 ">
                              <Link to={'/'}><span className='text-slate-500 capitalize '>real</span>     
                              <span className='text-slate-700 capitalize'>estat</span></Link>
                             </div>
                         </div>

                  <form className='bg-slate-300 justify-start search-form flex  items-center gap-2 py-1 px-3 rounded-sm'>
                         <input type="text" placeholder='search..' className='focus:outline-none  ' />
                    </form>
                   <ul className='flex items-center justify-center gap-3'>
                    <li className='text-slate-700 hidden md:inline'>Home</li>
                    <li className='text-slate-700'>About</li>
                    <li className='text-slate-700 '>
                    <Link to={'/profile'}>
                    {user?.avetar ? <img className='w-10 h-10 rounded-full hover:scale-[101%] border-slate-3000 border-2' src={user.avetar} alt='profile'></img>:"sign in"}
                    </Link>
                    </li>
                   </ul>
               </nav>
          </header>
     
     </>
  )
}

export default Header;