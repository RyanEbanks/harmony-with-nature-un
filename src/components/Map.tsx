import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GiPineTree } from 'react-icons/gi';
import { renderToStaticMarkup } from 'react-dom/server';
import marker from '../images/custom-marker.svg'

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.0902, // Center over the continental U.S.
    longitude: -95.7129,
    zoom: 2, // Zoom out to see the U.S.
    pitch: 0,
    bearing: 0,
  });

  //Custom Marker
  const markerDiv = document.createElement('div');
  const markerDiv2 = document.createElement('div');
  const markerDiv3 = document.createElement('div');
  const markerDiv4 = document.createElement('div');
  const markerDiv5 = document.createElement('div');

  markerDiv.style.width = '80px';
  markerDiv.style.height = '80px';

  markerDiv2.style.width = '80px';
  markerDiv2.style.height = '80px';

  markerDiv3.style.width = '80px';
  markerDiv3.style.height = '80px';

  markerDiv4.style.width = '80px';
  markerDiv4.style.height = '80px';

  markerDiv5.style.width = '80px';
  markerDiv5.style.height = '80px';

  markerDiv.style.backgroundImage = 'url(/images/custom-marker.svg)';
  markerDiv2.style.backgroundImage = 'url(/images/custom-marker.svg)';
  markerDiv3.style.backgroundImage = 'url(/images/custom-marker.svg)';
  markerDiv4.style.backgroundImage = 'url(/images/custom-marker.svg)';
  markerDiv5.style.backgroundImage = 'url(/images/custom-marker.svg)';

  markerDiv.style.backgroundSize = 'contain';
  markerDiv.style.backgroundRepeat = 'no-repeat';

  markerDiv2.style.backgroundSize = 'contain';
  markerDiv2.style.backgroundRepeat = 'no-repeat';

  markerDiv3.style.backgroundSize = 'contain';
  markerDiv3.style.backgroundRepeat = 'no-repeat';

  markerDiv4.style.backgroundSize = 'contain';
  markerDiv4.style.backgroundRepeat = 'no-repeat';

  markerDiv5.style.backgroundSize = 'contain';
  markerDiv5.style.backgroundRepeat = 'no-repeat';
  // markerDiv.style.fontSize = '30px';
  // markerDiv.style.color = 'green';
  // markerDiv.innerHTML = `<div>${renderToStaticMarkup(<GiPineTree />)}</div>`
  
  const handleMapLoad = (map: mapboxgl.Map) => {
    // Create and add the marker for Texas
    new mapboxgl.Marker(markerDiv)
      .setLngLat([-99.5614, 27.5028]) // Texas coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
    new mapboxgl.Marker(markerDiv2)
      .setLngLat([-107.7525, 56.8831]) // Canada coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
    new mapboxgl.Marker(markerDiv3)
      .setLngLat([19.3723, 14.3037]) // Africa coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
    new mapboxgl.Marker(markerDiv4)
      .setLngLat([109.3527, 35.5915]) // China coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
    new mapboxgl.Marker(markerDiv5)
      .setLngLat([-52.1487, -10.6007]) // Brazil coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        onMove={(evt) => setViewport(evt.viewState)} // Handle map movement
        onLoad={(e) => handleMapLoad(e.target)} // Ensure the map instance is passed
        scrollZoom={false} // Enable zoom for user interaction
      />
    </div>
  );
};

export default Map;
