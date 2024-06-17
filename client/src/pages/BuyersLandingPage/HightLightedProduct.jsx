import React from 'react'

const HightLightedProduct = ({ content, saleTimeLeft, productImg }) => {
    return (
        <div className='highlighted-product-main'>
            <div className='highlighted-product-about-section'>
                <div className='highlighted-product-test'>Categories</div>
                <div className='highlighted-product-heading'>{content}</div>
                <div className='highlighted-product-time'>
                    <div className='highlighted-product-time-sec'>
                        <div className='time-format'>
                            <div className='time-text-number'>23</div>
                            <div className='time-text'>Days</div>
                        </div>
                    </div>
                    <div className='highlighted-product-time-sec'>
                        <div className='time-format'>
                            <div className='time-text-number'>23</div>
                            <div className='time-text'>Hours</div>
                        </div>
                    </div>
                    <div className='highlighted-product-time-sec'>
                        <div className='time-format'>
                            <div className='time-text-number'>23</div>
                            <div className='time-text'>Minutes</div>
                        </div>
                    </div>
                    <div className='highlighted-product-time-sec'>
                        <div className='time-format'>
                            <div className='time-text-number'>23</div>
                            <div className='time-text'>Second</div>
                        </div>
                    </div>
                </div>
                <button className='buy-now'>Buy Now</button>
            </div>
            <div className='highlighted-product-img'>
                <img src={productImg} className='product-img' />
            </div>
        </div>
    )
}

export default HightLightedProduct