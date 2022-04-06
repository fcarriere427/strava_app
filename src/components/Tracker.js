import React, { Component } from 'react';

const axios = require('axios').default;

class Tracker extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    // this.lastActivityDate = "";
    // this.yearDistance = "";
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        this.lastActivityDate = response.data.last_activity_date;
        console.log("this.lastActivityDate = " + this.lastActivityDate);
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
        console.log("this.yearDistance = " + this.yearDistance);
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return (
      <div className="Tracker">
        <p>Tracker</p>
        <h3>Current year: this.yearDistance km</h3>
        <p>Last activity: {this.lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
