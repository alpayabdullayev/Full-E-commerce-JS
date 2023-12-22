import React from 'react'
import LoginRegisterImg from '../loginRegisterImg'
import SignUpForm from '../signUpForm'

const SignUpSection = () => {
  return (
    <>
    <section id='signup' className='py-20'>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <LoginRegisterImg />
        <SignUpForm/>
        
      </div>
    </section>
    </>
  )
}

export default SignUpSection