import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'


///////////////////////////////////////////////////////////////////////////////////////////////
class UpdateButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Button color="primary" onClick={this.props.updateActivities}>
        Update
      </Button>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class ReloadButton extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Button color="danger"  onClick={this.props.reloadActivities}>
        Reload(!)
      </Button>
    )
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        Updated with {this.props.count} activities
      </div>
    )
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////
class UpdateBar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Row className="bg-light text-black border py-2">
        <Col md="4">
          <UpdateButton color="primary" updateActivities={() => this.updateActivities()} />
        </Col>
        <Col md="4">
          <UpdateDisplay count={this.props.count}/>
        </Col>
        <Col md="4">
          <ReloadButton color="danger"  reloadActivities={() => this.reloadActivities()} />
        </Col>
      </Row>
    )
  }
}

export default UpdateBar
