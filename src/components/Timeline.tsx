import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../App.scss';

function Timeline() {

  return (
    <div className='map-container'>
      <MapContainer
        center={[20, 0]} // Use center to define the initial center of the map
        zoom={2}          // Set the initial zoom level
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false} // Optional: Disable scroll zoom
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[20, 0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Timeline;
