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
    // pour l'instant, on fixe l'année, ensuite il faudra en faire un "state"
    let today = new Date();
    let year = today.getFullYear();
    // Récupération des activités
    let url = 'https://letsq.xyz/strava/activities_list?year=' + year;
    axios.get(url)
    .then(
      (response) => {
        this.setState({ activitiesList: response.data });
        console.log("response.data[6430353430] = " + response.data[6430353430]);
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return (
      <p> coucou </p>
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
