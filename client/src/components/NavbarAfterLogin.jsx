import React, { useEffect, useRef, useState } from 'react'
import '../styles/NavbarAfterLogin.css'
import DefaultIcon from '/assets/icons/profile-user.png'
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Modal from './Modal';
const { Search } = Input;
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxrcnJhaiIsImEiOiJjbHYzbjgyemQwcmtmMmpwOHd0OTg5eW9sIn0.Dtuo5qqHCxv_01nK7YHVkg';


const NavbarAfterLogin = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    // const [storeLocations, setStoreLocations] = useState(
    //     JSON.parse(localStorage.getItem('storeLocations')) || []
    // );
    const [yourLoc, setYourLoc] = useState({});
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          // center: [-98.5795, 39.8283],
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
                setYourLoc(loc);
            //   setStoreLocations([...storeLocations, store]);
            //     localStorage.setItem('yourLocation', JSON.stringify([...storeLocations, store]));
            },
            (error) => {
                console.error('Error getting location:', error.message);
                switch(error.code) {
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
        if(yourLoc){
            mapRef.current.flyTo({
                center: [yourLoc.longitude, yourLoc.latitude],
                zoom: 14,
              });
              new mapboxgl.Popup()
                .setLngLat([yourLoc.longitude, yourLoc.latitude])
                .setHTML(`<p>${yourLoc.name}</p>`)
                .addTo(mapRef.current);
        }else{
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
            <div className='navbar-main'>
                <div className='user-profile-pic'>
                    <img src={DefaultIcon} />
                </div>
                <img className='navbar-location-icon' src="assets/icons/location.svg" onClick={() =>{
                    console.log("clckeed", isModalOpened)
                    setIsModalOpened(true);
                    // console.log("clckeed", isModalOpened)
                }}/>
                {/* Modal for getting precise location */}
                <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)} >
                    <div className=' my-4 flex flex-col gap-3 h-[50vh]'>
                        <div className='text-2xl font-medium text-center font-black text-gray-800'>Set your precise location</div>
                        <div className="map-container h-[15rem]">
                            
                            <div  ref={mapContainerRef} className="map h-[15rem]" />
                        </div>
                        <button className="btn text-white bg-blue-500 mx-auto" onClick={locateOnMap}>Get my current location</button>
                    </div>

                    <button className="btn btn-danger ml-auto" onClick={() => setIsModalOpened(false)}>Close</button>
                </Modal>
                <div className='navbar-contains-main'>
                    <a className='navbar-contains'>Home</a>
                    <a className='navbar-contains'>Sign in</a>
                    <a className='navbar-contains'>About</a>
                    <a className='navbar-contains'>Contact</a>
                </div>
                <div className='input-main'>
                    <input className='search-input' type="text" placeholder='what are you looking for...' name="" id="" />
                    <SearchOutlined className='search-icon' />
                </div>
                <div className='more-options'>
                    <img src='assets/icons/wishlist.svg' />
                    <img src='assets/icons/cart.svg' />
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavbarAfterLogin