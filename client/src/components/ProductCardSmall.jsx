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
    <div id={id} onClick={() => console.log("main-container clicked", id)} style={{'zIndex': '-100'}}>
      <div className="w-fit h-fit border relative min-w-52 min-h-48 flex justify-center items-center">
        <img className="w-40 h-40" src={imgUrl} alt="product image" />
        <div className="absolute top-2 left-2 bg-blue-700 text-white px-3 py-0.5 rounded">-{discountedPercent}%</div>
        <div id="actionIconGrp" className="flex flex-col gap-2 absolute right-2 top-2">
          <span>Wl</span>
          <span>eye</span>
        </div>
      </div>

      <div className='flex flex-col gap-1 mt-2'>
        <div className="text-base font-medium max-w-52 whitespace-nowrap text-ellipsis overflow-hidden" data-tooltip-id={productName} data-tooltip-content={productName}>
          {productName}
        </div>
        <Tooltip id={productName} />
        <div className='flex flex-row gap-2'>
          <span className='text-base font-medium text-[#5A73F5]'>${discountedPrice}</span>
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