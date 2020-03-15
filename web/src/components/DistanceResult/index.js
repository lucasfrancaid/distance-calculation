import React from 'react';
import GoogleMapReact from 'google-map-react';

import './styles.css';
import './marker.css';

const DistanceResult = ({ distance, duration }) => {
  if (distance) {
    return (
        <ul className="distance-item">
        <header>
          <div className="distance-info">
            <strong>
              <p>The distance is {distance} and the journey takes {duration}. </p>
            </strong>
          </div>
        </header>
      </ul>
    )
} else {
  return(
    <h1> </h1>
  )}
};

const Map = ({ origins, destinations, zoom, center }) => {

  if (origins && destinations && zoom && center) {
    return(
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{key: 'GOOGLE_API_KEY'}} center={center} zoom={zoom}>
        <Marker lat={origins.lat} lng={origins.lng} text="A" />
        <Marker lat={destinations.lat} lng={destinations.lng} text="B" />
      </GoogleMapReact>
    </div>
    )
  } else {
    return(
      <h1> </h1>
  )}
}

const Marker = ({text}) => {
  return <>
    <div className="pin"></div>
    <div className="pulse"></div>
      <div className="text">{text}</div>
  </>
}

export {Map, DistanceResult};