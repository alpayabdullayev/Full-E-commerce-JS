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


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={'/login'} element={<LogIn/>}/>
            <Route path={'/signup'} element={<SignUp/>}/> 
            <Route element={<PrivateRoute/>}>
              <Route path={'/user'} element={<UserPage/>}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
