import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import CountUp from 'react-countup';

const Cash = () => {
  return (
    <section id='cash' className='py-20'>
      <div className='wrapper'>
        <div className='flex justify-center items-center flex-wrap gap-20'>
          <div className='hover:bg-secondary hover:text-white text-center duration-300 py-4 px-8 flex-center border-2 rounded-md mx-2'>
            <div className='rounded-full bg-search w-20 h-20 flex-center'>
              <div className='rounded-full bg-black w-10 h-10 flex-center text-white text-3xl'>
                <AiOutlineDollar />
              </div>
            </div>
            <h1 className='text-xl font-bold py-1'><CountUp delay={3} end={10.5} duration={5}/>K</h1>
            <p>Sellers active on our site</p>
          </div>

          <div className='hover:bg-secondary hover:text-white text-center duration-300 py-4 px-8 flex-center border-2 rounded-md mx-2'>
            <div className='rounded-full bg-search w-20 h-20 flex-center'>
              <div className='rounded-full bg-black w-10 h-10 flex-center text-white text-3xl'>
                <AiOutlineDollar />
              </div>
            </div>
            <h1 className='text-xl font-bold py-1'><CountUp delay={3} end={33} duration={5}/>K</h1>
            <p>Sellers active on our site</p>
          </div>

          <div className='hover:bg-secondary hover:text-white text-center duration-300 py-4 px-8 flex-center border-2 rounded-md mx-2'>
            <div className='rounded-full bg-search w-20 h-20 flex-center'>
              <div className='rounded-full bg-black w-10 h-10 flex-center text-white text-3xl'>
                <AiOutlineDollar />
              </div>
            </div>
            <h1 className='text-xl font-bold py-1'><CountUp delay={3} end={45} duration={5}/>K</h1>
            <p>Sellers active on our site</p>
          </div>

          <div className='hover:bg-secondary hover:text-white text-center duration-300 py-4 px-8 flex-center border-2 rounded-md mx-2'>
            <div className='rounded-full bg-search w-20 h-20 flex-center'>
              <div className='rounded-full bg-black w-10 h-10 flex-center text-white text-3xl'>
                <AiOutlineDollar />
              </div>
            </div>
            <h1 className='text-xl font-bold py-1'><CountUp delay={3} end={25} duration={5}/>K</h1>
            <p>Sellers active on our site</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cash;
