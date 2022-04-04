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
        console.log("response.data = " + response.data);
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return (
      // <React.Fragment>
      //   {this.state.activitiesList.map((id, activity) => (
      //     <React.Fragment key={id.id}>
      //       <p>{activity.id}</p>
      //       <p>{activity.distance}</p>
      //       {/* <p>{item.url}</p>
      //       <p>{item.description}</p> */}
      //     </React.Fragment>
      //   ))}
      // </React.Fragment>
    );
  }
}

export default List;
