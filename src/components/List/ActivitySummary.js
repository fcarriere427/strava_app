import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

///////////////////////////////////////////////////////////////////////////////////////////////
class ActivitySummary extends Component {
  render(){
    return(
      <Row className="bg-secondary text-white py-2">
        <Col xs="4">
          <Distances current={this.props.current} target={this.props.target} />
        </Col>
        <Col xs="4">
          <Gaps current={this.props.current} target={this.props.target} />
        </Col>
        <Col xs="4">
          <Averages current={this.props.current} target={this.props.target} />
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
export {
  ActivitySummary
}
