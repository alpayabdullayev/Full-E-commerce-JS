import React from 'react'
import Button from '../../components/button'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <section id='notFound'>
        <div className="wrapper">
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='text-7xl font-bold '>404 Not Found</h1>
                <p className='py-4'>Your visited page not found. You may go home page</p>
               <div >
               <button className='py-[16px] px-[48px] rounded-md text-center text-white bg-secondary wFull  duration-500 hover:bg-search hover:text-black'><NavLink to={"/"}>Back to home page</NavLink></button>
               </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NotFound