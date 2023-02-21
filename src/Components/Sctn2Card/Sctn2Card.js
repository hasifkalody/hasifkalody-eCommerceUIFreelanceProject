import React from 'react'
import './Sctn2Card.css'
import Sctn2CrdLocation from '../Assets/Icons/Sctn2CrdLocation'

function Sctn2Card({ src,desc }) {
  console.log(src)
  return (
    <div className='sctn2CardMain'>
      <img src={src} alt="" />
      <div className='sctn2CardEl2Mn'>
        <div className='sctn2CardEl2'>
          <span>{desc}</span>
        </div>
        <div className='sctn2CardEl3'>
          <div className='sctn2CardEl31'> <span>$300.98</span></div>
          <div className='sctn2CardEl32'>
            <Sctn2CrdLocation/>
            <div><span>Cape Hadstone</span> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sctn2Card
