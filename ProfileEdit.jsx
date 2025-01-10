import React from 'react'
import './ProfileEdit.css'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProfileEdit = () => {
  return (
    <>
      <div className='profileEditContainer'>
        <Link to='/myprofile'><FaTimes  className='closeIcon'/></Link>

      <div className='profileEdit'>
        <p>Name</p> 
        <input type='text' placeholder='Name'/>
        <p>Mobile Number</p>
        <input type='number' placeholder='Mobile Number'/>
        <p>Address</p>
        <input style={{height:'100px'}} type='text' placeholder='Address'/>
        <br/>
        <input className='saveChanges' type='submit'value={'Save Changes'}/>
      </div>

    </div>
  </>
  )
}

export default ProfileEdit