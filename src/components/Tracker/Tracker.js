import React, { Component } from 'react';

const axios = require('axios').default;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {cumulAnnuel: ""};
    this.state = {lastActivityDate: ""};
  }

  componentDidMount(){

    // API test
    let url = 'https://letsq.xyz/strava/testAPI';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ cumulAnnuel: response.data.cumulAnnuel });
      },
      (error) => {
        console.log("réponse ERREUR de l'API Test : " + error);
      }
    )

    // Récupération de la date de la dernière activité (format lisible, en local time)
    url = 'https://letsq.xyz/strava/last_activity';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate: response.data });
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
