import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Home from './pages/home'
import Contact from './pages/contact'
import Shop from './pages/shop'
import "./assets/scss/main.scss"
import LogIn from './pages/logIn'


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
            <Route path={'/signin'} element={<LogIn/>}/>
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
