import React from 'react'
import './RecentViews.css'
import Section1Card from '../Section1Card/Section1Card'
// images
import im1 from '../../Assets/ImagesForSec1/placeholder (1).png'
import im2 from '../../Assets/ImagesForSec1/placeholder (2).png'
import im3 from '../../Assets/ImagesForSec1/placeholder (3).png'
import im6 from '../../Assets/ImagesForSec1/placeholder (6).png'
import im7 from '../../Assets/ImagesForSec1/placeholder (7).png'

function RecentViews() {
  return (
    <div className='rscntVwsMn'>
      <div className='rscntVws'>
        <div className='sctn1Tp'>
          <span className='sctn1Lft'>Recently viewed</span>
          <div className='rscntVwsArrowMn'>
            <div className='rscntVwsArrowLft'></div>
            <div className='rscntVwsArrowRgt'></div>
          </div>
        </div>
        <div className='sctn1Prdcts  Rmvwrap'>
          <Section1Card ratings={'12'} imgSrc={im1} />
          <Section1Card ratings={'12'} imgSrc={im2} />
          <Section1Card ratings={'12'} imgSrc={im3} />
          <Section1Card ratings={'12'} imgSrc={im6} />
          <Section1Card ratings={'12'} imgSrc={im7} />

        </div>

      </div>

    </div>
  )
}

export default RecentViews
