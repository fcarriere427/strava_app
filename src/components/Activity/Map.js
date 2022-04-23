import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends Component {

  render() {
    const defaultPosition = [48.87, 2.24];

    return (

        <MapContainer
          center={defaultPosition}
          zoom={13}
        >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={defaultPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

        </MapContainer>

        /* <MapContainer
          center={defaultPosition}
          zoom={18}
          >
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer> */

    );
  }
}

export {
  Map
}
