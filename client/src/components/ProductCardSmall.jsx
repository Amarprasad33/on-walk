import { Tooltip } from 'react-tooltip';
import ReactStars from 'react-stars';

export default function ProductCardSmall({
  productName,
  discountedPrice,
  discountedPercent,
  actualPrice,
  rating,
  totalReviews,
  imgUrl,
  id

}) {


  return (
    <div className='bg-white rounded-lg shadow-sm hover:scale-105 transition-scale duration-300' id={id} onClick={() => console.log("main-container clicked", id)}>
      <div className="w-fit h-fit border relative min-w-60 min-h-45 flex justify-center items-center border-none">
        <img className="w-50 h-40 overflow-hidden" src={imgUrl} alt="product image" />
      </div>

      <div className='flex flex-col gap-1 mt-2 pl-4 pr-4'>
        <div className="text-base font-medium max-w-52 whitespace-nowrap text-ellipsis overflow-hidden" data-tooltip-id={productName} data-tooltip-content={productName}>
          {productName}
        </div>
        <Tooltip id={productName} />
        <div className='flex flex-row gap-2'>
          <span className='text-base font-medium text-[#5A73F5]'>${discountedPrice}</span>
          <div className='vertical-line-flash-sales'></div>
          <span className='text-base font-medium text-[#7F7F7F] line-through'>${actualPrice}</span>
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
          </span>
          <span className='text-base font-medium text-[#7F7F7F]'>({totalReviews})</span>
        </div>
      </div>
    </div>
  )
}

// https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687