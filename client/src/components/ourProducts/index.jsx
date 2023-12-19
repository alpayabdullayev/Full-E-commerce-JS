import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionTitleContent from '../sectionTitleContent'
import OurProductsContent from '../ourProductsContent'
import Button from '../button'

const OurProducts = () => {
  return (
    <>
    <section>
        <div className="wrapper">
            <SectionTitle title={"Our Products"}/>
            <SectionTitleContent title={"Explore Our Products"}/>
            <OurProductsContent/>
            <div className="flex justify-center items-center my-14">
            <Button text={"View All Products"} bgPrimary={true} />
          </div>
        </div>
    </section>
    
    </>
  )
}

export default OurProducts