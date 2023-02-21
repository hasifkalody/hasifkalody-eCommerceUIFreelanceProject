import React from 'react'
import './RcmndtnsCard.css'
import Start from '../../Components/Assets/Icons/Star'
function RcmndtnsCard({ src, desc }) {
    return (
        <div className='RcmndtnsCard'>
            <img src={src} alt="" />
            <div className='Rc2'>
                <div className='Rcdiv'><span>{desc}</span></div>
                <div className='RcCardEl1'><span>$1,245.33</span></div>
                <div className='RcEl2'>
                    <div className='RcEl21'><span>$1,300</span></div>
                    <div className='RcEl22'>
                        <span>4.5</span>
                        <Start />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RcmndtnsCard
