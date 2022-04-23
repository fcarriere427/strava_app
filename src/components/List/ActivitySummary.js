import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { strTime, strSpeed } from './functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
  render(){
    return(
      <Container className="bg-light text-black border py-2">
        <Row>
          <Col xs="4">
            <p>{this.props.data.doc.start_date_local.substring(0,10)}</p>
          </Col>
          <Col xs="4">
            <p>{Math.round(this.props.data.doc.distance / 1000 * 100) / 100}km</p>
          </Col>
          <Col xs="4">
            <p>{strTime(this.props.data.doc)}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <p>{strSpeed(this.props.data.doc)}</p>
          </Col>
          <Col xs="4">
            <p>{this.props.data.doc.id}</p>
          </Col>
          <Col xs="4">
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
