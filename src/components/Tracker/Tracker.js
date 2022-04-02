import React, { Component } from 'react';

const axios = require('axios').default;

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {cumulAnnuel: "123"};
  }

  componentDidMount(){
    const url = 'https://letsq.xyz/strava_old/testAPI';
    axios.get(url)
    .then(
      (response) => {
        console.log("réponse de l'API Test : " + response.data.toString());
        this.setState({ cumulAnnuel: response.date });
      },
      (error) => {
        console.log("réponse ERREUR de l'API Test : " + error);
        this.setState({ cumulAnnuel: "???" });
      }
    )
    .catch(error => {
      console.log('erreur fetch testAPI = ' + error.message);
    })
  }

  render() {
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
        <h3>Current mileage: {this.state.cumulAnnuel} km</h3>
      </div>
    );
  }
}

export default Tracker;
