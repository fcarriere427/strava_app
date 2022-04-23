import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { strTime, strSpeed } from './functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
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
              {Date(this.props.data.doc.start_date_local).toLocaleTimeString('fr-FR').substring(0, date_str.length - 3)}
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
