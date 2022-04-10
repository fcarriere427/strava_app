import React, { Component } from 'react'
import { Container } from 'reactstrap'
import GaugeChart from './Gauge'
import { LastActivityDate, Averages, Distances, Deltas } from './Stats'
import Target from './Target'

const axios = require('axios').default;

const init_target = 1000;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {
       target: "1000",
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
        <hr />
        <Deltas current={this.state.yearDistance} target={this.state.target} />
        <hr />
        <Averages current={this.state.yearDistance} target={this.state.target} />
        <hr />
        <Distances current={this.state.yearDistance} target={this.state.target} />
        <hr />
        <LastActivityDate />
        <hr />
        <Target value="1000" handler={(evt) => this.updateTarget(evt)}/>
        <input type="button" value="reset" onClick={() => this.resetTarget()}/>
      </Container>
    );
  }
}

export default Tracker;
