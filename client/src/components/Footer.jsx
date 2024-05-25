import React from 'react'

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-parent'>
                <div className='footer-name'>
                    <div className='footer-site-name'>On Walk</div>
                </div>
                <div className='footer-support'>
                    <div className='footer-heading'>Support</div>
                    <div className='footer-desc'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
                    <div className='footer-desc'>exclusive@gmail.com</div>
                    <div className='footer-desc'>+88015-88888-9999</div>
                </div>
                <div className='footer-Account'>
                    <div className='footer-heading'>Account</div>
                    <div className='footer-desc-links'>My Account</div>
                    <div className='footer-desc-links'>Login / Register</div>
                    <div className='footer-desc-links'>Wishlist</div>
                    <div className='footer-desc-links'>Cart</div>
                    <div className='footer-desc-links'>Shop</div>
                </div>
                <div className='footer-quick-link'>
                    <div className='footer-heading'>Quick Link</div>
                    <div className='footer-desc-links'>Privacy Policies</div>
                    <div className='footer-desc-links'>Terms of Use</div>
                    <div className='footer-desc-links'>FAQ</div>
                    <div className='footer-desc-links'>Contact</div>
                </div>
                <div className='footer-social-links'>
                    <div className='footer-heading'>Follow Us On</div>
                    <div className='footer-social'>
                        <img src='assets/icons/facebook.svg' width={32} height={32} className='social-icon-fb' />
                        <img src='assets/icons/insta.svg' width={32} height={32} className='social-icon-fb' />
                        <img src='assets/icons/linkedin.svg' width={32} height={32} className='social-icon-fb' />
                        <img src='assets/icons/twitter.svg' width={32} height={32} className='social-icon-fb' />
                    </div>
                </div>
            </div>
            <hr style={{ width: '90%', margin: '0 auto' }} />
            <div className='footer-copyeright'>© Copyright On Walk 2024. All right reserved</div>
        </div>
    )
}

export default Footer