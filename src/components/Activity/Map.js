import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

class Map extends Component {

  render() {
    //const position = [48.87, 2.24];
    const start_position = this.props.activity.start_latlng;
    let polyline = this.props.activity.map.summary_polyline;

    return (
      <MapContainer
        center={start_position}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '500px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>


    );
  }
}

export {
  Map
}
