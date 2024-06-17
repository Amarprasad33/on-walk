import { useEffect, useRef, useState } from "react";
import NavbarAfterLogin from "../../components/NavbarAfterLogin";
import mapboxgl from 'mapbox-gl';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Grid } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ImageViewer from "../../components/ImageViewer";

// Registration of components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ItemManager() {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    let [arr, setArr] = useState([0, 1, 2, 3, 4]);
    const [yourLoc, setYourLoc] = useState({});
    const navigate = useNavigate();
    const [isStoreLocated, setStoreLocation] = useState(true); // Upon api call, if you get the store coordinates, make it true.
    const [merchantData, setMerchantData] = useState();


    const fetchMerchant = async () => {
        try {
            const token = localStorage.getItem("merchantToken");
            const url = "http://localhost:8010/api/merchant/getMerchant";
            const { data: res } = await axios.post(url, { token: token });
            setMerchantData(res);
        } catch (error) {
            console.log(error);
        }

    }

    /* Chart Configurations */
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };
    /* Chart Configurations */


    useEffect(() => {
        fetchMerchant();
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
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('position', position)
                const { latitude, longitude } = position.coords;
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                if (isNaN(latitude) || isNaN(longitude)) {
                    console.error('Invalid coordinates:', latitude, longitude);
                    return;
                }

                const loc = {
                    name: merchantData.shopName,
                    longitude: parseFloat(merchantData.location.coordinates[0]),
                    latitude: parseFloat(merchantData.location.coordinates[1])
                }
                setYourLoc(loc);
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
        console.log('yourLOc', yourLoc)
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
        <div id="main-landing-page" className="relative w-full flex flex-col ">
            <NavbarAfterLogin />

            <div id="loc-&-stats" className="flex mt-5 ml-8">
                <div className=' my-4 flex flex-col gap-3 h-[60vh] w-[50vw]'>
                    <div className="map-container h-[18rem]">
                        <div ref={mapContainerRef} className="map h-[18rem] mt-12" />
                    </div>

                    {isStoreLocated && <button className="btn text-white bg-blue-500 mx-auto mt-10" onClick={locateOnMap}>Locate your store on Map</button>}

                </div>

                <div id="graph-container" style={{ 'height': '400px', 'width': '600px', 'marginLeft': '40px' }}>
                    <Bar data={data} options={options} height={400} width={600} />
                </div>
            </div>

            <div className="flex flex-col gap-6 items-center text-center max-h-[88vh] overflow-y-scroll w-[80%] self-center rounded-md " style={{ 'position': 'relative' }} >
                {arr.map((item, idx) => (
                    <div key={item} id={`item-card-${item}`} className="w-[75%] p-3  rounded-lg shadow-xl">
                        <div className="flex gap-10 items-center">
                            <div className="w-[10rem] h-[8rem] bg-center bg-cover overflow-hidden">
                                <ImageViewer index={idx} />
                            </div>
                            <div id="item-details" className="flex flex-col gap-4 items-baseline">
                                <div>Item name: </div>
                                <div>Catetogy: </div>
                                <div>Price: </div>
                            </div>
                            <div id="item-action-btns" className="ml-auto mr-10">
                                <h4>Quantity</h4>
                                <div id="quantity" className="flex gap-[6px] bg-blue-600 text-white p-1 rounded-md">
                                    <button className="px-1.5 hover:scale-150">-</button>
                                    <div className="px-1.5">{2}</div>
                                    <button className="px-1.5 hover:scale-150">+</button>
                                </div>
                                <button className="flex gap-[10px] items-center font-medium text-[1.2rem] border border-black mt-[14px] py-[4px] px-[8px] rounded-md hover:scale-110 transition-all duration-200" >
                                    <div id="icon" className=" bg-center bg-cover h-[1.5rem] w-[1.5rem] bg-[url('/assets/icons/setting.png')]"></div>
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id="action-btns" className="mt-4 mb-4 flex gap-4 items-center self-center" style={{ 'position': 'fixed', 'bottom': '0px' }}>
                <button className="p-2 w-[18rem] bg-[#2238FF] rounded-md text-slate-100 hover:scale-90 transition-all duration-300" onClick={() => navigate('/merch/additem')} >
                    Add a new item
                </button>
                <button className="flex gap-[10px] items-center font-medium text-[1.2rem] border border-black py-[4px] px-[8px] rounded-md hover:scale-110 transition-all duration-200" >
                    <span>Save</span>
                </button>
            </div>

        </div>
    )
}