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

        <Row className="bg-light border">
          <Col className="my-auto" md="6">
            <GaugeChart current={this.state.yearDistance} target={this.state.target}/>
          </Col>
          <Col className="my-auto" md="6">
            <Target value={this.state.target} updateHandler={(evt) => this.updateTarget(evt)} resetHandler={(evt) => this.resetTarget()}/>
          </Col>
        </Row>

        <Row className="bg-light border">
          <Col className="my-auto" md="4">
            <Distances current={this.state.yearDistance} target={this.state.target} />
          </Col>
          <Col className="my-auto" md="4">
            <Deltas current={this.state.yearDistance} target={this.state.target} />
          </Col>
          <Col className="my-auto" md="4">
            <Averages current={this.state.yearDistance} target={this.state.target} />
          </Col>
        </Row>

        <Row className="bg-light border">
          <Col className="my-auto" md="12">
            <LastActivityDate />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Tracker;
