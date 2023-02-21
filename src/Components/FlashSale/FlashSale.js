import React from 'react'
import './FlashSale.css'
import img1 from '../../Assets/ImagesForFlashSale/im1.png'
import img2 from '../../Assets/ImagesForFlashSale/im2.png'
function FlashSale() {
    return (
        <div className='FsMain'>
            <div className='Fs'>
                <div className='FsEl1'>
                    <div className='FsEl11'><span>Flash Sale</span></div>
                    <div className='FsEl12'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</span></div>
                    <div className='FsEl13'><span>05  :  42  :  19  :  54</span></div>
                </div>
                <div className='FsEl2'>
                    <div className='FsEl2Inner'>
                        <img src={img1} alt="" />
                        <div className='FsEl22'>
                            <div className='FsEl221'><span>Casio G-Shock Ana-Digi Quartz World Time 200m Black</span></div>
                            <div className='FsEl222'><span className='FsEl222spn1'>$33.3</span><span className='FsEl222spn2'>24 left</span></div>
                            <div className='FsEl223'></div>
                        </div>
                    </div>
                </div>
                <div className='FsEl2'>
                    <div className='FsEl2Inner'>
                        <img src={img2} alt="" />
                        <div className='FsEl22'>
                            <div className='FsEl221'><span>Canon LBP113w imageCLASS WiFi Laser Printer</span></div>
                            <div className='FsEl222'><span className='FsEl222spn1'>$33.3</span><span className='FsEl222spn2'>24 left</span></div>
                            <div className='FsEl223'></div>
                        </div>
                    </div>
                </div>
                <div className='FsImSelectorMain'>
                    <div className='FsImSelector'>
                        <div className='FsImSelector1 FsImSelector1Active'></div>
                        <div className='FsImSelector1'></div>
                        <div className='FsImSelector1'></div>
                        <div className='FsImSelector1'></div>
                    </div>
                    <span>View more</span>

                </div>
            </div>
        </div>
    )
}

export default FlashSale
