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
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [userLocation, setUserLocation] = useState({});
  const [directionData, setDirectionData] = useState();
  // const navigate = useNavigate();

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
        <div className='home-page-parent'>
          <div className='home-intro-part'>
            <SideNavBar />
            <IntroPart userLocation={userLocation} directionData={directionData} setDirectionData={setDirectionData} />
          </div>
          <div className='home-flash-sales'>
            <div className='flex flex-row gap-10'>
              <GroupHeader groupTitle="Today's" groupInfoHeader="Deal of the Day" sideNavigation={true} actionBtn={false} actionBtnText={''} />
              <div className="vertical-line"></div>
              <CountdownTimer targetDate="2024-06-20T10:00:00" />
              <p className='home-flash-sale-all'>View All Deals</p>
            </div>
            <div className='productList'>
              <ProductCardSmall id={23} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={24} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={25} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={26} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={27} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={28} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={29} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCardSmall id={30} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPercent={30} discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
            </div>
          </div>
          <div className='categories'>
            <GroupHeader groupTitle="Categories" groupInfoHeader="Browse By Category" sideNavigation={true} actionBtn={false} actionBtnText={''} />
            <div className='categories-list'>
              <Categories imgUrl="assets/categoriesIcons/clothing.svg" categoryName="Clothing" />
              <Categories imgUrl="assets/categoriesIcons/Electronics.svg" categoryName="Electronics" />
              <Categories imgUrl="assets/categoriesIcons/home.svg" categoryName="Home Decor" />
              <Categories imgUrl="assets/categoriesIcons/beauty.svg" categoryName="Beauty" />
              <Categories imgUrl="assets/categoriesIcons/sport.svg" categoryName="Sports" />
              <Categories imgUrl="assets/categoriesIcons/stationery.svg" categoryName="Stationery" />
              <Categories imgUrl="assets/categoriesIcons/grocery.svg" categoryName="Grocery" />
              <Categories imgUrl="assets/categoriesIcons/furniture.svg" categoryName="Furniture" />
              <Categories imgUrl="assets/categoriesIcons/automotive.svg" categoryName="Automotive" />
              <Categories imgUrl="assets/categoriesIcons/fitness.svg" categoryName="Fitness & Gym" />
              <Categories imgUrl="assets/categoriesIcons/books.svg" categoryName="Books & Literature" />
              <Categories imgUrl="assets/categoriesIcons/music.svg" categoryName="Music & Entertainment" />
              <Categories imgUrl="assets/categoriesIcons/health.svg" categoryName="Health & Wellness" />
              <Categories imgUrl="assets/categoriesIcons/pets.svg" categoryName=" Pets & Supplies" />
              <Categories imgUrl="assets/categoriesIcons/travel.svg" categoryName="Travel & Tourism" />
            </div>
            <hr style={{ marginBottom: '1vw' }} />
          </div>
          <div className='most-search-products'>
            <div className='most-search-products-heading'>
              <GroupHeader groupTitle="This Month" groupInfoHeader="Most Searched Products" sideNavigation={true} actionBtn={false} actionBtnText={''} />
              <p className='home-flash-sale-all'>View All Deals</p>
            </div>
            <div className='most-search-products-list'>
              <ProductCard id={23} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={24} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={25} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={26} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={27} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={28} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={29} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
              <ProductCard id={30} imgUrl={'https://armafperfume.com/cdn/shop/products/TCB_5155_1024x1024.jpg?v=1641559687'} productName="Armaf Club De Nuit Eau De Parfum" discountedPrice={60} actualPrice={90} rating={4} totalReviews={89} />
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
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </>

  )
}

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: " : " + Math.floor((difference / 1000 / 60) % 60),
        seconds: " : " + Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='timmer' key={interval}>
        {timeLeft[interval]}{" "}
      </span>
    );
  });
  timerComponents.push(<span className='timmer'>Left</span>)

  return (
    <div className='mt-[0.1vw]'>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default Home