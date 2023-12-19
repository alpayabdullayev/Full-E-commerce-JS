import React from 'react'
import BuynowSvg from "../../assets/imgs/productSVG/buynow.svg"
import "./index.scss"
import BuyNowDate from '../buynowDate'
import Button from '../button'

const BuyNow = () => {
  return (
    <section id='buynow' className='py-20'>
        <div className="wrapper flex flex-col justify-center items-center">
            <div className=' bg-black w-full min-h-[50vh] flex flex-wrap gap-12 justify-between px-20 py-20'>
                <div className='buyNowContent'>
                    <h5 className='text-emerald-600 font-bold text-xl'>
                    Categories
                    </h5>
                    <h1 className='buynowTitle text-text font-bold leading-15 '>
                    Enhance Your <br /> Music Experience
                    </h1>
                    <BuyNowDate/>
                    <div className='py-4'>
                    <Button  text={"Buy Now"} bgPrimary={false}/>
                    </div>
                </div>

                <div className='shadow-2xl'>
                    <img src={BuynowSvg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BuyNow