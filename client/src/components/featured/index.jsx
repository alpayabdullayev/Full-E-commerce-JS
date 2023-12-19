import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionTitleContent from '../sectionTitleContent'
import FeaturedContent from '../featuredContent'

const Featured = () => {
  return (
    <section id='featured' className='py-20'>
        <div className="wrapper">
            <SectionTitle title={"Featured"}/>
            <SectionTitleContent title={"New Arrival"}/>
            <FeaturedContent/>
            
        </div>
    </section>
  )
}

export default Featured