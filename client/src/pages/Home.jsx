import React, { useEffect, useState } from 'react'
import NavbarAfterLogin from '../components/NavbarAfterLogin';
import IntroPart from './BuyersLandingPage/IntroPart'
import SideNavBar from './BuyersLandingPage/SideNavBar'
import '../styles/Home.css'
import GroupHeader from '../components/GroupHeader'
import ProductCardSmall from '../components/ProductCardSmall'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'
import HightLightedProduct from './BuyersLandingPage/HightLightedProduct'
import NewArrival from './BuyersLandingPage/NewArrival'
import Testimonials from './BuyersLandingPage/Testimonials'
import Footer from '../components/Footer'
import ShopCard from './BuyersLandingPage/ShopCard'

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [directionData, setDirectionData] = useState();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 70) { // Adjust the value as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div id='saleBox'>
        <NavbarAfterLogin scrolled={scrolled} setUserLocation={setUserLocation} />
      </div>
      <div className='home-page-main'>
        <div className='home-intro-part'>
          <SideNavBar />
          <IntroPart userLocation={userLocation} directionData={directionData} setDirectionData={setDirectionData} />
        </div>
        <div className='home-flash-sales'>
          <GroupHeader groupTitle="Today's" groupInfoHeader="Discount's upto 40%" sideNavigation={true} actionBtn={false} actionBtnText={''} />
          <div className='productList'>
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCardSmall imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
          </div>
          <button className='view-all-btn'>View All Products</button>
          <hr style={{ marginBottom: '1vw' }} />
        </div>
        <div className='categories'>
          <GroupHeader groupTitle="Categories" groupInfoHeader="Browse By Category" sideNavigation={true} actionBtn={false} actionBtnText={''} />
          <div className='categories-list'>
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
            <Categories imgUrl="assets/icons/CellPhone.svg" categoryName="Phones" />
          </div>
          <hr style={{ marginBottom: '1vw' }} />
        </div>
        <div className='most-search-products'>
          <div className='most-search-products-heading'>
            <GroupHeader groupTitle="This Month" groupInfoHeader="Most Searched Products" sideNavigation={true} actionBtn={false} actionBtnText={''} />
            <button className='search-products-view-all-btn'>View All</button>
          </div>
          <div className='most-search-products-list'>
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            <ProductCard imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
          </div>
        </div>
        <div className='single-product'>
          <HightLightedProduct content="Enhance Your Music Experience" saleTimeLeft="" productImg="assets/productImg.svg" />
        </div>
        <div className='most-shop-searched'>
          <div className='most-search-products-heading'>
            <GroupHeader groupTitle="This Month" groupInfoHeader="Most Searched Shops" sideNavigation={true} actionBtn={false} actionBtnText={''} />
            <button className='search-products-view-all-btn'>View All</button>
          </div>
          <div className='most-search-products-list'>
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
            <ShopCard imgUrl={'assets/shop.svg'} productName="Armaf Club De Nuit Eau De Parfum" address="Near nehru  nagar, Bhubaneswar" rating={4} totalReviews={89} />
          </div>
        </div>
        <div className='new-arrival'>
          <div style={{ marginBottom: '2vw' }}>
            <GroupHeader groupTitle="Featured" groupInfoHeader="New Arrival" sideNavigation={true} actionBtn={false} actionBtnText={''} />
          </div>
          <div className='new-arrival-products'>
            <NewArrival />
          </div>
        </div>
        <div className='testimonials'>
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Home