import { Link } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
     <>

          <header className='header bg-slate-200 shadow-sm p-3'>
               <nav className='nav-bar m-auto flex justify-between items-center'>
                    <h1 className='flex gap-1 lg:text-[25px] font-bold md:text-[25px]'>
                              <span className='text-slate-500 capitalize '>real</span>     
                              <span className='text-slate-700 capitalize'>estat</span>
                    </h1>
                  <form className='bg-slate-300 justify-start search-form flex  items-center gap-2 py-1 px-3 rounded-sm'>
                         <input type="text" placeholder='search..' className='focus:outline-none  ' />
                    </form>
                   <ul className='flex item-center justify-center gap-3'>
                    <li className='text-slate-700 hidden md:inline'>Home</li>
                    <li className='text-slate-700'>About</li>
                    <li className='text-slate-700'>
                              <Link to={"/sign-in"}>Sign in</Link>
                    </li>
                   </ul>
               </nav>
          </header>
     
     </>
  )
}

export default Header;