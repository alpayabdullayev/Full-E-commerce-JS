import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/home'
import Contact from './pages/contact'
import Shop from './pages/shop'
import "./assets/scss/main.scss"
import LogIn from './pages/logIn'
import SignUp from './pages/signup'
import UserPage from './pages/userPage'
import PrivateRoute from './routes/PrivateRoute'
import Wishlist from './pages/wishlist'
import NotFound from './pages/NotFound'
import About from './pages/about'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/signup'} element={<SignUp/>}/> 
            <Route path={'/wishlist'} element={<Wishlist/>}/> 
            <Route element={<PrivateRoute/>}>
              <Route path={'/user'} element={<UserPage/>}/>
            </Route>
            <Route path={"*"} element={<NotFound/>}></Route>
          </Route>
         
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
