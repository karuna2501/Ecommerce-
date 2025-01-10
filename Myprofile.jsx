import React, { useEffect } from 'react'
import { FaUserCircle, FaHeart, FaShoppingCart, FaCartPlus } from 'react-icons/fa'
import LoginForm from './LoginForm'
import toast,{Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'
import  "./Myprofile.css"
import { FaHeadset } from 'react-icons/fa6'

const Myprofile = ({mobileNumber,setMobileNumber}) => {

  const handleSignOut = () =>{
    localStorage.removeItem('userNumber');
    setMobileNumber('');
    toast.success('Sign Out Successfully')
  }

  return (
    <>
      <Toaster />
      {!mobileNumber && 
        <LoginForm 
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}/> }


      {mobileNumber &&  <div className='ProfileContainer'>

          <div className='userMenus'>
              <FaUserCircle className='userProfileIcon'/>
              <h1 className='userMobileNumber'>mobileNumber</h1><br></br>
              <button><FaHeart />  Wishlist</button> <button><FaCartPlus /> Cart</button><br/>
              <button><FaShoppingCart/> Orders</button> <button><FaHeadset /> Help Center</button>
          </div><br/>

          <div className='profileEdit'>
            <Link to='/myprofile/editprofile'><button>Edit Profile</button><br/></Link>
            <button>Saved Address</button>
            <Link to='/myprofile'><button onClick={handleSignOut} >Sign Out</button></Link>
          </div>

        </div>
      }
    </>
  )
}

export default Myprofile
