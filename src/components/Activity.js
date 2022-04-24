import React, { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from "react-router-dom"
import { strTime, strDate, strSpeed } from "./functions"
import { Map } from "./Activity/Map";

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

  // Référence, ce qu'on peut afficher (= récupéré dans Activity) : https://developers.strava.com/docs/reference/#api-models-SummaryActivity

  if(activity.id) {
    return(
      <div>
        <Map activity = {activity}/>
        <Container fluid className='bg-light border text-black'>
          <Row className="fw-light">
            <Col>Id: {activity.id}</Col>
            <Col>Name: {activity.name}</Col>
            <Col>Moving time: {strTime(activity)}</Col>
            <Col>Elevation gain: {activity.total_elevation_gain}m</Col>
          </Row>
          <Row className="fw-light">
            <Col>Start date: {strDate(activity)}</Col>
            <Col>Average speed: {strSpeed(activity)}</Col>
            <Col>Average cadence: {activity.average_cadence ? activity.average_cadence : "N/A"}</Col>
            <Col>Average heartrate: {activity.average_heartrate ? activity.average_heartrate : "N/A"}</Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return(
      <p> Pas d'activité !</p>
    )
  }
}
