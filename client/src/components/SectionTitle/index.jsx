import React from 'react'

const SectionTitle = ({title}) => {
  return (
   <>
   <div className='py-4 flex gap-4 items-center'>
        <div className='w-[20px] h-[40px] bg-secondary rounded-md'></div>
        <h1 className='font-bold text-2xl text-secondary '>{title}</h1>
   </div>
   </>
  )
}

export default SectionTitle