import React from 'react'
import RcmndtnsCard from '../RecommendationsCard/RcmndtnsCard'
import './Recommendations.css'
// images
import img1 from '../../Assets/ImagesForRcmndtns/placeholder1.png'
import img2 from '../../Assets/ImagesForRcmndtns/placeholder2.png'
import img3 from '../../Assets/ImagesForRcmndtns/placeholder3.png'
import img4 from '../../Assets/ImagesForRcmndtns/placeholder4.png'
import img5 from '../../Assets/ImagesForRcmndtns/placeholder5.png'
function Recommendations() {
  return (
    <div className='RcMain'>
      <div className='Rcmndtns'>
        <div className='RcTp'>
          <div className='RcTpEl1'><span>Recommended</span></div>
          <div className='RcTpEl2'><span>View all</span></div>
        </div>
        <div className='RcCarousel'>
          <div className='sctn2Lft2spnL'>
            <div style={{ borderTop: "solid calc(4px*.71)  #4D4D4D ", borderRight: "solid calc(4px*.71)  #4D4D4D " }}></div>
          </div>

          <RcmndtnsCard src={img1} desc='iPhone 12 With Facetime 128GB Blue 5G Specs' />
          <RcmndtnsCard src={img2} desc='EOS M200 Mirrorless Came ra With EF-M 15-45mm ...' />
          <RcmndtnsCard src={img3} desc='Ultra Book Thin Laptop XL-01' />
          <RcmndtnsCard src={img4} desc='Magic Perfume' />
          <RcmndtnsCard src={img5} desc='Convers Gray' />

          <div className='sctn2Lft2spnR'>
            <div style={{ borderTop: "solid calc(4px*.71)  #4D4D4D ", borderRight: "solid calc(4px*.71)  #4D4D4D " }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
