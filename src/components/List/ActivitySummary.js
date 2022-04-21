import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
  render(){
    return(
      <Row key={this.props.data.doc.id}>
        <Col xs="2">
          <p>{this.props.data.doc.id}</p>
        </Col>
        <Col xs="5">
          <p>{this.props.data.doc.start_date_local}</p>
        </Col>
        <Col xs="5">
          <p>{this.props.data.doc.distance}</p>
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  ActivitySummary
}
