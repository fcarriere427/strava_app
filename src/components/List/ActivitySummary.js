import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { strTime, strSpeed } from './functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
  render(){
    return(
      <Row>
        <Col xs="2">
          <p>{this.props.data.doc.id}</p>
        </Col>
        <Col xs="2">
          <p>{this.props.data.doc.name}</p>
        </Col>
        <Col xs="2">
          <p>{this.props.data.doc.start_date_local.substring(0,10)}</p>
        </Col>
        <Col xs="2">
          <p>{strTime(this.props.data.doc)}</p>
        </Col>
        <Col xs="2">
          <p>{strSpeed(this.props.data.doc)}</p>
        </Col>
        <Col xs="2">
          <p>{Math.round(this.props.data.doc.distance / 1000 * 100) / 100}km</p>
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  ActivitySummary
}
