import React, { Component } from 'react';

const axios = require('axios').default;

class Tracker extends Component {

  let lastActivityDate = "";
  let yearDistance = "";

  constructor(props){
    super(props);
  }

  componentDidMount(){
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity_date';
    axios.get(url)
    .then(
      (response) => {
        lastActivityDate = response.data.last_activity_date;
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
        yearDistance = response.data[year];
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
        <h3>Current year: {yearDistance} km</h3>
        <p>Last activity: {lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
