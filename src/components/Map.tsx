import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MdClose } from 'react-icons/md';
import { Marker } from 'react-map-gl'; // Ensure Marker is imported

const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.0902, // Center over the continental U.S.
    longitude: -95.7129,
    zoom: 2.1, // Zoom out to see the U.S.
    pitch: 0,
    bearing: 0,
  });

  interface MarkerType {
    code: string;
    displayImg: string;
    description: {
      name: string;
      info: string;
    };
    // Add other optional fields as needed
    lng: number;
    lat: number;
  }

  const [togglePopUp, setTogglePopUp] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  // const openPopUp = () => setTogglePopUp(true);
  const closePopUp = () => setTogglePopUp(false);

// removed bounds because it was causing the markers to act funny on click
  // const bounds = new LngLatBounds([-180, -80], [200, 90]); // Setting map boundry to Southwest corner & Northeast corner [minLng, minLat, maxLng, maxLat]

  //Custom Marker
  //Marker Data
  const markersData = [
    {
      code: 'AR',
      image: '/images/markers/markerAR.svg',
      // displayImg: '/images/scenery/AR.jpg',
      lng: -64.967,
      lat: -34.9964,
      // description: { name: 'Argentina', info: 'Located in South America.' },
    },
    {
      code: 'AU',
      image: '/images/markers/markerAU.svg',
      // displayImg: '/images/scenery/AU.jpg',
      lng: 134.4896,
      lat: -25.7323,
      // description: { name: 'Australia', info: 'Located in Oceania.' },
    },
    {
      code: 'BD',
      image: '/images/markers/markerBD.svg',
      // displayImg: '/images/scenery/BD.jpg',
      lng: 90.3563,
      lat: 23.685,
      // description: { name: 'Bangladesh', info: 'Located in South Asia.' },
    },
    {
      code: 'BE',
      image: '/images/markers/markerBE.svg',
      // displayImg: '/images/scenery/BE.jpg',
      lng: 4.469936,
      lat: 50.6407,
      // description: { name: 'Belgium', info: 'Located in Europe.' },
    },
    {
      code: 'BZ',
      image: '/images/markers/markerBZ.svg',
      // displayImg: '/images/scenery/BZ.jpg',
      lng: -88.7274,
      lat: 17.1899,
      // description: { name: 'Belize', info: 'Located in Central America.' },
    },
    {
      code: 'BO',
      image: '/images/markers/markerBO.svg',
      // displayImg: '/images/scenery/BO.jpg',
      lng: -64.6872,
      lat: -16.2902,
      // description: { name: 'Bolivia', info: 'Located in South America.' },
    },
    {
      code: 'BR',
      image: '/images/markers/markerBR.svg',
      // displayImg: '/images/scenery/BR.jpg',
      lng: -54.7314,
      lat: -14.235,
      // description: { name: 'Brazil', info: 'Located in South America.' },
    },
    {
      code: 'CA',
      image: '/images/markers/markerCA.svg',
      // displayImg: '/images/scenery/CA.jpg',
      lng: -106.3468,
      lat: 56.1304,
      // description: { name: 'Canada', info: 'Located in North America.' },
    },
    {
      code: 'CL',
      image: '/images/markers/markerCL.svg',
      // displayImg: '/images/scenery/CL.jpg',
      lng: -71.3817,
      lat: -37.2704,
      // description: { name: 'Chile', info: 'Located in South America.' },
    },
    {
      code: 'CO',
      image: '/images/markers/markerCO.svg',
      // displayImg: '/images/scenery/CO.jpg',
      lng: -74.2973,
      lat: 4.5709,
      // description: { name: 'Colombia', info: 'Located in South America.' },
    },
    {
      code: 'CR',
      image: '/images/markers/markerCR.svg',
      // displayImg: '/images/scenery/CR.jpg',
      lng: -84.1954,
      lat: 9.7489,
      // description: { name: 'Costa Rica', info: 'Located in Central America.' },
    },
    {
      code: 'EC',
      image: '/images/markers/markerEC.svg',
      // displayImg: '/images/scenery/EC.jpg',
      lng: -78.1834,
      lat: -1.8312,
      // description: { name: 'Ecuador', info: 'Located in South America.' },
    },
    {
      code: 'SV',
      image: '/images/markers/markerSV.svg',
      // displayImg: '/images/scenery/SV.jpg',
      lng: -88.8965,
      lat: 13.7942,
      // description: { name: 'El Salvador', info: 'Located in Central America.' },
    },
    {
      code: 'FR',
      image: '/images/markers/markerFR.svg',
      // displayImg: '/images/scenery/FR.jpg',
      lng: 2.2137,
      lat: 46.2276,
      // description: { name: 'France', info: 'Located in Europe.' },
    },
    {
      code: 'GT',
      image: '/images/markers/markerGT.svg',
      // displayImg: '/images/scenery/GT.jpg',
      lng: -90.2308,
      lat: 15.7835,
      // description: { name: 'Guatemala', info: 'Located in Central America.' },
    },
    {
      code: 'IN',
      image: '/images/markers/markerIN.svg',
      // displayImg: '/images/scenery/IN.jpg',
      lng: 78.9629,
      lat: 20.5937,
      // description: { name: 'India', info: 'Located in South Asia.' },
    },
    {
      code: 'MX',
      image: '/images/markers/markerMX.svg',
      // displayImg: '/images/scenery/MX.jpg',
      lng: -102.5528,
      lat: 23.6345,
      // description: { name: 'Mexico', info: 'Located in North America.' },
    },
    {
      code: 'NL',
      image: '/images/markers/markerNL.svg',
      // displayImg: '/images/scenery/NL.jpg',
      lng: 5.2913,
      lat: 52.1326,
      // description: { name: 'Netherlands', info: 'Located in Europe.' },
    },
    {
      code: 'NZ',
      image: '/images/markers/markerNZ.svg',
      // displayImg: '/images/scenery/NZ.jpg',
      lng: 174.8859,
      lat: -40.9006,
      // description: { name: 'New Zealand', info: 'Located in Oceania.' },
    },
    {
      code: 'NG',
      image: '/images/markers/markerNG.svg',
      // displayImg: '/images/scenery/NG.jpg',
      lng: 8.6753,
      lat: 9.082,
      // description: { name: 'Nigeria', info: 'Located in Africa.' },
    },
    {
      code: 'PK',
      image: '/images/markers/markerPK.svg',
      // displayImg: '/images/scenery/PK.jpg',
      lng: 69.3451,
      lat: 30.3753,
      // description: { name: 'Pakistan', info: 'Located in South Asia.' },
    },
    {
      code: 'PA',
      image: '/images/markers/markerPA.svg',
      // displayImg: '/images/scenery/PA.jpg',
      lng: -80.7821,
      lat: 8.538,
      // description: { name: 'Panama', info: 'Located in Central America.' },
    },
    {
      code: 'PE',
      image: '/images/markers/markerPE.svg',
      // displayImg: '/images/scenery/PE.jpg',
      lng: -75.0152,
      lat: -9.19,
      // description: { name: 'Peru', info: 'Located in South America.' },
    },
    {
      code: 'PT',
      image: '/images/markers/markerPT.svg',
      // displayImg: '/images/scenery/PT.jpg',
      lng: -8.2245,
      lat: 39.3999,
      // description: { name: 'Portugal', info: 'Located in Europe.' },
    },
    {
      code: 'ZA',
      image: '/images/markers/markerZA.svg',
      // displayImg: '/images/scenery/ZA.jpg',
      lng: 24.9916,
      lat: -30.5595,
      // description: { name: 'South Africa', info: 'Located in Africa.' },
    },
    {
      code: 'ES',
      image: '/images/markers/markerES.svg',
      // displayImg: '/images/scenery/ES.jpg',
      lng: -3.7038,
      lat: 40.4168,
      // description: { name: 'Spain', info: 'Located in Europe.' },
    },
    {
      code: 'CH',
      image: '/images/markers/markerCH.svg',
      // displayImg: '/images/scenery/CH.jpg',
      lng: 8.2275,
      lat: 46.8182,
      // description: { name: 'Switzerland', info: 'Located in Europe.' },
    },
    {
      code: 'UG',
      image: '/images/markers/markerUG.svg',
      // displayImg: '/images/scenery/UG.jpg',
      lng: 32.2903,
      lat: 1.3733,
      // description: { name: 'Uganda', info: 'Located in Africa.' },
    },
    {
      code: 'GB',
      image: '/images/markers/markerGB.svg',
      // displayImg: '/images/scenery/GB.jpg',
      lng: -2.2137,
      lat: 54.0,
      // description: { name: 'United Kingdom', info: 'Located in Europe.' },
    },
    {
      code: 'US',
      image: '/images/markers/markerUS.svg',
      // displayImg: '/images/scenery/US.jpg',  
      lng: -99.9018,
      lat: 37.0902,
      // description: { name: 'United States', info: 'Located in North America.' },
    },
  ];

  // const handleMarkerClick = (marker: MarkerType) => {
  //   setSelectedMarker(marker);
  //   setTogglePopUp(true);
  // }

  const handleMapMove = (e: any) => {
    setViewport(e.viewState);
  }

  // const handleLawClick = (law: keyof typeof events) => {
  //   setLaw(law);
  //   navigate('/law');
  // }

  // const handlePolicyClick = (policy: keyof typeof policyEvents) => {
  //   setPolicy(policy);
  //   navigate('/policy');
  // }

  // const handleMapLoad = (map: mapboxgl.Map) => {
  //   // Iterate through marker data
  //   markersData.forEach((markerData) => {
  //     const marker = document.createElement('div');
  //     marker.className = `marker${markerData.code}`;
  //     marker.style.width = '50px';
  //     marker.style.height = '50px';
  //     marker.style.backgroundImage = `url(${markerData.image})`;
  //     marker.style.backgroundSize = 'contain';
  //     marker.style.backgroundRepeat = 'no-repeat';

  //     // Add marker to map with the specified longitude and latitude
  //     new mapboxgl.Marker(marker)
  //       .setLngLat([markerData.lng, markerData.lat])
  //       .addTo(map);

  //     marker.addEventListener('click', () => handleMarkerClick(markerData) //passing in the marker data 
  //     );
  //   });
  // }

  // Zoom In function
  const zoomIn = () => {
    setViewport(prevState => ({
      ...prevState,
      zoom: Math.min(prevState.zoom + 0.5, 20), // Max zoom is 20
    }));
  };

  // Zoom Out function
  const zoomOut = () => {
    setViewport(prevState => ({
      ...prevState,
      zoom: Math.max(prevState.zoom - 0.5, 2), // Min zoom is 0
    }));
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '90vh' }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
        onMove={handleMapMove} // Handle map movement
        minZoom={2.1}
        maxZoom={5}
        cooperativeGestures={true} // Enable ctrl + scroll zoom
        dragRotate={false}
      >
        {markersData.map((markerData) => (
          <Marker
            key={markerData.lng}
            latitude={markerData.lat}
            longitude={markerData.lng}
          >
            <div style={{ cursor: 'pointer', width: '50px', height: '50px' }}>
              <img src={markerData.image}
              alt='marker'
                // onClick={() => handleMarkerClick(markerData)}
              />
            </div>
          </Marker>
        ))}
        {/* Custom Zoom Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            bottom: '40px',
            left: '20px',
            zIndex: 1,
          }}
        >
          <button
            onClick={zoomIn}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              marginBottom: '10px',
              fontSize: '25px',
              cursor: 'pointer',
            }}
          >
            +
          </button>

          <button
            onClick={zoomOut}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: 'none',
              marginTop: '10px',
              fontSize: '25px',
              cursor: 'pointer',
            }}
          >
            −
          </button>
        </div>
        {/* Pop-Up Display */}
        {togglePopUp && selectedMarker && (
          <div className='flex flex-col w-[430px] h-[517px] absolute top-0 right-10 z-40 rounded-xl'>
            <button
              onClick={closePopUp}
              className='h-[30px] ml-auto text-white text-2xl font-bold hover:text-slate-200'
            >
              <MdClose />
            </button>
            <div className='relative w-full h-full bg-white rounded-xl'>
              <img src={selectedMarker.displayImg} alt='Marker' className='w-[400px] h-[313px] mx-auto my-5' />
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[28px] font-normal mb-5'>{selectedMarker.description.name}</h1>
                <p className='text-[18px] mb-5'>{selectedMarker.description.info}</p>
                <div className='flex flex-row mb-5'>
                  <button 
                    className='text-[14px] font-light px-5 rounded-full w-[106px] h-[30px] border-black border-2 hover:border-[#004d6f] hover:text-[#004d6f] mx-2'
                    // onClick={() => handleLawClick(selectedMarker.code as keyof typeof events)}
                  >
                    Law
                  </button>
                  <button className='text-[14px] font-light px-5 rounded-full w-[106px] h-[30px] border-black border-2 hover:border-[#004d6f] hover:text-[#004d6f] mx-2'
                    // onClick={() => handlePolicyClick(selectedMarker.code as keyof typeof policyEvents)}
                  >
                    Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactMapGL>
    </div>
  );


};

export default Map;

