import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar' >
        <div>
            <h2 className='nav_logoTitle'>MyWebsite</h2>
        </div>
       
        <div className="header_nav">
            <div className="nav_item">
                <span className='nav_itemLineOne'>Hello Guest</span>
                <span className='nav_itemLineTwo'>Sign in</span>
            </div>
            <div className="nav_item">
                <span className='nav_itemLineOne'>Your</span>
                <span className='nav_itemLineTwo'>Website</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
