import React from 'react'
import './ImageCarousel.css'

function ImageCarousel() {
    return (
        <div className='Crslmain'>
            <div className='Crsl'>
                <div className='CrslDsply'>
                    <div className='CrslCntentsSd1'>

                    </div>
                    <div className='CrslCntents'>
                        <div className='CrslCntentsTxt'>
                            <div><span>From students to senior citizens</span></div>
                            <div><span>this web portal of</span></div>
                            <div><span><strong><b>"Products and Classifieds”</b></strong></span></div>
                            <div><span>provides it all</span></div>
                        </div>
                    </div>
                    <div className='CrslCntentsSd2'>

                    </div>

                </div>
                <div className='CrslSelctr'>
                    <div className='CrslSelctrEl CrslSelctrActive'></div>
                    <div className='CrslSelctrEl'></div>
                    <div className='CrslSelctrEl'></div>
                    <div className='CrslSelctrEl'></div>
                </div>
            </div>
        </div>
    )
}

export default ImageCarousel
