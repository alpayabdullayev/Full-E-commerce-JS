import React from 'react'
import Header from '../../components/header'
import Todays from '../../components/todays'
import CategorySection from '../../components/categoriesSection'
import BestSeling from '../../components/bestSeling'
import BuyNow from '../../components/buyNow'
import OurProducts from '../../components/ourProducts'
import Featured from '../../components/featured'
import DeliveryAndService from '../../components/deliveryAndService'



const Home = () => {
  return (
    <>
    <Header/>
    <Todays/>
    <CategorySection/>
    <BestSeling/>
    <BuyNow/>
    <OurProducts/>
    <Featured/>
    <DeliveryAndService/>

    </>
  )
}

export default Home