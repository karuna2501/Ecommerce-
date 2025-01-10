import React from 'react'
import "./Header.css"
import {FaBars, FaChevronDown, FaHome, FaSearch, FaUserAlt, FaUserPlus} from "react-icons/fa"
import { Link } from 'react-router-dom'
import webTitleName from './logo 2.png';


const Header = ({setSearchValue,handleSubmit,handleBar,setMobileNumber}) => {

    return (
        <>
        <div className='navBar'>
            {/* <FaBars 
                onClick={handleBar}
                className='sideBarIcon'/> */}
           
            <form 
                className="headerForm" 
                onSubmit={handleSubmit}
            >
                
                 <img className='webTitle' src={webTitleName}/>
                 
                <input 
                    type='search' 
                    placeholder='Search Items'
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />
                
                <button
                    type='submit'
                    className='searchButton'
                    onClick={handleSubmit}
                > 
                    <FaSearch style={{height:'11px',width:'11px'}}/>
                 </button>
                
            </form>
            <div className='userHoverOption'>
            <FaUserAlt className='userIcon'/>
                <ul className='userOpt' >
                    <Link to='/myprofile'><li>My Profile</li></Link>
                    <Link to="/order"><li>Orders</li></Link>
                    <li>Cart</li>
                    <Link to='/Wishlist'><li>Wishlist</li></Link>
                </ul>
            </div>
            <Link to='/' ><FaHome className='homeIcon'/></Link>
            {/* 
            <button className='categoryDownIcon'>
                Fruits Category
                <FaChevronDown style={{marginLeft:'5px',marginTop:'2px'}}/>
            </button> */}
        </div>
        </>
    )
}

export default Header
