import React from 'react'
import './Footer.css'
import FoooterIcon1 from '../Assets/Icons/FoooterIcon1'
import FooterIcon2 from '../Assets/Icons/FooterIcon2'
import LogoText from '../Assets/Icons/LogoText'
// images
import img1 from '../../Assets/ImagesFotFooterSociel/im1.png'
import img2 from '../../Assets/ImagesFotFooterSociel/im2.png'
import img3 from '../../Assets/ImagesFotFooterSociel/im3.png'
import img4 from '../../Assets/ImagesFotFooterSociel/im4.png'
import img5 from '../../Assets/ImagesFotFooterSociel/im5.png'
function Footer() {
    return (
        <div className='FooterMn'>
            <div className='FooterEl1'><span>Back to Top</span> <div className='FooterEl11'></div></div>
            <div className='FooterEl2'>
                <div className='FooterEl21'>
                    <div className='FooterEl211'>
                        <FoooterIcon1 />
                    </div>
                    <div className='FooterEl212'>

                        <div className='FooterEl2121'><span>Sign Up for Newsletter</span></div>
                        <div className='FooterEl2122'>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                        <div className='FooterEl2123'>
                            <FooterIcon2 />
                        </div>

                    </div>
                    <div className='FooterEl213'>
                        <input type="email" placeholder='Enter your email here' />
                        <button className='FooterEl2132'>SUBSCRIBE</button>
                        <div className='FooterEl2133'>
                            <FooterIcon2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='FooterEl23'>
                <div className='FooterEl231'>
                    <div className='FooterEl2311'>
                        <div className='FooterEl2311Inner'>
                            <div className='NavLgElmntMain'>
                                <div className='NavLgElmnt1'></div>
                                <div className='NavLgElmnt2'></div>
                            </div>
                            <LogoText />
                        </div>
                        <div className='FooterEl23112'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </span></div>
                        <div className='FooterEl23113'>
                            <div className='FrEl23113Chld'>
                                <img src={img1} alt="" />
                            </div>
                            <div className='FrEl23113Chld'>
                                <img src={img2} alt="" />
                            </div>
                            <div className='FrEl23113Chld'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='FrEl23113Chld'>
                                <img src={img4} alt="" />
                            </div>
                            <div className='FrEl23113Chld'>
                                <img src={img5} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='FooterEl2312'>
                        <div className='FooterEl23121'><span>QUICK LINKS</span></div>
                        <div className='FooterEl23121Chld'><span>Products</span></div>
                        <div className='FooterEl23121Chld'><span>Classifieds</span></div>
                        <div className='FooterEl23121Chld'><span>Contact us</span></div>
                        <div className='FooterEl23121Chld'><span>Login</span></div>
                        <div className='FooterEl23121Chld'><span>Sign Up</span></div>
                        
                    </div>
                    <div className='FooterEl2313'></div>
                    <div className='FooterEl2314'></div>
                    <div className='FooterEl2315'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
