import React from 'react'
import Sctn2Card from '../Sctn2Card/Sctn2Card'
import './Section2.css'
// images
import img1 from '../../Assets/ImagesForSec2/placeholder1.png'
import img2 from '../../Assets/ImagesForSec2/placeholder2.png'
import img3 from '../../Assets/ImagesForSec2/placeholder3.png'
import img4 from '../../Assets/ImagesForSec2/placeholder4.png'
function Section2() {
    return (
        <div className='sctn2Main'>
            <div className='sctn2'>
                <div className='sctn2Lft'>
                    <div className='sctn2Lft1'>Classified Products on the week</div>
                    <div className='sctn2Lft2'>
                        <div className='sctn2Lft2spnL'>
                            <div></div>
                        </div>
                        <div className='sctn2Lft2spnR'>
                            <div></div>
                        </div>
                    </div>
                    <div className='sctn2Lft3'>
                        <span>Explore</span>
                        <div></div>
                    </div>
                </div>


                <Sctn2Card src={img1} desc='Holy Stone HS470 Foldable GPS RC Drone'/>
                <Sctn2Card src={img2} desc='Marshall Stockwell II Portable Speaker' />
                <Sctn2Card src={img3} desc='2020 Ford Mustang GT Fastback' />
                <Sctn2Card src={img4} desc='Iphone 11 pro max'/>
            </div>
        </div>
    )
}

export default Section2
