import React from 'react'
import logo from '../assets/logo.png'
import settings from '../assets/settings.png'

const Navbar = () => {
  return (
    <div className="navbar_container">
        <div className="logo_container">
            <img src={logo} alt="" />
        </div>
        <div className="user_container">
            <div className="setting">
                <img src={settings} alt="" />
            </div>
            <div className="profile">
                SJ
            </div>
        </div>
    </div>
  )
}

export default Navbar