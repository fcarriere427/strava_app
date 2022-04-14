import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'


///////////////////////////////////////////////////////////////////////////////////////////////
class TargetBar extends Component {
  render(){
    return(
      <Container fluid className='text-black text-center'>
        <Row className="py-2">
          <TargetRange value={this.props.target} updateHandler={this.props.updateHandler} />
        </Row>
        <Row className="py-2">
          <TargetReset resetHandler={this.props.resetHandler}/>
        </Row>
      </Container>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class TargetRange extends Component {
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
