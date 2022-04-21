import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { ActivitySummary } from './List/ActivitySummary'

const axios = require('axios').default;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesList: [],
      year:"0"
    };
  }

  componentDidMount(){
    // pour l'instant, on fixe l'année à celle en cours, ensuite il faudra en faire un "state"
    let today = new Date();
    let current_year = today.getFullYear();
    console.log(current_year);
    console.log(typeof(current_year));
    let bis_current_year = current_year.toString();
    console.log(bis_current_year);
    console.log(typeof(bis_current_year));
    this.setState({ year: 2022 });
    console.log(this.state.year);
    // Récupération des activités
    let url = 'https://letsq.xyz/api/strava/activities_list?year=' + this.state.year;
    axios.get(url)
    .then(
      (response) => {
        this.setState({ activitiesList: response.data });
        console.log(this.state.activitiesList);
      },
      (error) => { console.log("ERREUR de l'API  : " + error) }
    )
  }

  render() {
    return(
      <Container fluid className='bg-grey text-black text-center'>
        {/* <Row>
          <p> Year: {this.state.year}</p>
        </Row> */}
        {this.state.activitiesList.map((d, index) =>
          <ActivitySummary data={d} index={index} />)
        }
      </Container>
    );
  }
}

export default List;
