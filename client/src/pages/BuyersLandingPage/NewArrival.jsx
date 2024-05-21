import React from 'react'

const NewArrival = () => {
    return (
        <div className='new-arrival-main'>
            <div className='new-arrival-product-1'>
                <img src="assets/ps5.svg" className='new-arrival-product-img-1' />
                <div className='new-arrival-about-product-1'>
                    <div className='new-arrival-product-title'>PlayStation 5</div>
                    <div className='new-arrival-product-description'>Black and White version of the PS5 coming out on sale.</div>

                    <button className='shop-now-btn'>Shop Now</button>
                </div>
            </div>
            <div className='new-arrival-both-products'>
                <div className='new-arrival-product-2'>
                    <img src="assets/hat.svg" className='new-arrival-product-img-2' />
                    <div className='new-arrival-about-product-1'>
                        <div className='new-arrival-product-title'>Women’s Collections</div>
                        <div className='new-arrival-product-description'>Featured woman collections that give you another vibe.</div>

                        <button className='shop-now-btn'>Shop Now</button>
                    </div>
                </div>
                <div className='new-arrival-product-remaining'>
                    <div className='new-arrival-product-3'>
                        <img src="assets/speaker.svg" className='new-arrival-product-img-3' />
                        <div className='new-arrival-about-product-3'>
                            <div className='new-arrival-product-title-3'>Speakers</div>
                            <div className='new-arrival-product-description-3'>Amazon wireless speakers</div>

                            <button className='shop-now-btn-3'>Shop Now</button>
                        </div>
                    </div>
                    <div className='new-arrival-product-4'>
                        <img src="assets/perfume.svg" className='new-arrival-product-img-4' />
                        <div className='new-arrival-about-product-4'>
                            <div className='new-arrival-product-title-3'>Perfumes</div>
                            <div className='new-arrival-product-description-3'>GUCCI INTENSE OUD EDP</div>

                            <button className='shop-now-btn-3'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewArrival