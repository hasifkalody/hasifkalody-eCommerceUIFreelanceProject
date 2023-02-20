import React from 'react'
import LogoText from '../Assets/Icons/LogoText'
import NavArrow from '../Assets/Icons/NavArrow'
import NaSearch from '../Assets/Icons/NaSearch'
import Heart from '../Assets/Icons/Heart'
import Cart from '../Assets/Icons/Cart'
import NavIcon from '../Assets/Icons/NavIcon'
import './Navbar.css'

function Navbar() {
    return (
        <div className='NavbarMain'>
            <div className='NavMiddle'>
                <div className='Navbar'>
                    <div className='NavbarLg'>
                        <div className='NavLgElmntMain'>
                            <div className='NavLgElmnt1'></div>
                            <div className='NavLgElmnt2'></div>
                        </div>
                        <LogoText />

                    </div>
                    <div className='NvDrpDwn'>
                        <span>Classifieds</span>
                        <NavArrow />
                    </div>
                    <div className='NvSearch'>
                        <input type="text" placeholder='Search here...' />
                        <NaSearch />
                    </div>
                    <div className='NavHeart'>
                        <Heart />
                    </div>
                    <div className='NavCart'>
                        <Cart />
                    </div>
                    <div className='NavIcn'>
                        <NavIcon />
                    </div>


                </div>
                <div className='NavClsfds'>
                    <span>Classifieds</span>
                </div>
            </div>


        </div>
    )
}

export default Navbar
