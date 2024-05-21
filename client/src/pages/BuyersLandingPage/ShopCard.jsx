import React from 'react'
import { Tooltip } from 'react-tooltip';
import ReactStars from 'react-stars';
const ShopCard = ({
    productName,
    address,
    rating,
    totalReviews,
    imgUrl
}) => {
    return (
        <div id="container">
            <div id="productImageContainer" className="w-fit h-fit relative min-w-52 min-h-48 flex justify-center items-center ">
                <img className="w-[100%] h-[100%]" src={imgUrl} alt="product image" />
            </div>

            <div className='flex flex-col gap-1 mt-2'>
                <div className="text-base font-medium max-w-52 whitespace-nowrap text-ellipsis overflow-hidden" data-tooltip-id={productName} data-tooltip-content={productName}>
                    {productName}
                </div>
                <Tooltip id={productName} />
                <div className='shop-address'>
                    <div>{address}</div>
                </div>
                <div className='flex flex-row gap-2 items-center -mt-2'>
                    <span>
                        <ReactStars
                            value={rating}
                            count={5}
                            size={24}
                            color1='#BFBFBF'
                            color2='#FFAD33'
                            edit={false}
                        />
                        {/* {rating} */}
                    </span>
                    <span className='text-base font-medium text-[#7F7F7F]'>({totalReviews})</span>
                </div>
            </div>
        </div>
    )
}

export default ShopCard