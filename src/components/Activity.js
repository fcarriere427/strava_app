import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from "react-router-dom"
import { strTime, strDate, strSpeed } from "./functions"
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";

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

  const Map = (activity) => {
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

  // Référence, ce qu'on peut afficher (= récupéré dans Activity) : https://developers.strava.com/docs/reference/#api-models-SummaryActivity
  return(
    <Map />

    // <Container fluid className='bg-light border text-black'>
    //   <Row className="fw-light">Id: {activity.id} </Row>
    //   <Row className="fw-light">Name: {activity.name} </Row>
    //   <Row className="fw-light">Moving time: {strTime(activity)} </Row>
    //   <Row className="fw-light">Elevation gain: {activity.total_elevation_gain}m</Row>
    //   <Row className="fw-light">Start date: {strDate(activity)}</Row>
    //   <Row className="fw-light">Average speed: {strSpeed(activity)}</Row>
    //   <Row className="fw-light">Average cadence: {activity.average_cadence ? activity.average_cadence : "N/A"}</Row>
    //   <Row className="fw-light">Average heartrate: {activity.average_heartrate ? activity.average_heartrate : "N/A"}</Row>
    //   {/* <Row className="fw-light">Map:{displayMap(activity)}</Row> */}
    // </Container>
  );

}

///////////////////////
//
//
//   ////// MAP //////
//  )
