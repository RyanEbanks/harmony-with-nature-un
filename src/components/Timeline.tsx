import mapboxgl from 'mapbox-gl';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { GiPineTree } from 'react-icons/gi';
import { renderToStaticMarkup } from 'react-dom/server';

const Timeline = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.0902, // Center over the continental U.S.
    longitude: -95.7129,
    zoom: 2, // Zoom out to see the U.S.
    pitch: 0,
    bearing: 0,
  });

  //Custom Marker
  const markerDiv = document.createElement('div');
  markerDiv.style.fontSize = '30px';
  markerDiv.style.color = 'green';
  markerDiv.innerHTML = `<div>${renderToStaticMarkup(<GiPineTree />)}</div>`
  
  const handleMapLoad = (map: mapboxgl.Map) => {
    // Create and add the marker for Texas
    new mapboxgl.Marker()
      .setLngLat([-99.5614, 27.5028]) // Texas coordinates (longitude, latitude)
      .addTo(map); // Attach to the map instance
  };

  return (
    <div style={{ width: '100vw', height: '80vh' }}>
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

export default Timeline;
