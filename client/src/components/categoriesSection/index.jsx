import React from 'react'
import SectionTitle from '../SectionTitle'
import FlashSales from '../flashSales'
import SectionTitleContent from '../sectionTitleContent'
import CategorySectionSlider from '../categorySectionSlider'
import Button from '../button'

const CategorySection = () => {
  return (
    <>
    <section id='categorySection'>
        <div className="wrapper  border-bottom flex flex-col justify-center mx-auto">
        <SectionTitle title={"Categories"}/>
      
       <SectionTitleContent title={"Browse By Category"} btn={<Button text={"View All"} bgPrimary={true}/>} />
       

        <CategorySectionSlider/>
        </div>
    </section>
    </>
  )
}

export default CategorySection