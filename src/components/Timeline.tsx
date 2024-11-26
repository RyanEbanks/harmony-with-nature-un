import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Timeline = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.9133,
    longitude: -122.0735,
    zoom: 2,
    pitch: 0,
    bearing: 0
  });
  console.log("Mapbox Token:", process.env.REACT_APP_MAPBOX_TOKEN);

  return (
    
    <div style={{ width: '100vw', height: '80vh' }}>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        onMove={(evt) => setViewport(evt.viewState)}  // For interaction
        scrollZoom={false} // Disable zooming (optional)
        />
    </div>
  );
};

export default Timeline;
