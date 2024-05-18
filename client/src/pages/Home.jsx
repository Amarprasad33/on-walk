import GroupHeader from '../components/GroupHeader';
import Navbar from '../components/Navbar';
import ProductCardSmall from '../components/ProductCardSmall';

export default function Home() {
  return (
    <main className="flex flex-col w-full border-slate-700 pb-40" style={{'border': '1px solid red'}}>
      <Navbar />

      <section about='First-landing-page' >
        {/* Side-Menu & Carousel */}
        <div id='menuCarouselContainer' className='flex flex-row' >
          <div id='sideMenuContainer' className='flex flex-row gap-7'>
            <div id='sideMenuContent' className='flex flex-col gap-1 pt-8 pr-5 pb-5 pl-9 w-fit border-r border-[#B3B3B3]'>
              <span className='flex gap-2'>
                <span>Women's Fashion</span>
                <span>cv</span>
              </span>
              <span className='flex gap-2'>
                <span>Men's Fashion</span>
                <span>cv</span>
              </span>
              <span className='flex gap-2'>
                <span>Electronics</span>
                <span></span>
              </span>
            </div>
          </div>

          <div id='carouselContainer' className='w-fit flex flex-col gap-3 ml-28' >
            <div className='font-medium text-5xl'>Choose From the new arrivals</div>
            <img className='h-80 rounded-xl' src="https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={800} alt="new arrived product" />
          </div>
        </div>

        <div id='saleBox' className='flex flex-col gap-4 pb-8'>
          <GroupHeader groupTitle="Today's" groupInfoHeader="Discount's upto 40%" sideNavigation={true} actionBtn={false} actionBtnText={''} />
          <div id='productList'>
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89}  />
          </div>

          <button className='bg-blue-700 px-8 py-3 rounded-md w-fit text-white self-center'>View All Products</button>
          <div id="separation" className='border-b border-[#D9D9D9] w-11/12 self-center'></div>
        </div>
      </section>



    </main>
    
  )
}