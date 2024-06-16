import React from 'react'
import '../../styles/Home.css'

const SideNavBar = () => {
    return (
        <div className='sidebar-main'>
            <div className='sidebar-parent'>
                <div className='points-with-subpoints'>
                    <h1 className='points'>Women's Fashion</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/icons/DropDown.svg' />
                    </div>
                </div>
                <div className='points-with-subpoints'>
                    <h1 className='points'>Men's Fashion</h1>
                    <div className='drop-down-icon'>
                        <img src='assets/icons/DropDown.svg' />
                    </div>
                </div>
                <div>
                    <h1 className='points'>Electronic</h1>
                </div>
                <div>
                    <h1 className='points'>Home & Lifestyle</h1>
                </div>
                <div>
                    <h1 className='points'>Medicine</h1>
                </div>
                <div>
                    <h1 className='points'>Baby’s & Toys</h1>
                </div>
                <div>
                    <h1 className='points'>Groceries & Pets</h1>
                </div>
                <div>
                    <h1 className='points'>Health & Beauty</h1>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar