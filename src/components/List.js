import React, { Component } from 'react';

const axios = require('axios').default;

class List extends Component {
  constructor(props){
    super(props);
    //this.state = {yearDistance: ""};
  }

  componentDidMount(){
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/last_activity';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ lastActivityDate: response.data.last_activity });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return (
      <div className="List">
        <h3>List</h3>
        {/* <h3>Current mileage: {this.state.yearDistance} km</h3>
        <p>Last activity: {this.state.lastActivityDate}</p> */}
      </div>
    );
  }
}

export default List;
