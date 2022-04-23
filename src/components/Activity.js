import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from "react-router-dom"
import { strTime, strDate, strSpeed } from "./functions"
import { MapContainer, TileLayer } from "react-leaflet";

const axios = require('axios').default;

export default function Activity() {

  const [activity, setActivity] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getActivity(id);
  }, []);

  const getActivity = (id) => {
    let url = 'https://letsq.xyz/api/strava/activity?id=' + id;
    axios.get(url)
    .then(
      (response) => { setActivity(response.data) },
      (error) => { console.log("ERREUR de l'API  : " + error) }
    )
  }

  // const displayMap = (activity) => {
  //
  //   const defaultPosition: LatLngExpression = [48, 2];
  //   let encodedRoute = [];
  //   const polyline = activity.map.summary_polyline;
  //   encodedRoute = polyline.split(); // pour convertir en array...
  //
  //   // Ajout de la trace
  //   for (let encoded of encodedRoute) { // mais en fait on ne va en récupérer qu'une !
  //     var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();
  //
  //     // Auto-centrage et autp-zoom
  //     const bounds = L.latLngBounds(coordinates);
  //     map.fitBounds(bounds);
  //
  //
  //   return (
  //       <div className="map__container">
  //         <MapContainer
  //           center={defaultPosition}
  //           zoom={18}
  //         >
  //           <TileLayer
  //             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //           />
  //           <Polyline
  //             coordinates,
  //             {
  //               color: 'red',
  //               weight: 3,
  //               opacity: .7,
  //               lineJoin: 'round'
  //             }
  //             }
  //
  //           </Polyline>
  //         </MapContainer>
  //       </div>
  //     );

  // pour référence, ce qu'on récupère dans Activity : https://developers.strava.com/docs/reference/#api-models-SummaryActivity

  return(
    <Container fluid className='bg-grey text-black text-center'>
      <Row className="fw-light">Id: {activity.id} </Row>
      <Row className="fw-light">Name: {activity.name} </Row>
      <Row className="fw-light">Moving time: {strTime(activity)} </Row>
      <Row className="fw-light">Elevation gain: {activity.total_elevation_gain}m</Row>
      <Row className="fw-light">Start date: {strDate(activity)}</Row>
      <Row className="fw-light">Average speed: {strSpeed(activity)}</Row>
      <Row className="fw-light">Average cadence: {activity.average_cadence ? activity.average_cadence : "N/A"}</Row>
      <Row className="fw-light">Average heartrate: {activity.average_heartrate ? activity.average_heartrate : "N/A"}</Row>
      {/* <Row>map:{displayMap(activity)}</Row> */}
    </Container>
  );

}

///////////////////////
//
//
//   ////// MAP //////
//  )
