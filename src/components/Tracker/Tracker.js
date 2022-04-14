import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import GaugeChart from './Gauge'
import { Averages, Distances, Deltas } from './Stats'
import { TargetBar } from './TargetBar'
import { UpdateBar } from './UpdateBar'

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
        
        <GaugeChart current={this.state.yearDistance} target={this.state.target}/>

        <Row className="bg-secondary text-white py-2">
          <Col className="my-auto border" md="4">
            <Distances current={this.state.yearDistance} target={this.state.target} />
          </Col>
          <Col className="my-auto border" md="4">
            <Deltas current={this.state.yearDistance} target={this.state.target} />
          </Col>
          <Col className="my-auto border" md="4">
            <Averages current={this.state.yearDistance} target={this.state.target} />
          </Col>
        </Row>

        <TargetBar value={this.state.target} updateHandler={(evt) => this.updateTarget(evt)} resetHandler={(evt) => this.resetTarget()} />

        <UpdateBar />

      </Container>
    );
  }
}

export default Tracker;
