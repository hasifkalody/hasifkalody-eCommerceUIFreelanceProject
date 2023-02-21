import React from 'react'
import './Section1.css'
import Section1Card from '../Section1Card/Section1Card'
// images
import im1 from '../../Assets/ImagesForSec1/placeholder (1).png'
import im2 from '../../Assets/ImagesForSec1/placeholder (2).png'
import im3 from '../../Assets/ImagesForSec1/placeholder (3).png'
import im4 from '../../Assets/ImagesForSec1/placeholder (4).png'
import im5 from '../../Assets/ImagesForSec1/placeholder (5).png'
import im6 from '../../Assets/ImagesForSec1/placeholder (6).png'
import im7 from '../../Assets/ImagesForSec1/placeholder (7).png'
import im8 from '../../Assets/ImagesForSec1/placeholder (8).png'
import im9 from '../../Assets/ImagesForSec1/placeholder (9).png'
import im10 from '../../Assets/ImagesForSec1/placeholder (10).png'
function Section1() {
  return (
    <div className='sctn1Mn'>
      <div className='sctn1'>
        <div className='sctn1Tp'>
          <span className='sctn1Lft'>Best Deals</span>
          <span className='sctn1Rght'>View all</span>
        </div>
        <div className='sctn1Prdcts'>
          <Section1Card ratings={'12'} imgSrc={im1}/>
          <Section1Card ratings={'12'} imgSrc={im2}/>
          <Section1Card ratings={'12'} imgSrc={im3}/>
          <Section1Card ratings={'12'} imgSrc={im4}/>
          <Section1Card ratings={'12'} imgSrc={im5}/>
          <Section1Card ratings={'12'} imgSrc={im6}/>
          <Section1Card ratings={'12'} imgSrc={im7}/>
          <Section1Card ratings={'12'} imgSrc={im8}/> 
          <Section1Card ratings={'12'} imgSrc={im9}/>
          <Section1Card ratings={'12'} imgSrc={im10}/>
        </div>
      </div>

    </div>
  )
}

export default Section1
