import React, { Component } from 'react'

const axios = require('axios').default;

class DeltaInDays extends Component {
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

export {
  DeltaInDays,

}
