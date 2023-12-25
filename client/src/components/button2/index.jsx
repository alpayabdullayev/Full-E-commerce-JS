import React from 'react'

const Button2 = ({text}) => {
  return (
    <>
    <div className='projectBtn2'>
      <button
        className={`py-[16px] px-[48px] rounded-md text-center  duration-500 hover:bg-secondary hover:text-white border border-solid`}
      >
        {text}
      </button>
    </div>
    </>
  )
}

export default Button2