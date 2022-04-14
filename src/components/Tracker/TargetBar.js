import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class TargetBar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Row className="bg-light border py-2">
        <Col md="10">
          <TargetRange value={this.props.target} updateHandler={this.props.updateHandler} />
        </Col>
        <Col md="2">
          <TargetReset resetHandler={this.props.resetHandler}/>
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class TargetRange extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <input type="range" min="500" max ="1500" value={this.props.value} onChange={this.props.updateHandler}/>
        <p> Target: {this.props.value} </p>
      </div>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class TargetReset extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <input type="button" value="reset" onClick={this.props.resetHandler}/>
      </div>
    )
  }
}

export {
  TargetBar
}
