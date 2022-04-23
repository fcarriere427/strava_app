import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { strTime, strSpeed } from './functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {

  componentDidMount(){
    let newDate = new Date(this.props.data.doc.start_date_local);
    let date_str = newDate.toLocaleDateString('fr-FR') + ' at ' + newDate.toLocaleTimeString('fr-FR');
    this.props.final = date_str.substring(0, date_str.length - 3); // on enlève les secondes
  }

  render(){
    return(
      <Container className="bg-light text-black border py-2">
        <Row>
          <Col className="fw-light" xs="2">
            <p>
              <a href="https://www.letsq.xyz/api/strava/activity?id=+`{this.props.data.doc.id}`" rel="noreferrer">
                {this.props.data.doc.start_date_local.substring(0,10)}
              </a>
            </p>
          </Col>
          <Col  className="fw-bold" xs="3">
            <p>{Math.round(this.props.data.doc.distance / 1000 * 100) / 100}km</p>
          </Col>
          <Col xs="3">
            <p>{strTime(this.props.data.doc)}</p>
          </Col>
          <Col xs="3">
            <p>{strSpeed(this.props.data.doc)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <p></p>
          </Col>
          <Col xs="5">
            <p>{this.props.data.doc.name}</p>
          </Col>
          <Col className="fw-bold" xs="5">
            <p>
              {this.props.final}
            </p>
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
