import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { strTime, strDate, strSpeed } from "./functions"
import { Map } from "./Activity/Map";

const axios = require('axios').default;

class Activity extends Component {

  constructor(props){
    super(props);
    this.state = {
       activity: ""
     };
   }

  componentDidMount(){
    this.getActivity();
  }

  // Mise à jour du cumul de l'année
  getActivity() {

    console.log("this.props = " + this.props);

    const { id } = this.props.match.params;
    console.log("id = " + id);

    let url = 'https://letsq.xyz/api/strava/activity?id=' + id;
    console.log("url = " + url);

    axios.get(url)
    .then(
      (response) => {
        this.setState({ activity : response.data });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {

    return (
      <p>ID = {this.state.activity.id}</p>
      // <Map activity = {this.state.activity}/>
      // Référence, ce qu'on peut afficher (= récupéré dans Activity) : https://developers.strava.com/docs/reference/#api-models-SummaryActivity
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
}

export default Activity;
