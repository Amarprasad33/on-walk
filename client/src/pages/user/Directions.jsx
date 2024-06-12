import { useRef } from "react";
import { useLocation } from 'react-router-dom';

export default function Directions() {
    const location = useLocation();
    const state = location.state || {};
    console.log("state", state);
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        let apiData;
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [85.82013402225823, 20.29264639080795],
          zoom: 9,  
        });
    
        mapRef.current = map;

        return () => map.remove();


    }, []);

  return (
    <div>
        <h2>Path between you and your selected store</h2>
        <div className='intro-map'>
                <div  ref={mapContainerRef} className="map h-[21rem]" />
            </div>
    </div>
  )
}