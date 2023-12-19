import React from 'react'
import CountDownTimer from '../countDownTimer'
import SectionTitle from '../SectionTitle'
import SectionTitleContent from '../sectionTitleContent'

const FlashSales = () => {
  return (
    <>
        <SectionTitleContent title={"Today’s"} func={<CountDownTimer/>}/>
    </>
  )
}

export default FlashSales