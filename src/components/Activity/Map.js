import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

class Map extends Component {

  render() {

    let position = [0, 0];

    componentDidMount(){
      position = this.props.activity.start_latlng;
    }

    //let start_position = [48.87, 2.24];
    //start_position = this.props.activity.start_latlng;
    //let polyline = this.props.activity.map.summary_polyline;

    //console.log("start_position = " + start_position);
    //console.log("polyline = " + polyline);

    return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '600px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Polyline
          positions={polyline}
        /> */}
      </MapContainer>


    );
  }
}

export {
  Map
}
