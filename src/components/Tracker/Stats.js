import React, { Component } from 'react'
import targetToDate from './functions'
import daysInYear from '../../utils/functions'

const axios = require('axios').default;

///////////////////////////////////////////////////////////////////////////////////////////////
class Deltas extends Component {
  render() {
    let target_date = targetToDate (this.props.target);
    let delta_km = Math.round((this.props.current - target_date)*10)/10;
    let year = new Date().getFullYear().toString();
    let delta_days = Math.round(delta_km / this.props.target * daysInYear(year)*10)/10;
    return (
      <div>
        <p>Delta in km: {delta_km} km</p>
        <p>Delta in days: {delta_km} days)</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Distances extends Component {
  render() {
    let target_date = targetToDate (this.props.target);
    return (
      <div>
        <p>Current year: {this.props.current} km</p>
        <p>Target to date: {target_date} km</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Averages extends Component {
  render() {
    let target_date = targetToDate (this.props.target);
    let delta_km = Math.round((this.props.current - target_date)*10)/10;
    let year = new Date().getFullYear().toString();
    let new_avg_week = Math.round((this.props.target - delta_km) / daysInYear(year) * 7 * 10)/10;
    let new_avg_day = Math.floor(new_avg_week/7*10)/10;
    return (
      <div>
        <p>New avg/week: {new_avg_week} km</p>
        <p>New avg/day: {new_avg_day} km</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class LastActivityDate extends Component {
  constructor(props){
    super(props);
    this.state = { lastActivityDate: "" };
  }
  componentDidMount(){
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate : response.data.last_activity_date });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }
  render() {
    return (
      <p>Last activity: {this.state.lastActivityDate}</p>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  LastActivityDate,
  Averages,
  Distances,
  Deltas
}