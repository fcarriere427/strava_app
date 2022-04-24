import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'

function Map(props) {
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
      <RunTrace activity={props.activity} />
    </MapContainer>
  );
}

function RunTrace(props) {
  const parentMap = useMap();
  parentMap.setView(props.activity.start_latlng, parentMap.getZoom());

  const polyline = props.activity.map.summary_polyline;
  const traceColor = { color: 'red' }

  return(
    <Polyline
      pathOptions={traceColor}
      positions={polyline}
    />
  )
}

export {
  Map
}
