import React from 'react'
import LocationLogo from '../Assets/Icons/Location'
import Phone from '../Assets/Icons/Phone'
import Email from '../Assets/Icons/Email'
import HeaderDrpDwn from '../Assets/Icons/HeaderDrpDwn'
import './HeaderTp.css'

function HeaderTop() {
  return (
    <div className='headerTopMain'>
      <div className='headerTop'>
        <div className='headerTopLeft'>
          <div className='headerTopPhone'>
            <Phone />
            <span>+221 33 66 22</span>
          </div>
          <div className='headerTopMail'>
            <Email />
            <span>support@elextra.io</span>
          </div>
        </div>
        <div className='headerTopRight'>
          <div className='headerTopLoc'>
            <LocationLogo />
            <span>Locations</span>
          </div>
          <div className='headerTopVertical'>

          </div>
          <div className='headerTopDol'>
            <span>$ Dollar (US)</span>
            <HeaderDrpDwn/>   
          </div>
          <div className='headerTopLang'>
            <span>EN</span>
            <HeaderDrpDwn/>   
          </div>
        </div>


      </div>
    </div>

  )
}

export default HeaderTop
