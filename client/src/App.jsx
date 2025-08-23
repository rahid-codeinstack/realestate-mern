import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header/Header"



function App() {
  return (
  <BrowserRouter>
  
  <Header></Header>

    <Routes>

      <Route path="/" element={<Home></Home>}/>
      <Route path="/profile" element={<Profile></Profile>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/sign-in" element={<Signin></Signin>}/>
      <Route path="/sign-up" element={<Signup></Signup>}/>



    </Routes>
  </BrowserRouter>
  )
}

export default App  