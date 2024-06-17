import React from 'react'

const Testimonials = () => {
    return (
        <div className='testimonial-main'>
            <div className='testimonial-parent'>
                <div className='testimonal-icon-parent' style={{ backgroundColor: "#8b5cf6" }}>
                    <img src='/assets/testimonial/store.svg' className='testimonal-icon' />
                </div>
                <div className='testimonial-content'>
                    <div className='text-[1.3vw] text-center font-semibold text-violet-500'>FREE AND FAST DELIVERY</div>
                </div>
            </div>
            <div className='testimonial-parent'>
                <div className='testimonal-icon-parent' style={{ backgroundColor: "#0ea5e9" }}>
                    <img src='/assets/testimonial/sell.svg' className='testimonal-icon' />
                </div>
                <div className='testimonial-content'>
                    <div className='text-[1.3vw] text-center font-semibold text-sky-500'>FREE AND FAST DELIVERY</div>
                </div>
            </div>
            <div className='testimonial-parent'>
                <div className='testimonal-icon-parent' style={{ backgroundColor: "#fbbf24" }}>
                    <img src='/assets/testimonial/growth.svg' className='testimonal-icon' />
                </div>
                <div className='testimonial-content'>
                    <div className='text-[1.3vw] text-center font-semibold text-amber-400'>FREE AND FAST DELIVERY</div>
                </div>
            </div>
            <div className='testimonial-parent'>
                <div className='testimonal-icon-parent' style={{ backgroundColor: "#ec4899" }}>
                    <img src='/assets/testimonial/heart.svg' className='testimonal-icon' />
                </div>
                <div className='testimonial-content'>
                    <div className='text-[1.3vw] text-center font-semibold text-pink-500'>FREE AND FAST DELIVERY</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials