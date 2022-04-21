import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
  render(){
    return(
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
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  ActivitySummary
}
