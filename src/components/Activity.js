import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from "react-router-dom"
import { strTime, strTimeElapsed, strDate, strSpeed, strSpeedMax } from "./functions"
import { Map } from "./Activity/Map";

const axios = require('axios').default;

export default function Activity() {

  const [activity, setActivity] = useState("");
  const { id } = useParams();

  // useEffect(() => {
  //   getActivity(id);
  // }, []);

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

          <Row className="bg-dark text-white">
            <Col className="border">Distance: {Math.round(activity.distance / 1000 * 100) / 100}km</Col>
            <Col className="border">Moving time: {strTime(activity)}</Col>
            <Col className="border">Average speed: {strSpeed(activity)}</Col>
          </Row>

          <Row className="fw-light">
            <Col className="border">Id: {activity.id}</Col>
            <Col className="border">Name: {activity.name}</Col>
            <Col className="border">Start date: {strDate(activity)}</Col>
          </Row>


          <Row className="fw-light bg-white text-black">
            <Col className="border">Elevation gain: {activity.total_elevation_gain}m</Col>
            <Col className="border">Max elevation: {activity.elev_high}m</Col>
            <Col className="border">Min elevation: {activity.elev_low}m</Col>
          </Row>

          <Row className="fw-light bg-white text-black">
            <Col className="border">Elapsed time: {strTimeElapsed(activity)}</Col>
            <Col className="border">Max speed: {strSpeedMax(activity)}</Col>
            <Col className="border">Average cadence: {activity.average_cadence ? activity.average_cadence : "N/A"}</Col>
            <Col className="border">Average heartrate: {activity.average_heartrate ? activity.average_heartrate : "N/A"}</Col>
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
