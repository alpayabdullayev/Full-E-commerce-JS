import React from 'react';
import SectionTitle from '../SectionTitle';
import FlashSales from '../flashSales';
import TodaySlider from '../todaysSlider';
import Button from '../button';

const Todays = () => {
  return (
    <>
      <section id='todays' className='py-14 '>
        <div className="wrapper border-bottom ">
          <SectionTitle title={"Today’s"}/>
          <FlashSales/>
          <TodaySlider/>
          <div className="flex justify-center items-center my-14">
            <Button text={"View All Products"} bgPrimary={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Todays;
