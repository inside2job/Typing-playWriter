import React from 'react'
import AccountCircle from './AccountCircle'
import typo from '../download.jpg'
const Header = () => {
  return (
    <div className="header">
        <div className="logo">
        <img className='logo-pic' src="https://typo123.netlify.app/static/media/pastille-methode.bcab8ae355f71ea64569e4d69d86fd0f.svg" alt='Logo'/>
        </div>
        <div className="user-btn">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header