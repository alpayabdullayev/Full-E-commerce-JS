import React from 'react'
import HeaderList from '../headerList'
import HeaderSlider from '../headerSlider'

const Header = () => {
  return (
    <header id='header'  >
        <div className="wrapper">
            <div className="grid grid-cols-12 gap-4 ">
                <div className='col-span-12  xl:col-span-3'>
                    <HeaderList/>
                </div>
                <div className='col-span-12  xl:col-span-9 '>
                    <HeaderSlider/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header