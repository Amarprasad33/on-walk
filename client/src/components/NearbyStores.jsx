import React, { useEffect, useRef, useState } from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLocation, useNavigate } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxrcnJhaiIsImEiOiJjbHYzbjgyemQwcmtmMmpwOHd0OTg5eW9sIn0.Dtuo5qqHCxv_01nK7YHVkg';


const NearbyStores = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [userLocation, setUserLocation] = useState({});
    const [yourLoc, setYourLoc] = useState({});
    const [youAsShop, setYouAsShop] = useState({});
    const location = useLocation();
    const setDirectionData = location?.state?.setDirectionData;
    const directionsData = location?.state?.directionsData;
    const userLocation = location?.state?.userLocation;
    console.log("dire", setDirectionData);
    console.log("direcino", setDirectionData);
    console.log("userLoac", setDirectionData);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const navigate = useNavigate();
    const dummyStoresData = [
        {
            "shopName": "Big Bazaar",
            "latitude": "20.28965644699696",
            "longitude": "85.81441249325307"
        },
        {
            "shopName": "Station Square",
            "latitude": "20.268938709749058",
            "longitude": "85.84334736356242"
        },
        {
            "shopName": "Konark Wood",
            "latitude": "20.296360555655784",
            "longitude": "85.83308900674693"
        },
        {
            "shopName": "Mahalaxmi Textiles",
            "latitude": "20.261533234227628",
            "longitude": "85.83925490674693"
        },
        {
            "shopName": "Vishal Mega Mart",
            "latitude": "20.29887391293978",
            "longitude": "85.86186249325304"
        }
    ]
    // if ((userLocation.longitude && userLocation.latitude)) {
    //     dummyStoresData.push(userLocation);
    // }
    const dummyShop = [
        {
            shopName: "Big Bazaar",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg",
            shopObj: {
                "shopName": "Big Bazaar",
                "latitude": "20.28965644699696",
                "longitude": "85.81441249325307"
            }
        }
    ]
    useEffect(() => {
        let apiData;;
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [85.82013402225823, 20.29264639080795],
            zoom: 9,
        });
        mapRef.current = map;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position', position)
                const { latitude, longitude } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                if (isNaN(latitude) || isNaN(longitude)) {
                    console.error('Invalid coordinates:', latitude, longitude);
                    return;
                }

                apiData = {
                    maxDistance: 5,
                    longitude: parseFloat(longitude),
                    latitude: parseFloat(latitude)
                }

                // setInitialReqData(apiData);

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

        return () => map.remove();
    }, []);

    const getNearbyStores = async () => {
        dummyStoresData.map((store) => {
            mapRef.current.flyTo({
                center: [store.longitude, store.latitude],
                // zoom: 14,
            });
            let popup = new mapboxgl.Popup()
                .setLngLat([store.longitude, store.latitude])
                .setHTML(`<h3 style="padding:4px 8px;">${store.shopName}</h3>`)
                .addTo(mapRef.current);

            popup.getElement().addEventListener('click', function (event) {
                // console.log('Popup content clicked!', event);
                const storeName = event.target.innerHTML || event.target.textContent;
                // setCurrStoreName(storeName);
                console.log('Store name:', storeName);
                event.stopPropagation();
                // if (storeName != '×') {
                //     setIsModalOpened(true);
                // }
                // findShortestPath('SS The Mart', 'Big bazar')
            });
        })
    }

   


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
                setYouAsShop(youAsdata);
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
    return (
        <div style={{ height: "100%", backgroundColor: "#eef3f7" }}>
            <div id='saleBox'>
                <NavbarAfterLogin scrolled={scrolled} />
            </div>
            <div className=' my-4 flex flex-col gap-3 w-[90%] h-[70vh] m-auto'>
                <div className='text-2xl font-medium text-center text-gray-500'>NEARBY STORE</div>
                <div ref={mapContainerRef} className="map-container h-[25rem]">

                    <div className="map h-[20rem]" />
                </div>
                <button className="btn text-white bg-blue-500 mx-auto" onClick={locateOnMap} >Get my current location</button>
                <button className="btn text-white bg-blue-500 mx-auto" onClick={getNearbyStores} >Get my nearby stores</button>
                {(yourLoc.longitude && yourLoc.latitude) && <div className='text-center'>We got your location! Thank you.</div>}
            </div>
            <div className='w-[70%] h-auto m-auto'>
                <div>
                    {dummyShop.map((shop) => (
                        <div key={shop.shopName} onClick={() => navigate("/about", {state: {youAsStore: youAsShop, destStore: shop.shopObj  }})} className=' cursor-pointer p-2'>
                            <div className='flex flex-row gap-4 bg-white rounded-lg' >
                                <div className='w-[18%] p-2 rounded-lg overflow-hidden'>
                                    <img src={shop.shopPic} />
                                </div>
                                <div className='w-[100%] flex flex-col gap-3'>
                                    <p className='text-2xl mt-2 font-semibold'>{shop.shopName}</p>
                                    <p className='text-1xl'>{shop.description}</p>
                                    <p className='text-1xl font-semibold'>{shop.address}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default NearbyStores;