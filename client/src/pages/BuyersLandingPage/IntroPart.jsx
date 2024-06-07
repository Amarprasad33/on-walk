import { SearchOutlined } from '@ant-design/icons'
import React from 'react'

const IntroPart = () => {
    return (
        <div className='intro-map-main'>
            <iframe className='intro-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.2160932328006!2d85.79535977907473!3d20.249870832767133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a3b9692fff%3A0x87cd0a356bbc39ce!2sITER%2C%20Siksha%20&#39;O&#39;%20Anusandhan!5e0!3m2!1sen!2sin!4v1716038603401!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='map-search-box'>
                <div className='map-search-heading'>Search stores nearby you</div>
                <div className='map-input-main'>
                    <input className='search-input' type="text" placeholder='Store Name' name="" id="" />
                    <SearchOutlined className='search-icon' />
                </div>
                <button className='map-btn'>Get Nearby Stores</button>
            </div>
        </div>
    )
}

export default IntroPart