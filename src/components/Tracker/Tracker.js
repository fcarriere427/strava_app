import React, { Component } from 'react';

class Tracker extends Component {
  constructor(props){
    super(props);
    this.state = {cumulAnnuel: "123"};
  }

  componentDidMount(){
    const url = "https://letsq.xyz/strava_old/testAPI";
    var headers = {}
    fetch(url, {
      method : "GET",
      mode: 'no-cors', // obsolete !!!???
      headers: headers
    })
    .then(response => response.json())
    .then(
      (result) => {
        console.log("réponse de l'API Test : " + result);
        this.setState({ cumulAnnuel: result });
      },
      (error) => {
        console.log("réponse ERREUR de l'API Test : " + error);
        this.setState({ cumulAnnuel: "???" });
      }
    )
    // .catch(error => {
    //   console.log('erreur fetch testAPI = ' + error.message);
    // })
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
