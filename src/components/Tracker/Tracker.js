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
        console.log("réponse de l'API Test : " + response.data.cumulAnnuel);
        this.setState({ cumulAnnuel: response.data.cumulAnnuel });
      },
      (error) => {
        console.log("réponse ERREUR de l'API Test : " + error);
        this.setState({ cumulAnnuel: "???" });
      }
    )

    // API test
    url = 'https://letsq.xyz/strava/last_activity';
    axios.get(url)
    .then(
      (response) => {
        console.log("réponse de l'API : " + response.data);
        this.setState({ lastActivityDate: response.data });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
        this.setState({ lastActivityDate: "???" });
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
