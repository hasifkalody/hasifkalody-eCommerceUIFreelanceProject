import React from 'react'
import Star from '../../Components/Assets/Icons/Star'
import './HotSaleCard.css'
function HotSaleCard({ src, desc }) {
    return (
        <div className='RcmndtnsCard htCard'>
            <div className='htCardimg'>
                <img src={src} alt="" />
            </div>
            <div className='Rc2'>
                <div className='Rcdiv'><span>{desc}</span></div>
                <div className='RcCardEl1'><span>$876.98</span></div>
                <div className='RcEl2'>
                    <div className='RcEl21'><span>$890.99</span></div>
                    <div className='RcEl22'>
                        <span>4.5</span>
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotSaleCard
