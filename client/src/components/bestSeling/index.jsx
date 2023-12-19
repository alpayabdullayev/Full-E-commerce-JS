import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionTitleContent from '../sectionTitleContent'
import Button from '../button'
import BestSelingContent from '../bestSelingContent'

const BestSeling = () => {
  return (
    <>
    <section>
        <div className="wrapper">
            <SectionTitle title={"This Month"}/>
            <SectionTitleContent title={"Browse By Category"} btn={<Button text={"View All"} bgPrimary={true}/>}/>
            <BestSelingContent/>
        </div>
    </section>
    
    </>
  )
}

export default BestSeling