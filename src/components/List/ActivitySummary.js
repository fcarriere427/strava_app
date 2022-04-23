import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { strTime, strSpeed } from './functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {

  render(){

    let newDate = new Date(this.props.data.doc.start_date_local);
    let date_str = newDate.toLocaleDateString('fr-FR') + ' at ' + newDate.toLocaleTimeString('fr-FR');
    let final = date_str.substring(0, date_str.length - 3); // on enlève les secondes
    console.log("final = " + final);

    return(
      <Container className="bg-light text-black border py-2">

        <Row>
          <Col className="fw-light" xs="3">
            <p>
              <a href="https://www.letsq.xyz/api/strava/activity?id=+`{this.props.data.doc.id}`" rel="noreferrer">
                {/* {this.props.data.doc.start_date_local.substring(0,10)} */}
                {this.final}
              </a>
            </p>
          </Col>
          <Col  className="fw-bold" xs="4">
            <p>{Math.round(this.props.data.doc.distance / 1000 * 100) / 100}km</p>
          </Col>
          <Col xs="5">
            <p>{strTime(this.props.data.doc)}</p>
          </Col>

        </Row>

        <Row>
          <Col xs="3">
            <p></p>
          </Col>
          <Col xs="4">
            <p>{strSpeed(this.props.data.doc)}</p>
          </Col>
          <Col xs="5">
            <p>{this.props.data.doc.name}</p>
          </Col>

        </Row>

      </Container>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  ActivitySummary
}
