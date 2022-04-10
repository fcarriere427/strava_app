import React, { Component } from 'react'
import { Container } from 'reactstrap'
import GaugeChart from './Gauge'
import daysInYear from '../../utils/functions'

const axios = require('axios').default;

class Tracker extends Component {

  constructor(props){
    super(props);
    const init_target = 1000;
    // calculs locaux pour initier
    this.today = new Date();
    this.year = this.today.getFullYear().toString();
    this.start = new Date(this.today.getFullYear(), 0, 0);
    this.diff = this.today - this.start;
    this.day = Math.floor(this.diff / (1000 * 60 * 60 * 24)); // calcul = secondes dans 1 jour
    this.percentOfYear = this.day / daysInYear(this.year);
    this.target_date = Math.round(this.percentOfYear * init_target*10)/10; // used for init only, after it's in the state

    // use state to store variables that will be modified (by "target" moficiation for instance)
    this.state = {
       target: init_target,
       targetToDate: this.target_date,
       deltaKm: "0",
       deltaDays: "0",
       newAvg: "0",
       //  won't be modified, but needed in state because async calls... if not in state : not correctly rendered when APi answers
       lastActivityDate: "",
       yearDistance: "0"
     };
   }

  componentDidMount(){
    // Récupération du cumul de l'année
    let url = 'https://letsq.xyz/strava/year_distances';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ yearDistance : response.data[this.year] });
        // calculs
        let delta_km = Math.round((this.state.yearDistance - this.target_date)*10)/10;
        let delta_days = Math.round(delta_km / this.state.target * daysInYear(this.year)*10)/10;
        let new_avg_week = Math.round((this.state.target - delta_km) / daysInYear(this.year) * 7 * 10)/10;
        // update state
        this.setState({ deltaKm: delta_km });
        this.setState({ deltaDays: delta_days });
        this.setState({ newAvg: new_avg_week });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url2 = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url2)
    .then(
      (response) => {
        this.setState({ lastActivityDate : response.data.last_activity_date });
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
    this.target_date = Math.round(this.percentOfYear * newTarget *10)/10;
    let delta_km = Math.round((this.state.yearDistance - this.target_date)*10)/10;
    let delta_days = Math.round(delta_km / newTarget * daysInYear(this.year)*10)/10;
    let new_avg_week = Math.round((newTarget - delta_km) / daysInYear(this.year) * 7 * 10)/10;
    // mise à jour de state
    this.setState({
      target: newTarget,
      targetToDate: this.target_date,
      deltaKm: delta_km,
      deltaDays: delta_days,
      newAvg: new_avg_week
    });
  }

  restetTarget(evt) {
    // récupération de l'input
    const newTarget = init_target;
    // calculs
    this.target_date = Math.round(this.percentOfYear * newTarget *10)/10;
    let delta_km = Math.round((this.state.yearDistance - this.target_date)*10)/10;
    let delta_days = Math.round(delta_km / newTarget * daysInYear(this.year)*10)/10;
    let new_avg_week = Math.round((newTarget - delta_km) / daysInYear(this.year) * 7 * 10)/10;
    // mise à jour de state
    this.setState({
      target: newTarget,
      targetToDate: this.target_date,
      deltaKm: delta_km,
      deltaDays: delta_days,
      newAvg: new_avg_week
    });
  }

  render() {
    return (
      <Container fluid className='bg-grey text-black text-center'>
        <div className="Graph">
          <GaugeChart value = {this.state.deltaKm} />
        </div>
        <p>({this.state.deltaDays} days)</p>
        <hr />
        <p>New avg/week: {this.state.newAvg} km</p>
        <p>New avg/day: {Math.floor(this.state.newAvg/7*10)/10} km</p>
        <hr />
        <p>Current year: {this.state.yearDistance} km</p>
        <p>Target to date: {this.state.targetToDate} km</p>
        <hr />
        <p>Last activity: {this.state.lastActivityDate}</p>
        <hr />
        <input type="range" min="500" max ="1500" value={this.state.target} onChange={evt => this.updateTarget(evt)}/>
        <p> Target: {this.state.target} </p>
        <input type="button" value="reset" onChange={evt => this.resetTarget(evt)}/>

      </Container>
    );
  }
}

export default Tracker;
