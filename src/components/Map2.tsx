import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GiPineTree } from 'react-icons/gi';
import { renderToStaticMarkup } from 'react-dom/server';
import marker from '../images/custom-marker.svg'
// import Flag from 'react-world-flags';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.0902, // Center over the continental U.S.
    longitude: -95.7129,
    zoom: 2, // Zoom out to see the U.S.
    pitch: 0,
    bearing: 0,
  });

  //Custom Marker
  const markerAR = document.createElement('div');
  const markerAU = document.createElement('div');
  const markerBD = document.createElement('div');
  const markerBE = document.createElement('div');
  const markerBZ = document.createElement('div');
  const markerBO = document.createElement('div');
  const markerBR = document.createElement('div');
  const markerCA = document.createElement('div');
  const markerCL = document.createElement('div');
  const markerCO = document.createElement('div');
  const markerCR = document.createElement('div');
  const markerEC = document.createElement('div');
  const markerSV = document.createElement('div');
  const markerFR = document.createElement('div');
  const markerGT = document.createElement('div');
  const markerIN = document.createElement('div');
  const markerMX = document.createElement('div');
  const markerNL = document.createElement('div');
  const markerNZ = document.createElement('div');
  const markerNG = document.createElement('div');
  const markerPK = document.createElement('div');
  const markerPA = document.createElement('div');
  const markerPE = document.createElement('div');
  const markerPT = document.createElement('div');
  const markerZA = document.createElement('div');
  const markerES = document.createElement('div');
  const markerCH = document.createElement('div');
  const markerUG = document.createElement('div');
  const markerGB = document.createElement('div');
  const markerUS = document.createElement('div')

  markerAR.style.width = '50px';
  markerAU.style.width = '50px';
  markerBD.style.width = '50px';
  markerBE.style.width = '50px';
  markerBZ.style.width = '50px';
  markerBO.style.width = '50px';
  markerBR.style.width = '50px';
  markerCA.style.width = '50px';
  markerCL.style.width = '50px';
  markerCO.style.width = '50px';
  markerCR.style.width = '50px';
  markerEC.style.width = '50px';
  markerSV.style.width = '50px';
  markerFR.style.width = '50px';
  markerGT.style.width = '50px';
  markerIN.style.width = '50px';
  markerMX.style.width = '50px';
  markerNL.style.width = '50px';
  markerNZ.style.width = '50px';
  markerNG.style.width = '50px';
  markerPK.style.width = '50px';
  markerPA.style.width = '50px';
  markerPE.style.width = '50px';
  markerPT.style.width = '50px';
  markerZA.style.width = '50px';
  markerES.style.width = '50px';
  markerCH.style.width = '50px';
  markerUG.style.width = '50px';
  markerGB.style.width = '50px';
  markerUS.style.width = '50px';

  markerAR.style.height = '50px';
  markerAU.style.height = '50px';
  markerBD.style.height = '50px';
  markerBE.style.height = '50px';
  markerBZ.style.height = '50px';
  markerBO.style.height = '50px';
  markerBR.style.height = '50px';
  markerCA.style.height = '50px';
  markerCL.style.height = '50px';
  markerCO.style.height = '50px';
  markerCR.style.height = '50px';
  markerEC.style.height = '50px';
  markerSV.style.height = '50px';
  markerFR.style.height = '50px';
  markerGT.style.height = '50px';
  markerIN.style.height = '50px';
  markerMX.style.height = '50px';
  markerNL.style.height = '50px';
  markerNZ.style.height = '50px';
  markerNG.style.height = '50px';
  markerPK.style.height = '50px';
  markerPA.style.height = '50px';
  markerPE.style.height = '50px';
  markerPT.style.height = '50px';
  markerZA.style.height = '50px';
  markerES.style.height = '50px';
  markerCH.style.height = '50px';
  markerUG.style.height = '50px';
  markerGB.style.height = '50px';
  markerUS.style.height = '50px';

  // markerAR.style.backgroundImage = <Flag code='AR' />;
  // markerAU.style.backgroundImage = <Flag code='AU' />;
  // markerBD.style.backgroundImage = <Flag code='BD' />;
  // markerBE.style.backgroundImage = <Flag code='BE' />;
  // markerBZ.style.backgroundImage = <Flag code='BZ' />;
  // markerBO.style.backgroundImage = <Flag code='BO' />;
  // markerBR.style.backgroundImage = <Flag code='BR' />;
  // markerCA.style.backgroundImage = <Flag code='CA' />;
  // markerCL.style.backgroundImage = <Flag code='CL' />;
  // markerCO.style.backgroundImage = <Flag code='CO' />;
  // markerCR.style.backgroundImage = <Flag code='CR' />;
  // markerEC.style.backgroundImage = <Flag code='EC' />;
  // markerSV.style.backgroundImage = <Flag code='SV' />;
  // markerFR.style.backgroundImage = <Flag code='FR' />;
  // markerGT.style.backgroundImage = <Flag code='GT' />;
  // markerIN.style.backgroundImage = <Flag code='IN' />;
  // markerMX.style.backgroundImage = <Flag code='MX' />;
  // markerNL.style.backgroundImage = <Flag code='NL' />;
  // markerNZ.style.backgroundImage = <Flag code='NZ' />;
  // markerNG.style.backgroundImage = <Flag code='NG' />;
  // markerPK.style.backgroundImage = <Flag code='PK' />;
  // markerPA.style.backgroundImage = <Flag code='PA' />;
  // markerPE.style.backgroundImage = <Flag code='PE' />;
  // markerPT.style.backgroundImage = <Flag code='PT' />;
  // markerZA.style.backgroundImage = <Flag code='ZA' />;
  // markerES.style.backgroundImage = <Flag code='ES' />;
  // markerCH.style.backgroundImage = <Flag code='CH' />;
  // markerUG.style.backgroundImage = <Flag code='UG' />;
  // markerGB.style.backgroundImage = <Flag code='GB' />;
  // markerUS.style.backgroundImage = <Flag code='US' />;


  markerAR.style.backgroundImage = "url(https://flagcdn.com/ar.svg)"; // Argentina
  markerAU.style.backgroundImage = "url(https://flagcdn.com/au.svg)"; // Australia
  markerBD.style.backgroundImage = "url(https://flagcdn.com/bd.svg)"; // Bangladesh
  markerBE.style.backgroundImage = "url(https://flagcdn.com/be.svg)"; // Belgium
  markerBZ.style.backgroundImage = "url(https://flagcdn.com/bz.svg)"; // Belize
  markerBO.style.backgroundImage = "url(https://flagcdn.com/bo.svg)"; // Bolivia
  markerBR.style.backgroundImage = "url(https://flagcdn.com/br.svg)"; // Brazil
  markerCA.style.backgroundImage = "url(https://flagcdn.com/ca.svg)"; // Canada
  markerCL.style.backgroundImage = "url(https://flagcdn.com/cl.svg)"; // Chile
  markerCO.style.backgroundImage = "url(https://flagcdn.com/co.svg)"; // Colombia
  markerCR.style.backgroundImage = "url(https://flagcdn.com/cr.svg)"; // Costa Rica
  markerEC.style.backgroundImage = "url(https://flagcdn.com/ec.svg)"; // Ecuador
  markerSV.style.backgroundImage = "url(https://flagcdn.com/sv.svg)"; // El Salvador
  markerFR.style.backgroundImage = "url(https://flagcdn.com/fr.svg)"; // France
  markerGT.style.backgroundImage = "url(https://flagcdn.com/gt.svg)"; // Guatemala
  markerIN.style.backgroundImage = "url(https://flagcdn.com/in.svg)"; // India
  markerMX.style.backgroundImage = "url(https://flagcdn.com/mx.svg)"; // Mexico
  markerNL.style.backgroundImage = "url(https://flagcdn.com/nl.svg)"; // Netherlands
  markerNZ.style.backgroundImage = "url(https://flagcdn.com/nz.svg)"; // New Zealand
  markerNG.style.backgroundImage = "url(https://flagcdn.com/ng.svg)"; // Nigeria
  markerPK.style.backgroundImage = "url(https://flagcdn.com/pk.svg)"; // Pakistan
  markerPA.style.backgroundImage = "url(https://flagcdn.com/pa.svg)"; // Panama
  markerPE.style.backgroundImage = "url(https://flagcdn.com/pe.svg)"; // Peru
  markerPT.style.backgroundImage = "url(https://flagcdn.com/pt.svg)"; // Portugal
  markerZA.style.backgroundImage = "url(https://flagcdn.com/za.svg)"; // South Africa
  markerES.style.backgroundImage = "url(https://flagcdn.com/es.svg)"; // Spain
  markerCH.style.backgroundImage = "url(https://flagcdn.com/ch.svg)"; // Switzerland
  markerUG.style.backgroundImage = "url(https://flagcdn.com/ug.svg)"; // Uganda
  markerGB.style.backgroundImage = "url(https://flagcdn.com/gb.svg)"; // United Kingdom
  markerUS.style.backgroundImage = "url(https://flagcdn.com/us.svg)"; // United States

  markerAR.style.backgroundSize = 'contain'; // Argentina
  markerAU.style.backgroundSize = 'contain'; // Australia
  markerBD.style.backgroundSize = 'contain'; // Bangladesh
  markerBE.style.backgroundSize = 'contain'; // Belgium
  markerBZ.style.backgroundSize = 'contain'; // Belize
  markerBO.style.backgroundSize = 'contain'; // Bolivia
  markerBR.style.backgroundSize = 'contain'; // Brazil
  markerCA.style.backgroundSize = 'contain'; // Canada
  markerCL.style.backgroundSize = 'contain'; // Chile
  markerCO.style.backgroundSize = 'contain'; // Colombia
  markerCR.style.backgroundSize = 'contain'; // Costa Rica
  markerEC.style.backgroundSize = 'contain'; // Ecuador
  markerSV.style.backgroundSize = 'contain'; // El Salvador
  markerFR.style.backgroundSize = 'contain'; // France
  markerGT.style.backgroundSize = 'contain'; // Guatemala
  markerIN.style.backgroundSize = 'contain'; // India
  markerMX.style.backgroundSize = 'contain'; // Mexico
  markerNL.style.backgroundSize = 'contain'; // Netherlands
  markerNZ.style.backgroundSize = 'contain'; // New Zealand
  markerNG.style.backgroundSize = 'contain'; // Nigeria
  markerPK.style.backgroundSize = 'contain'; // Pakistan
  markerPA.style.backgroundSize = 'contain'; // Panama
  markerPE.style.backgroundSize = 'contain'; // Peru
  markerPT.style.backgroundSize = 'contain'; // Portugal
  markerZA.style.backgroundSize = 'contain'; // South Africa
  markerES.style.backgroundSize = 'contain'; // Spain
  markerCH.style.backgroundSize = 'contain'; // Switzerland
  markerUG.style.backgroundSize = 'contain'; // Uganda
  markerGB.style.backgroundSize = 'contain'; // United Kingdom
  markerUS.style.backgroundSize = 'contain'; // United States

  markerAR.style.backgroundRepeat = 'no-repeat'; // Argentina
  markerAU.style.backgroundRepeat = 'no-repeat'; // Australia
  markerBD.style.backgroundRepeat = 'no-repeat'; // Bangladesh
  markerBE.style.backgroundRepeat = 'no-repeat'; // Belgium
  markerBZ.style.backgroundRepeat = 'no-repeat'; // Belize
  markerBO.style.backgroundRepeat = 'no-repeat'; // Bolivia
  markerBR.style.backgroundRepeat = 'no-repeat'; // Brazil
  markerCA.style.backgroundRepeat = 'no-repeat'; // Canada
  markerCL.style.backgroundRepeat = 'no-repeat'; // Chile
  markerCO.style.backgroundRepeat = 'no-repeat'; // Colombia
  markerCR.style.backgroundRepeat = 'no-repeat'; // Costa Rica
  markerEC.style.backgroundRepeat = 'no-repeat'; // Ecuador
  markerSV.style.backgroundRepeat = 'no-repeat'; // El Salvador
  markerFR.style.backgroundRepeat = 'no-repeat'; // France
  markerGT.style.backgroundRepeat = 'no-repeat'; // Guatemala
  markerIN.style.backgroundRepeat = 'no-repeat'; // India
  markerMX.style.backgroundRepeat = 'no-repeat'; // Mexico
  markerNL.style.backgroundRepeat = 'no-repeat'; // Netherlands
  markerNZ.style.backgroundRepeat = 'no-repeat'; // New Zealand
  markerNG.style.backgroundRepeat = 'no-repeat'; // Nigeria
  markerPK.style.backgroundRepeat = 'no-repeat'; // Pakistan
  markerPA.style.backgroundRepeat = 'no-repeat'; // Panama
  markerPE.style.backgroundRepeat = 'no-repeat'; // Peru
  markerPT.style.backgroundRepeat = 'no-repeat'; // Portugal
  markerZA.style.backgroundRepeat = 'no-repeat'; // South Africa
  markerES.style.backgroundRepeat = 'no-repeat'; // Spain
  markerCH.style.backgroundRepeat = 'no-repeat'; // Switzerland
  markerUG.style.backgroundRepeat = 'no-repeat'; // Uganda
  markerGB.style.backgroundRepeat = 'no-repeat'; // United Kingdom
  markerUS.style.backgroundRepeat = 'no-repeat'; // United States



  const handleMapLoad = (map: mapboxgl.Map) => {
    new mapboxgl.Marker(markerAR)
      .setLngLat([-58.4173, -34.6118]) // Argentina (Buenos Aires)
      .addTo(map);

    new mapboxgl.Marker(markerAU)
      .setLngLat([151.2093, -33.8688]) // Australia (Sydney)
      .addTo(map);

    new mapboxgl.Marker(markerBD)
      .setLngLat([90.4125, 23.8103]) // Bangladesh (Dhaka)
      .addTo(map);

    new mapboxgl.Marker(markerBE)
      .setLngLat([4.3517, 50.8503]) // Belgium (Brussels)
      .addTo(map);

    new mapboxgl.Marker(markerBZ)
      .setLngLat([-88.758, 17.5046]) // Belize (Belmopan)
      .addTo(map);

    new mapboxgl.Marker(markerBO)
      .setLngLat([-68.1193, -16.4897]) // Bolivia (La Paz)
      .addTo(map);

    new mapboxgl.Marker(markerBR)
      .setLngLat([-47.9292, -15.7801]) // Brazil (Brasilia)
      .addTo(map);

    new mapboxgl.Marker(markerCA)
      .setLngLat([-75.6972, 45.4215]) // Canada (Ottawa)
      .addTo(map);

    new mapboxgl.Marker(markerCL)
      .setLngLat([-70.6483, -33.4569]) // Chile (Santiago)
      .addTo(map);

    new mapboxgl.Marker(markerCO)
      .setLngLat([-74.0721, 4.711]) // Colombia (Bogotá)
      .addTo(map);

    new mapboxgl.Marker(markerCR)
      .setLngLat([-84.0833, 9.9347]) // Costa Rica (San José)
      .addTo(map);

    new mapboxgl.Marker(markerEC)
      .setLngLat([-78.4678, -0.1807]) // Ecuador (Quito)
      .addTo(map);

    new mapboxgl.Marker(markerSV)
      .setLngLat([-89.2182, 13.6929]) // El Salvador (San Salvador)
      .addTo(map);

    new mapboxgl.Marker(markerFR)
      .setLngLat([2.3522, 48.8566]) // France (Paris)
      .addTo(map);

    new mapboxgl.Marker(markerGT)
      .setLngLat([-90.5269, 14.6349]) // Guatemala (Guatemala City)
      .addTo(map);

    new mapboxgl.Marker(markerIN)
      .setLngLat([77.209, 28.6139]) // India (New Delhi)
      .addTo(map);

    new mapboxgl.Marker(markerMX)
      .setLngLat([-99.1332, 19.4326]) // Mexico (Mexico City)
      .addTo(map);

    new mapboxgl.Marker(markerNL)
      .setLngLat([4.9041, 52.3676]) // Netherlands (Amsterdam)
      .addTo(map);

    new mapboxgl.Marker(markerNZ)
      .setLngLat([174.7787, -41.2924]) // New Zealand (Wellington)
      .addTo(map);

    new mapboxgl.Marker(markerNG)
      .setLngLat([7.4913, 9.0556]) // Nigeria (Abuja)
      .addTo(map);

    new mapboxgl.Marker(markerPK)
      .setLngLat([73.0551, 33.6844]) // Pakistan (Islamabad)
      .addTo(map);

    new mapboxgl.Marker(markerPA)
      .setLngLat([-79.5188, 8.9824]) // Panama (Panama City)
      .addTo(map);

    new mapboxgl.Marker(markerPE)
      .setLngLat([-77.0428, -12.0464]) // Peru (Lima)
      .addTo(map);

    new mapboxgl.Marker(markerPT)
      .setLngLat([-9.1394, 38.7223]) // Portugal (Lisbon)
      .addTo(map);

    new mapboxgl.Marker(markerZA)
      .setLngLat([28.0473, -26.2041]) // South Africa (Johannesburg)
      .addTo(map);

    new mapboxgl.Marker(markerES)
      .setLngLat([-3.7038, 40.4168]) // Spain (Madrid)
      .addTo(map);

    new mapboxgl.Marker(markerCH)
      .setLngLat([7.4474, 46.9481]) // Switzerland (Bern)
      .addTo(map);

    new mapboxgl.Marker(markerUG)
      .setLngLat([32.5832, 0.3476]) // Uganda (Kampala)
      .addTo(map);

    new mapboxgl.Marker(markerGB)
      .setLngLat([-0.1276, 51.5074]) // United Kingdom (London)
      .addTo(map);

    new mapboxgl.Marker(markerUS)
      .setLngLat([-77.0369, 38.9072]) // United States (Washington, D.C.)
      .addTo(map);

  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
        onMove={(evt) => setViewport(evt.viewState)} // Handle map movement
        onLoad={(e) => handleMapLoad(e.target)} // Ensure the map instance is passed
        scrollZoom={false} // Enable zoom for user interaction
      />
    </div>
  );
};

export default Map;
