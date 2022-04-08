import React, { Component } from 'react';
import GaugeChart from './GaugeChart'
import daysInYear from '../utils/functions'

const axios = require('axios').default;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = { lastActivityDate: "?" };
    this.state = { yearDistance: "0" };
    this.state = { targetToDate: "0" };
    this.state = { deltaKm: "0" };
    this.state = { deltaDays: "0" };
    this.state = { newAvg: "0" };
  }

  componentDidMount(){
    // Target : TO DO = à passer en state ??
    let tgt = 1000;
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate: response.data.last_activity_date });
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
        this.setState({ yearDistance: response.data[year] });
        // delta
        let delta_km = Math.round((this.state.yearDistance - target_date)*10)/10;
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

  render() {
    return (
      <div className="Tracker">
        <h2>Delta: {this.state.deltaKm} km</h2>
        <p>({this.state.deltaDays} days)</p>
        <GaugeChart delta = {this.state.deltaKm} />
        <h3>New avg/week: {this.state.newAvg} km</h3>
        <p>New avg/day: {Math.floor(this.state.newAvg/7*10)/10} km</p>
        <p>Current year: {this.state.yearDistance} km</p>
        <p>Target: {this.state.targetToDate} km</p>
        <p>Last activity: {this.state.lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
