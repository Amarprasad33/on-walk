import React from 'react'
import '../styles/NavbarAfterLogin.css'
import DefaultIcon from '/assets/icons/profile-user.png'
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;

const NavbarAfterLogin = () => {
    return (
        <>
            <div className='navbar-main'>
                <div className='user-profile-pic'>
                    <img src={DefaultIcon} />
                </div>
                <img className='navbar-location-icon' src="assets/icons/location.svg" />
                <div className='navbar-contains-main'>
                    <a className='navbar-contains'>Home</a>
                    <a className='navbar-contains'>Sign in</a>
                    <a className='navbar-contains'>About</a>
                    <a className='navbar-contains'>Contact</a>
                </div>
                <div className='input-main'>
                    <input className='search-input' type="text" placeholder='what are you looking for...' name="" id="" />
                    <SearchOutlined className='search-icon' />
                </div>
                <div className='more-options'>
                    <img src='assets/icons/wishlist.svg' />
                    <img src='assets/icons/cart.svg' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavbarAfterLogin