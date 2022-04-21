import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { ActivitySummary } from './List/ActivitySummary'

const axios = require('axios').default;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesList: [],
      currentYear:"2020"
    };
  }

  componentDidMount(){
    // pour l'instant, on fixe l'année à celle en cours, ensuite il faudra en faire un "state"
    let today = new Date();
    let current_year = today.getFullYear();
    this.setState({ currentYear: current_year }, () => {
      getActivities(this.state.currentYear)
    })
  }

  // Actions quand on modifie la cible
  updateYear(evt) {
    this.setState({ currentYear: evt.target.value }, () => {
      getActivities(this.state.currentYear)
    })
  }

  // Récupération des activités pour l'année donnée
  getActivities(year) {
    let url = 'https://letsq.xyz/api/strava/activities_list?year=' + year;
    axios.get(url)
    .then(
      (response) => { this.setState({ activitiesList: response.data }) },
      (error) => { console.log("ERREUR de l'API  : " + error) }
    )
  }

  render() {
    return(
      <Container fluid className='bg-grey text-black text-center'>
        <Row className="py-2">
          <SelectYear currentYear={this.state.currentYear} updateHandler={(evt) => this.updateYear(evt)} />
        </Row>
        {this.state.activitiesList.map((d, index) =>
          <ActivitySummary data={d} key={index} />)
        }
      </Container>
    );
  }
}

export default List;
