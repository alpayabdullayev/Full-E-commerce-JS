import React from 'react'
import Header from '../../components/header'
import Todays from '../../components/todays'
import CategorySection from '../../components/categoriesSection'
import BestSeling from '../../components/bestSeling'
import BuyNow from '../../components/buyNow'
import OurProducts from '../../components/ourProducts'
import Featured from '../../components/featured'
import DeliveryAndService from '../../components/deliveryAndService'
import Table from '../../components/Table'
import TableBasket from '../../components/Table'
import BunuSil from '../../bunusil'

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
    <BunuSil/>
    <TableBasket/>
    </>
  )
}

export default Home