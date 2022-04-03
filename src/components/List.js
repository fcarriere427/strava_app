import React, { Component } from 'react';

const axios = require('axios').default;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesList: []
    };
  }

  componentDidMount(){
    // Récupération de la date de la dernière activité (format lisible, en local time)
    let url = 'https://letsq.xyz/strava/activities_list';
    axios.get(url)
    .then(
      (response) => {
        this.setState({ activitiesList: response.data });
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return (
      <div className="List">
        <p>List
        {this.state.activitiesList.map((activity, id) => (
          <Item key={id} item={activity} />
        )}
        </p>
        {/* <h3>Current mileage: {this.state.yearDistance} km</h3> */}
      </div>
    );
  }
}

export default List;
