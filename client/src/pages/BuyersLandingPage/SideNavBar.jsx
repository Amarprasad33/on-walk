import React from 'react'
import '../../styles/Home.css'

const SideNavBar = () => {
    return (
        <div className='sidebar-main'>
            <div className='sidebar-parent'>
                <div className='points-with-subpoints'>
                    <h1 className='points'>Clothing</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Electronics</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Home Decor</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Beauty</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Grocery</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Books & Literature</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Pets & Supplies</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
                <div className='points-with-subpoints'>
                    <h1 className='points'>Technology & Gadgets</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/play.png' />
                    </div>
                </div>
                <hr />
            </div>
        </div>
        // Clothing, Electronics, Home Decor, Beauty, Sports, Stationery, Grocery, Furniture, Automotive, Health & Wellness, Pets & Supplies, Books & Literature, Jewelry & Accessories, Art & Crafts, Toys & Games, Food & Beverages, Fitness & Gym, Travel & Tourism, Technology & Gadgets, Music & Entertainment, Fashion & Apparel
    )
}

export default SideNavBar