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
       target: "0",
       targetToDate: "0",
       deltaKm: "0",
       deltaDays: "0",
       newAvg: "0"
     };
  }

  componentDidMount(){
    // Target : TO DO = à passer en state ??

    let tgt = 1000;
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.lastActivityDate = response.data.last_activity_date;
        // this.setState({ lastActivityDate: response.data.last_activity_date });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

    // Récupération du cumul de l'année
    let today = new Date();
    let year = today.getFullYear().toString();
    url = 'https://letsq.xyz/strava/year_distances';
    axios.get(url)
    .then(
      (response) => {
        this.yearDistance = response.data[year];
        // delta
        let delta_km = Math.round((this.yearDistance - target_date)*10)/10;
        let delta_days = Math.round(delta_km / tgt * daysInYear(year)*10)/10;
        // new_avg_week
        let new_avg_week = Math.round((tgt - delta_km) / daysInYear(year) * 7 * 10)/10;
        // update state
        this.setState({ deltaKm: delta_km });
        this.setState({ deltaDays: delta_days });
        this.setState({ newAvg: new_avg_week });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

    // target à date
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    let target_date = Math.round(day / daysInYear(year) * tgt*10)/10;
    this.setState({ targetToDate: target_date });

  }

  updateTarget(evt) {
    const val = evt.target.value;
    this.setState({
      target: val
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
        <p>Target: {this.state.targetToDate} km</p>
        <hr />
        <p>Last activity: {this.lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
