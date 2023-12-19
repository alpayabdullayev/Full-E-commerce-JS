import React from 'react'

import Bus from "../../assets/imgs/bus.svg"

const DeliveryAndService = () => {
  return (
    
    <>
    <section id='deliveryAndServices' className='py-20'>
        <div className='wrapper'>
            <div className='flex justify-evenly items-center gap-20 flex-wrap'>
                <div className='flex justify-center items-center flex-col'>
                    <div>
                        <img src={Bus} alt="" />
                    </div>
                    <p>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div>
                        <img src={Bus} alt="" />
                    </div>
                    <p>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div>
                        <img src={Bus} alt="" />
                    </div>
                    <p>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>

                
            </div>
        </div>
    </section>
    </>
  )
}

export default DeliveryAndService