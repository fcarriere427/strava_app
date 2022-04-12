import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import GaugeChart from './Gauge'
import { LastActivityDate, Averages, Distances, Deltas } from './Stats'
import { Target, TargetReset } from './Target'
import { UpdateButton, ReloadButton, UpdateDisplay } from './UpdateComponents'


const axios = require('axios').default;

const init_target = 1000;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {
       target: init_target,
       yearDistance: "0",
       count: "0"
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

  // Actions pour les boutons "update" & "reload"
  updateActivities() {
    console.log("on va lancer updateActivities");
    let url = 'https://letsq.xyz/strava/update';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ count : response.data });
        console.log(this.state.count + " activité(s) récupérée(s) !");
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
    // /strava/update
  }

  reloadActivities() {
    console.log("on va lancer reloadActivities : TO DO !!!")
    // path: "/strava/reload",
  }

  render() {
    return (
      <Container fluid className='bg-grey text-black text-center'>

        <Row className="bg-light py-2">
          <Col className="my-auto" md="12">
            <GaugeChart current={this.state.yearDistance} target={this.state.target}/>
          </Col>
        </Row>

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

        <Row className="bg-light border py-2">
          <Col md="10">
            <Target value={this.state.target} updateHandler={(evt) => this.updateTarget(evt)} />
          </Col>
          <Col md="2">
            <TargetReset resetHandler={(evt) => this.resetTarget()} />
          </Col>
        </Row>

        <Row className="bg-secondary text-white border py-2">
          <Col md="12">
            <LastActivityDate />
          </Col>
        </Row>

        <Row className="bg-light text-black border py-2">
          <Col md="4">
            <UpdateButton color="primary" updateActivities={() => this.updateActivities()} />
          </Col>
          <Col md="4">
            <UpdateDisplay count={this.state.count}/>
          </Col>
          <Col md="4">
            <ReloadButton color="danger"  reloadActivities={() => this.reloadActivities()} />
          </Col>
        </Row>


      </Container>
    );
  }
}

export default Tracker;
