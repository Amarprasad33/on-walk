import React, { useEffect, useRef, useState } from 'react'
import NavbarAfterLogin from './NavbarAfterLogin'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useLocation } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxrcnJhaiIsImEiOiJjbHYzbjgyemQwcmtmMmpwOHd0OTg5eW9sIn0.Dtuo5qqHCxv_01nK7YHVkg';


const AboutShop = () => {
    let location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [userLocation, setUserLocation] = useState({});
    const [yourLoc, setYourLoc] = useState({});
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    console.log("loc", location);
    const dummyShop = [
        {
            shopName: "Big Bazaar",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        },
        {
            shopName: "Fitness Zone",
            address: "246 Birch Way, Seattle, WA 98101",
            description: "A fitness center equipped with state-of-the-art gym equipment, offering group classes, personal training, and wellness programs to help you achieve your health goals.",
            shopPic: "/assets/shop.svg"
        }
    ]
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [85.82013402225823, 20.29264639080795],
            zoom: 9,
        });
        mapRef.current = map;

        return () => map.remove();
    });

    const plot_locations = () => {
        const youAsStore = location.state.youAsStore;
        const destStore = location.state.destStore;
        console.log("youAs", youAsStore);
        console.log("destSTor", destStore);
        mapRef.current.flyTo({
            center: [youAsStore.longitude, youAsStore.latitude],
            zoom: 14,
        });
        let popup = new mapboxgl.Popup()
            .setLngLat([youAsStore.longitude, youAsStore.latitude])
            .setHTML(`<h3 style="padding:4px 8px;">${youAsStore.shopName}</h3>`)
            .addTo(mapRef.current);

        // popup.getElement().addEventListener('click', function (event) {
        //     // console.log('Popup content clicked!', event);
        //     const storeName = event.target.innerHTML || event.target.textContent;
        //     // setCurrStoreName(storeName);
        //     console.log('Store name:', storeName);
        //     event.stopPropagation();
        // });
        ////
        mapRef.current.flyTo({
            center: [destStore.longitude, destStore.latitude],
            zoom: 16,
        });
        let popup2 = new mapboxgl.Popup()
            .setLngLat([destStore.longitude, destStore.latitude])
            .setHTML(`<h3 style="padding:4px 8px;">${destStore.shopName}</h3>`)
            .addTo(mapRef.current);

        // popup2.getElement().addEventListener('click', function (event) {
        //     // console.log('Popup content clicked!', event);
        //     const storeName = event.target.innerHTML || event.target.textContent;
        //     // setCurrStoreName(storeName);
        //     console.log('Store name:', storeName);
        //     event.stopPropagation();
        // });


    }

    

    const locateOnMap = async () => {
        // checkLoc();
        await saveYourLocation();
        if (yourLoc) {
            mapRef.current.flyTo({
                center: [yourLoc.longitude, yourLoc.latitude],
                
            });
            new mapboxgl.Popup()
                .setLngLat([yourLoc.longitude, yourLoc.latitude])
                .setHTML(`<p>${yourLoc.name}</p>`)
                .addTo(mapRef.current);
        } else {
            alert('Something went wrong!!');
        }
    }

     const findPath = async () => {
        const startStore = location.state.youAsStore;
        const endStore = location.state.destStore;

        console.log("st--", startStore);
        console.log("end--", endStore);
        if (!startStore || !endStore) {
            console.log('Start or end store not found');
            return [];
        }

        const directionsResponse = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${startStore.longitude},${startStore.latitude};${endStore.longitude},${endStore.latitude}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );

        const directionsData = await directionsResponse.json();
        const route = directionsData.routes[0].geometry;

        // Draw the route on the map
        mapRef.current.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: route,
                },
            },
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
            },
            paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75,
            },
        });
        // setIsModalOpened(false);


        return [startStore, endStore];
    }




    return (
        <div style={{ height: "100%", backgroundColor: "#eef3f7" }}>
            <div id='saleBox'>
                <NavbarAfterLogin scrolled={scrolled} setUserLocation={setUserLocation} />
            </div>
            <div className=' my-4 flex flex-col gap-3 w-[90%] h-[70vh] m-auto'>
                <div className='text-2xl font-medium text-center text-gray-800'>Set your precise location</div>
                <div ref={mapContainerRef} className="map-container h-[25rem]">

                    <div className="map h-[20rem]" />
                </div>
                <button className="btn text-white bg-blue-500 mx-auto" onClick={plot_locations} >Plot store location</button>
                <button className="btn text-white bg-blue-500 mx-auto" onClick={findPath} >Find nearest path</button>
            </div>
            <div className='w-[70%] h-auto m-auto'>
                <div>
                    {dummyShop.map((shop) => (
                        <div className='p-2'>
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

export default AboutShop;