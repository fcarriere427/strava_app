import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { GaugeChart } from './Tracker/Gauge'
import { StatsBar } from './Tracker/StatsBar'
import { TargetBlock } from './Tracker/TargetBlock'
import { UpdateBar } from './Tracker/UpdateBar'

import axios from 'axios';
//OLD = const axios = require('axios').default;

const init_target = 1200;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {
       target: init_target,
       yearDistance: "0"
     };
   }

  componentDidMount(){
    this.updateYearDistance();
  }

  // Mise à jour du cumul de l'année
  updateYearDistance() {
    let url = '/api/strava/year_distances';
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
        <Row>
          <Col xs="6">
            <GaugeChart current={this.state.yearDistance} target={this.state.target}/>
          </Col>
          <Col xs="6">
            <TargetBlock value={this.state.target} updateHandler={(evt) => this.updateTarget(evt)} resetHandler={(evt) => this.resetTarget()} />
          </Col>
        </Row>

        <Row>
          <StatsBar current={this.state.yearDistance} target={this.state.target} />
        </Row>

        <Row>
          <UpdateBar onChange={() => this.updateYearDistance()} />
        </Row>

      </Container>
    );
  }
}

export default Tracker;
