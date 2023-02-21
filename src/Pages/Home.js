import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import  HeaderTop from '../Components/HeaderTop/HeaderTop'
import Navbar from '../Components/Navbar/Navbar'
import NavOptions from '../Components/NavOptions/NavOptions'
import Section1 from '../Components/Section/Section1'

function Home() {
  return (
    <div>
      <HeaderTop/>
      <Navbar/>
      <NavOptions/>
      {/* <Carousel/> */}
      <Section1/>
    </div>
  )
}

export default Home
