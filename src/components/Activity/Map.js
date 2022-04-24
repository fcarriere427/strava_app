import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

function Map() {
    return (
      <MapContainer
        center={[47.585505245113346, -2.9980409668985826]} //centré sur St Phi ;-)
        zoom={13}
        scrollWheelZoom={false}
        style={{height: '600px'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RunTrace />
      </MapContainer>
    );
  }
}

function RunTrace() {
  return(
    <p>RunTrace!</p>
  )

  // const map = useMap();
  //
  // this.setState({ position: this.props.activity.start_latlng });


  //start_position = this.props.activity.start_latlng;
  //let polyline = this.props.activity.map.summary_polyline;

  /* <Polyline
    positions={polyline}
  /> */


  //setView(e.latlng, parentMap.getZoom()


}

export {
  Map
}
