import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
    <div className='sideBarBg'>
      <div className='sideBar'>
          <ul>
            <Link to="/myprofile"><li>Myprofile</li></Link>
            <Link to="/order"><li>Orders</li></Link>
            <Link to="/Cart"><li>Cart</li></Link>
          </ul>
      </div>
    </div>
    </>
  )
}

export default SideBar
