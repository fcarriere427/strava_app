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
        console.log("response.data.doc.id = " + response.data.doc.id);
      },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    const items = this.state.activitiesList.map((d) => {
      const val= Object.values(d)[0];
      return (<li>{val.doc.id}</li>);
    }
  }


export default List;
