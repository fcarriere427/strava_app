import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'
import { L } from 'leaflet'

const Leaflet = window.L;
const polyUtil = require ('./polylineFunctions.js');

function Map(props) {
  return (
    <MapContainer
      center={[47.585505245113346, -2.9980409668985826]} //centré sur St Phi ;-)
      zoom={13}
      // scrollWheelZoom={false}
      style={{height: '80vh'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RunTrace activity={props.activity} />
    </MapContainer>
  );
}

function RunTrace(props) {
  const parentMap = useMap();
  parentMap.setView(props.activity.start_latlng, parentMap.getZoom());

  const polyline = props.activity.map.summary_polyline;
  const encodedRoute = polyline.split(); // pour convertir en array

  const traceColor = { color: 'red' }

  for (let encoded of encodedRoute) { // mais en fait on ne va en récupérer qu'une !
    var coordinates = polyUtil.decode(encoded);
    return(
      <Polyline
        pathOptions={traceColor}
        positions={coordinates}
      />
    )
  }

  // Auto-centrage et autp-zoom
  const bounds = L.latLngBounds(coordinates);
  parentMap.fitBounds(bounds);

}

export {
  Map
}
