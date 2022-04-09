import React, { Component } from 'react';
import GaugeChart from './Gauge'
import daysInYear from '../utils/functions'

const axios = require('axios').default;

class Tracker extends Component {

  constructor(props){
    super(props);
    // local variables (that won't be modified)
    let lastActivityDate = "";
    let yearDistance = "0";
    // use state to store variables that will be modified (by "target" moficiation for instance)
    this.state = {
       target: "1000",
       targetToDate: "0",
       deltaKm: "0",
       deltaDays: "0",
       newAvg: "0"
     };
    // calculs locaux pour initier
    let today = new Date();
    let year = today.getFullYear().toString();
    let start = new Date(today.getFullYear(), 0, 0);
    let diff = today - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let percentOfYear = day / daysInYear(year);
    let target_date = Math.round(percentOfYear * this.state.target*10)/10;

  }

  componentDidMount(){
    // target à date
    this.setState({ targetToDate: target_date });

    // Récupération du cumul de l'année
    url = 'https://letsq.xyz/strava/year_distances';
    let today = new Date();
    let year = today.getFullYear().toString();
    axios.get(url)
    .then(
      (response) => {
        this.yearDistance = response.data[year];
        // delta
        let delta_km = Math.round((this.yearDistance - target_date)*10)/10;
        let delta_days = Math.round(delta_km / tgt * daysInYear(year)*10)/10;
        // new_avg_week
        let new_avg_week = Math.round((this.state.target - delta_km) / daysInYear(year) * 7 * 10)/10;
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
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.lastActivityDate = response.data.last_activity_date;
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

  }

  // Actions quand on modifie la cible
  updateTarget(evt) {
    const newTarget = evt.target.value;
    target_date = Math.round(percentOfYear * newTarget *10)/10;
    delta_km = Math.round((this.yearDistance - target_date)*10)/10;
    delta_days = Math.round(delta_km / tgt * daysInYear(year)*10)/10;
    new_avg_week = Math.round((newTarget - delta_km) / daysInYear(year) * 7 * 10)/10;

    this.setState({
      target: newTarget,
      targetToDate: target_date,
      deltaKm: delta_km,
      deltaDays: delta_days,
      newAvg: new_avg_week
    });
  }

  render() {
    return (
      <div className="Tracker">
        <input value={this.state.target} onChange={evt => this.updateTarget(evt)}/>
        <div className="Graph">
          <GaugeChart value = {this.state.deltaKm} />
        </div>
        <p>Delta: ({this.state.deltaDays} days)</p>
        <hr />
        <p>New avg/week: {this.state.newAvg} km</p>
        <p>New avg/day: {Math.floor(this.state.newAvg/7*10)/10} km</p>
        <hr />
        <p>Current year: {this.yearDistance} km</p>
        <p>Target to date: {this.state.targetToDate} km</p>
        <p>Target (EoY) : {this.state.target} km</p>
        <hr />
        <p>Last activity: {this.lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
