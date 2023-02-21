import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import FlashSale from '../Components/FlashSale/FlashSale'
import  HeaderTop from '../Components/HeaderTop/HeaderTop'
import Navbar from '../Components/Navbar/Navbar'
import NavOptions from '../Components/NavOptions/NavOptions'
import Recommendations from '../Components/Recommendations/Recommendations'
import Section1 from '../Components/Section1/Section1'
import Section2 from '../Components/Section2/Section2'
import HotSale from '../Components/HotSale/HotSale'
import Section3 from '../Components/Section3/Section3'
import RecentViews from '../Components/RecentViews/RecentViews'

function Home() {
  return (
    <div>
      <HeaderTop/>
      {/* <Navbar/>
      <NavOptions/>
      <Carousel/> 
      <Section1/>
      <Section2/>
      <Recommendations/>
      <FlashSale/>
      <HotSale/>
      <Section3/> */}
      <RecentViews/>
    </div>
  )
}

export default Home
