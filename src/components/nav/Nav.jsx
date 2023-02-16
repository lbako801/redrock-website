import React from 'react'
import './nav.css'
import LOGO  from '../../assets/images/homepage-images/RRlogo.png'

const Nav = () => {
  return (
      <div id='nav'>
          <div id='logo'>
              <img src={LOGO} />
          </div>
          <div id='nav-btns'>
            <a>HOME</a>
            <a>ABOUT US</a>
            <a>SERVICES</a>
            <a>RESOURCES</a>
            <a>CONTACT</a>
          </div>

    </div>
  )
}

export default Nav