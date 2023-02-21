import React from 'react'
import HotSaleCard from '../HotSaleCard/HotSaleCard'
import './HotSale.css'
// images
import img1 from '../../Assets/ImagesFor HotSale/img1.png'
import img2 from '../../Assets/ImagesFor HotSale/img2.png'
import img3 from '../../Assets/ImagesFor HotSale/img3.png'
import img4 from '../../Assets/ImagesFor HotSale/img4.png'
import img5 from '../../Assets/ImagesFor HotSale/img5.png'
function HotSale() {
    return (
        <div className='RcMain'>
            <div className='Rcmndtns'>
                <div className='RcTp'>
                    <div className='RcTpEl1'><span>Hot Sale!</span></div>
                </div>
                <div className='RcCarousel'>
                        <div className='sctn2Lft2spnL'>
                            <div style={{ borderTop: "solid calc(4px*.71)  #4D4D4D ", borderRight: "solid calc(4px*.71)  #4D4D4D " }}></div>
                        </div>
                        <HotSaleCard src={img1} desc='PVC Bean Bag Black 80x80x50centimeter' />
                        <HotSaleCard src={img2} desc='U2520D 25-Inch UltraSharp QHD USB-C Monitor Black' />
                        <HotSaleCard src={img3} desc='Flip 5 Waterproof Portable Bluetooth Speaker Black' />
                        <HotSaleCard src={img4} desc='MacBook Pro With Touch Bar And Touch ID, 13.3-Inch Dis...' />
                        <HotSaleCard src={img5} desc='PlayStation 5 Console (Disc Version) With Extra Contro...' />
                        <div className='sctn2Lft2spnR'>
                            <div style={{ borderTop: "solid calc(4px*.71)  #4D4D4D ", borderRight: "solid calc(4px*.71)  #4D4D4D " }}></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default HotSale
