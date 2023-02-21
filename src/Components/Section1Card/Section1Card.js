import React from 'react'
import './Section1Card.css'
import Star from '../Assets/Icons/Star'

function Section1Card({ratings,imgSrc}) {
  console.log(imgSrc)
  return (
    <div className='sctn1Card'>
    <img src={imgSrc} alt="" />
    <div className='sctn1CrdDetails'>
      <div className='sctn1CrdDetails1'>
        <span>Fitness and activity Tracker</span>
      </div>
      <div className='sctn1CrdDetails2'>$33.3</div>
      <div className='sctn1CrdDetails3'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <span>({ratings})</span>
      </div>
    </div>
  </div>
  )
}

export default Section1Card
