import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'


const axios = require('axios').default;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesList: []
    };
  }

  componentDidMount(){
    // pour l'instant, on fixe l'année à celle en cours, ensuite il faudra en faire un "state"
    let today = new Date();
    let year = today.getFullYear();
    // Récupération des activités
    let url = 'https://letsq.xyz/api/strava/activities_list?year=' + year;
    axios.get(url)
    .then(
      (response) => { this.setState({ activitiesList: response.data }) },
      (error) => {
        console.log("ERREUR de l'API  : " + error);
      }
    )
  }

  render() {
    return(
      <Container fluid className='bg-grey text-black text-center'>
        {this.state.activitiesList.map((d, index) => (
          <Row key={index}>
            <Col xs="2">
              <p>{d.doc.id}</p>
            </Col>
            <Col xs="5">
              <p>{d.doc.start_date_local}</p>
            </Col>
            <Col xs="5">
              <p>{d.doc.distance}</p>
            </Col>
          </Row>
        ))}
      </Container>
    );
  }
}

// (<p key={index}>id: {d.doc.id}, date: {d.doc.start_date_local}, distance: {d.doc.distance}</p>)


export default List;
