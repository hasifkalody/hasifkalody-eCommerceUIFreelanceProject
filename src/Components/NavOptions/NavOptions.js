import React from 'react'
import './NavOptions.css'
import NavArrow from '../Assets/Icons/NavArrow'


function NavOptions() {
    return (
        <div className='nvOptMain'>
            <div className='nvOptns'>
                <div className='nvCtgrs'>
                    <span>All Categories</span>
                    <NavArrow/>
                </div>
                <div className='nvCtgrOptns'>
                    <span>Books</span>
                    <span>Electronics</span>
                    <span>real estate</span>
                    <span>Cars-bikes</span>
                    <span>Dorm-furniture</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>Music</span>
                    <span>hobbies Games</span>
                    <span>Kids</span>
                </div>
            </div>
        </div>
    )
}

export default NavOptions
