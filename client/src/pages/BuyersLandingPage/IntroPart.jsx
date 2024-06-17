import { SearchOutlined } from '@ant-design/icons'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import Modal from '../../components/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';



const IntroPart = ({ userLocation, directionsData, setDirectionData }) => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const navigate = useNavigate();
    // const navigate = useNavigate();
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [currStoreName, setCurrStoreName] = useState("");
    const [error, setError] = useState("");
    const [initialReqData, setInitialReqData] = useState({});
    // const dummyStoresData = [{

    //     "shopName": "Big Bazaar",
    //     "latitude": "20.28965644699696",
    //     "longitude": "85.81441249325307"
    // },
    // {
    //     "shopName": "Station Square",
    //     "latitude": "20.268938709749058",
    //     "longitude": "85.84334736356242"
    // },
    // {
    //     "shopName": "Konark Wood",
    //     "latitude": "20.296360555655784",
    //     "longitude": "85.83308900674693"
    // },
    // {
    //     "shopName": "Mahalaxmi Textiles",
    //     "latitude": "20.261533234227628",
    //     "longitude": "85.83925490674693"
    // },
    // {
    //     "shopName": "Vishal Mega Mart",
    //     "latitude": "20.29887391293978",
    //     "longitude": "85.86186249325304"
    // }
    // ]

    // if ((userLocation.longitude && userLocation.latitude)) {
    //     dummyStoresData.push(userLocation);
    // }

    // useEffect(() => {
    //     let apiData;
    //     const map = new mapboxgl.Map({
    //         container: mapContainerRef.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [85.82013402225823, 20.29264639080795],
    //         zoom: 9,
    //     });

    //     mapRef.current = map;

    //     navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //             console.log('position', position)
    //             const { latitude, longitude } = position.coords;
    //             console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    //             if (isNaN(latitude) || isNaN(longitude)) {
    //                 console.error('Invalid coordinates:', latitude, longitude);
    //                 return;
    //             }

    //             apiData = {
    //                 maxDistance: 5,
    //                 longitude: parseFloat(longitude),
    //                 latitude: parseFloat(latitude)
    //             }

    //             setInitialReqData(apiData);

    //         },
    //         (error) => {
    //             console.error('Error getting location:', error.message);
    //             switch (error.code) {
    //                 case error.PERMISSION_DENIED:
    //                     console.error("User denied the request for Geolocation.");
    //                     break;
    //                 case error.POSITION_UNAVAILABLE:
    //                     console.error("Location information is unavailable.");
    //                     break;
    //                 case error.TIMEOUT:
    //                     console.error("The request to get user location timed out.");
    //                     break;
    //                 case error.UNKNOWN_ERROR:
    //                     console.error("An unknown error occurred.");
    //                     break;
    //             }
    //         },
    //         {
    //             enableHighAccuracy: true,
    //             timeout: 10000,
    //             maximumAge: 0
    //         }

    //     );


    //     return () => map.remove();


    // }, []);

    // const getNearbyStores = async () => {
    //     // try {
    //     //     const url = `${process.env.API_URL}/api/getnearbystore`;
    //     //     const res  = await axios.post(url, initialReqData);
    //     //     localStorage.setItem("token", res.data);
    //     //     console.log("res_nearbyStore", res);
    //     //     // window.location = "/student";
    //     // } catch (error) {
    //     //     if (
    //     //         error.response &&
    //     //         error.response.status >= 400 &&
    //     //         error.response.status <= 500
    //     //     ) {
    //     //         setError(error.response.data.message);
    //     //     }
    //     //     console.log('err', error)
    //     // }
    //     dummyStoresData.map((store) => {
    //         mapRef.current.flyTo({
    //             center: [store.longitude, store.latitude],
    //             // zoom: 14,
    //         });
    //         let popup = new mapboxgl.Popup()
    //             .setLngLat([store.longitude, store.latitude])
    //             .setHTML(`<h3 style="padding:4px 8px;">${store.shopName}</h3>`)
    //             .addTo(mapRef.current);

    //         popup.getElement().addEventListener('click', function (event) {
    //             // console.log('Popup content clicked!', event);
    //             const storeName = event.target.innerHTML || event.target.textContent;
    //             setCurrStoreName(storeName);
    //             console.log('Store name:', storeName);
    //             event.stopPropagation();
    //             if (storeName != '×') {
    //                 setIsModalOpened(true);
    //             }

    //             /**
    //                 1. Navigate to a detailed store page
    //                 2. Show a map locating that store location
    //                 3. User get to choose 
    //                     either see items of that shop
    //                     see the distance between user and that shop

    //             */
    //             // findShortestPath('SS The Mart', 'Big bazar')
    //         });
    //     })
    // }

    // const findPath = async () => {
    //     let startStoreName = 'You';
    //     let endStoreName = currStoreName;
    //     console.log("st", startStoreName);
    //     console.log("end", endStoreName);
    //     console.log("dummy", dummyStoresData);

    //     // setDirectionData(dummyStoresData);


    //     const startStore = dummyStoresData.find((store) => store.shopName.toLowerCase() === startStoreName.toLowerCase());
    //     const endStore = dummyStoresData.find((store) => store.shopName.toLowerCase() === endStoreName.toLowerCase());

    //     console.log("st--", startStore);
    //     console.log("end--", endStore);
    //     if (!startStore || !endStore) {
    //         console.log('Start or end store not found');
    //         return [];
    //     }

    //     const directionsResponse = await fetch(
    //         `https://api.mapbox.com/directions/v5/mapbox/driving/${startStore.longitude},${startStore.latitude};${endStore.longitude},${endStore.latitude}?geometries=geojson&access_token=${mapboxgl.accessToken}`
    //     );

    //     const directionsData = await directionsResponse.json();
    //     const route = directionsData.routes[0].geometry;

    //     // Draw the route on the map
    //     mapRef.current.addLayer({
    //         id: 'route',
    //         type: 'line',
    //         source: {
    //             type: 'geojson',
    //             data: {
    //                 type: 'Feature',
    //                 geometry: route,
    //             },
    //         },
    //         layout: {
    //             'line-join': 'round',
    //             'line-cap': 'round',
    //         },
    //         paint: {
    //             'line-color': '#3887be',
    //             'line-width': 5,
    //             'line-opacity': 0.75,
    //         },
    //     });
    //     // setIsModalOpened(false);


    //     return [startStore, endStore];
    // }

    // useCallback(findPath, )

    return (
        <div className='intro-main'>
            <div className='intro-carousel'>
                <img src='/assets/banner1.jpg' />
            </div>
            <div className='intro-more'>
                <div onClick={() => navigate("/nearby-store",
                    // {
                    //     state: {
                    //         setDirectionData,
                    //         directionsData,
                    //         userLocation
                    //     }
                    // }
                )} className='flex flex-col w-[100%] h-[50%] cursor-pointer hover:scale-105 transition-scale duration-300'>

                    <p className='heading-text'>Nearby Stores</p>
                    <img src='/assets/searchNearbyStore.jpg' />
                </div>
                <div className='flex flex-col w-[100%] h-[50%] mt-[-1vw] overflow-hidden cursor-pointer hover:scale-105 transition-scale duration-300'>
                    <p className='heading-text'>Suggested For You</p>
                    <img src='/assets/suggestedForYou.jpg' />
                </div>
            </div>
            {/* <div className='intro-map'>
                <div ref={mapContainerRef} className="map h-[21rem]" />
            </div>
            <div className='map-search-box'>
                <div className='map-search-heading'>Search stores nearby you</div>
                <div className='map-input-main'>
                    <input className='search-input' type="text" placeholder='Store Name' name="" id="" />
                    <SearchOutlined className='search-icon' />
                </div>
                <button className='map-btn' onClick={getNearbyStores}>Get Nearby Stores</button>
            </div> */}
            {/* <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)} >
                <div className=' my-4 flex flex-col gap-3 h-[50vh]'>
                    <div className='text-2xl font-medium text-center font-black text-gray-800'>{currStoreName}</div>
                    <button className="btn text-white bg-blue-500 mx-auto" onClick={findPath()}>Get directions</button>
                    <button className="btn text-white bg-blue-500 mx-auto">View Details</button>
                </div>

                <button className="btn btn-danger ml-auto" onClick={() => setIsModalOpened(false)}>Close</button>
            </Modal> */}
        </div>
    )
}

export default IntroPart