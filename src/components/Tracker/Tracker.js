import React, { Component } from 'react';

const axios = require('axios').default;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {lastActivityDate: ""};
    this.state = {yearDistance: ""};
  }

  componentDidMount(){

    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate: response.data });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

    // Récupération du cumul de l'année
    let year = '2022';
    url = 'https://letsq.xyz/strava/year_distance?year=' + year;
    axios.get(url)
    .then(
      (response) => {
        this.setState({ yearDistance: response.data });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )

  }

  render() {
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
        <h3>Current mileage: {this.state.cumulAnnuel} km</h3>
        <p>Last activity: {this.state.lastActivityDate}</p>
      </div>
    );
  }
}

export default Tracker;
