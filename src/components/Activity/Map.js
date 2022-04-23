import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer } from "react-leaflet";

class Map extends Component {

  render() {
    const defaultPosition: LatLngExpression = [48, 2];

    return (

      <div className="map__container">
        
        <MapContainer
          center={defaultPosition}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>

        {/* <MapContainer
          center={defaultPosition}
          zoom={18}
          >
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer> */}
      </div>
    );
  }
}

export {
  Map
}
