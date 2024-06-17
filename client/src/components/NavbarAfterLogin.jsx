import React, { useEffect, useRef, useState } from 'react'
import '../styles/NavbarAfterLogin.css'
import DefaultIcon from '/assets/user.png'
import DownIcon from '/assets/down.png'
import ShoppingIcon from '/assets/shoppingBag.png'
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Modal from './Modal';
const { Search } = Input;
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxrcnJhaiIsImEiOiJjbHYzbjgyemQwcmtmMmpwOHd0OTg5eW9sIn0.Dtuo5qqHCxv_01nK7YHVkg';


const NavbarAfterLogin = ({ scrolled, setUserLocation, isMerchant }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    // const [storeLocations, setStoreLocations] = useState(
    //     JSON.parse(localStorage.getItem('storeLocations')) || []
    // );
    const [yourLoc, setYourLoc] = useState({});
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    const navStyle = scrolled ? { 'position': 'fixed', 'backgroundColor': 'white' } : { 'position': 'relative' }

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [85.82013402225823, 20.29264639080795],
            zoom: 9,
        });

        mapRef.current = map;

        return () => map.remove();
    }, []);

    const saveYourLocation = async () => {
        navigator.geolocation.getCurrentPosition(

            (position) => {
                console.log('position', position)
                const { latitude, longitude } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                if (isNaN(latitude) || isNaN(longitude)) {
                    console.error('Invalid coordinates:', latitude, longitude);
                    return;
                }

                const loc = {
                    name: 'you',
                    longitude: parseFloat(longitude),
                    latitude: parseFloat(latitude)
                }
                const youAsdata = {
                    shopName: 'you',
                    longitude: parseFloat(longitude),
                    latitude: parseFloat(latitude)
                }
                setYourLoc(loc);
                setUserLocation(youAsdata);
                //   setStoreLocations([...storeLocations, store]);
                //     localStorage.setItem('yourLocation', JSON.stringify([...storeLocations, store]));
            },
            (error) => {
                console.error('Error getting location:', error.message);
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred.");
                        break;
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    }

    const locateOnMap = async () => {
        // checkLoc();
        await saveYourLocation();
        if (yourLoc) {
            mapRef.current.flyTo({
                center: [yourLoc.longitude, yourLoc.latitude],
                zoom: 14,
            });
            new mapboxgl.Popup()
                .setLngLat([yourLoc.longitude, yourLoc.latitude])
                .setHTML(`<p>${yourLoc.name}</p>`)
                .addTo(mapRef.current);
        } else {
            alert('Something went wrong!!');
        }
    }

    // const checkLoc = () => {
    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //           const { latitude, longitude } = position.coords;
    //           console.log(`----Latitude: ${latitude}, Longitude: ${longitude}`);
    //         },
    //         (error) => {
    //           console.error('Error getting location:', error.message);
    //         }
    //     );
    // }

    return (
        <>
            <div className='navbar-main z-10' style={navStyle}>
                <div className='website-logo-main'>
                    <img className='website-logo-img' src="/assets/OnWalkLogo.svg" />
                    <p className='website-item'>On Walk</p>
                </div>
                <img className='navbar-location-icon' src="/assets/icons/location.svg" onClick={() => {
                    console.log("clckeed", isModalOpened)
                    setIsModalOpened(true);
                    // console.log("clckeed", isModalOpened)
                }} />
                {/* Modal for getting precise location */}
                <div className='input-main'>
                    <input className='search-input' type="text" placeholder='Search Product...' name="" id="" />
                    <SearchOutlined className='search-icon' />
                </div>
                <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)} >
                    <div className=' my-4 flex flex-col gap-3 h-[50vh]'>
                        <div className='text-2xl font-medium text-center font-black text-gray-800'>Set your precise location</div>
                        <div className="map-container h-[15rem]">

                            <div ref={mapContainerRef} className="map h-[15rem]" />
                        </div>
                        <button className="btn text-white bg-blue-500 mx-auto" onClick={locateOnMap}>Get my current location</button>
                        {(yourLoc.longitude && yourLoc.latitude) && <div className='text-center'>We got your location! Thank you.</div>}
                    </div>

                    <button className="btn btn-danger ml-auto" onClick={() => setIsModalOpened(false)}>Close</button>
                </Modal>
                <div className='navbar-contains-main'>
                    {isLogin !== true ? <a className='navbar-contains' href='/signin'>SignIn</a> : (
                        <div className='user-main'>
                            <img className='user-img' src={DefaultIcon} />
                            <p className='user-name'>Shubham</p>
                            <img className='user-down-icon' src={DownIcon} />
                        </div>
                    )
                    }
                    <a className='navbar-contains' href='/'>About Us</a>
                </div>
                {!isMerchant && <div className='more-options'>
                    <img className='shop-icon' src={ShoppingIcon} />
                    <p className='save-item'>Saved Items</p>
                </div>}
            </div>
            <hr />
        </>
    )
}

export default NavbarAfterLogin