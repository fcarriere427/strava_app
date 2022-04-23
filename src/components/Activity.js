import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from "react-router-dom"
import { strTime, strDate, strSpeed } from "./functions"

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

  // pour référence, ce qu'on récupère dans Activity : https://developers.strava.com/docs/reference/#api-models-SummaryActivity

  return(
    <Container fluid className='bg-grey text-black text-center'>
      <p>id: {activity.id} </p>
      <p>name: {activity.name} </p>
      <p>moving_time: {strTime(activity.moving_time)} </p>
      <p>total_elevation_gain: {activity.total_elevation_gain}</p>
      <p>start_date_local: {strDate(activity.start_date_local)} </p>
      <p>average_speed: {strSpeed(activity.average_speed)} </p>
      <p>average_cadence: {activity.average_cadence} </p>
      <p>average_heartrate: {activity.average_heartrate} </p>
    </Container>
  );

}

///////////////////////
//
// var encodedRoute = [];
//
//   ////// MAP //////
//   let polyline = data.map.summary_polyline;
//   encodedRoute = polyline.split(); // pour convertir en array...
//   // On centre par défaut sur le bois de Boulogne : 48.86427818167459, 2.245533745325779, avec zoom 13 ?
//   var map = L.map('map').setView([48, 2], 13);
//   L.tileLayer(
//     'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18,
//     }).addTo(map);
//   // Ajout de la trace
//   for (let encoded of encodedRoute) { // mais en fait on ne va en récupérer qu'une !
//     var coordinates = L.Polyline.fromEncoded(encoded).getLatLngs();
//     L.polyline(
//       coordinates,
//       {
//           color: 'red',
//           weight: 3,
//           opacity: .7,
//           lineJoin: 'round'
//       }
//     ).addTo(map);
//   }
//   // Auto-centrage et autp-zoom
//   const bounds = L.latLngBounds(coordinates);
//   map.fitBounds(bounds);
// })
