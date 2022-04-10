import React, { Component } from 'react'
import { Container } from 'reactstrap'
import GaugeChart from './Gauge'
import { LastActivityDate, Averages, Distances, Deltas } from './Stats'
import daysInYear from '../../utils/functions'

const axios = require('axios').default;
const init_target = 1000;

class Tracker extends Component {

  constructor(props){
    super(props);
    // use state to store variables that will be modified (by "target" moficiation for instance)
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
    // récupération de l'input
    const newTarget = evt.target.value;
    // calculs
    // mise à jour de state
    this.setState({
      target: newTarget,
    });
  }

  resetTarget(evt) {
    // récupération de l'input
    const newTarget = init_target;
    // calculs
    // mise à jour de state
    this.setState({
      target: newTarget,
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
        <input type="range" min="500" max ="1500" value={this.state.target} onChange={evt => this.updateTarget(evt)}/>
        <p> Target: {this.state.target} </p>
        <input type="button" value="reset" onClick={evt => this.resetTarget(evt)}/>
      </Container>
    );
  }
}

export default Tracker;
