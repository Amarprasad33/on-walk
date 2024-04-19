import { Tooltip } from 'react-tooltip';

export default function ProductCardSmall({
  productName,
  discountedPrice,
  discountedPercent,
  actualPrice,
  rating,
  totalReviews,
  imgUrl

}) {
  return (
    <div id="container" className="pl-9">
      <div id="productImageContainer" className="w-fit h-fit border relative min-w-52 min-h-48 flex justify-center items-center"> 
        <img className="w-40 h-40" src={imgUrl} alt="product image" />
        <div className="absolute top-2 left-2 bg-blue-700 text-white px-3 py-0.5 rounded">-{discountedPercent}%</div>
        <div id="actionIconGrp" className="flex flex-col gap-2 absolute right-2 top-2">
            <span>Wl</span>
            <span>eye</span>
        </div>
      </div>

        <div className="text-base font-medium max-w-52 whitespace-nowrap text-ellipsis overflow-hidden" data-tooltip-id={productName} data-tooltip-content={productName}>{productName}</div>
        <Tooltip id={productName}/>
      <div className='flex flex-row gap-2'>
        <span className='text-base font-medium text-[#5A73F5]'>${discountedPrice}</span>
        <span className='text-base font-medium text-[#7F7F7F]'>${actualPrice}</span>
      </div>
      <div>
        <span>{rating}</span>
        <span>({totalReviews})</span>
      </div>
    </div>
  )
}

// https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687