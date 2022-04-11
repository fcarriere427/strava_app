import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GaugeChart from './Gauge'
import { LastActivityDate, Averages, Distances, Deltas } from './Stats'
import Target from './Target'

const axios = require('axios').default;

const init_target = 1000;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {
       target: init_target,
       yearDistance: "0"
     };
   }

  componentDidMount(){
    // Récupération du cumul de l'année
    let url = 'https://letsq.xyz/strava/year_distances';
    let year = new Date().getFullYear().toString();
    axios.get(url)
    .then(
      (response) => {
        this.setState({ yearDistance : response.data[year] });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  // Actions quand on modifie la cible
  updateTarget(evt) {
    this.setState({
      target: evt.target.value
    });
  }

  resetTarget() {
    this.setState({
      target: init_target
    });
  }

  render() {
    return (
      <Container fluid className='bg-grey text-black text-center'>
        <Row md="4">
          <Col className="bg-light border">
            <GaugeChart current={this.state.yearDistance} target={this.state.target}/>
            <hr />
          </Col>
          <Col className="bg-light border">
            <Target value={this.state.target} updateHandler={(evt) => this.updateTarget(evt)} resetHandler={(evt) => this.resetTarget()}/>
            <hr />
          </Col>
        </Row>

        <Row md="4">
          <Col className="bg-light border">
            <Deltas current={this.state.yearDistance} target={this.state.target} />
            <hr />
          </Col>
          <Col className="bg-light border">
            <Averages current={this.state.yearDistance} target={this.state.target} />
            <hr />
          </Col>
          <Col className="bg-light border">
            <Distances current={this.state.yearDistance} target={this.state.target} />
            <hr />
          </Col>
          <Col className="bg-light border">
            <LastActivityDate />
            <hr />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Tracker;
