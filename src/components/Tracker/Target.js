import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){

    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
   );

    // return(
    //   <div>
    //     <input type="range" min="500" max ="1500" value={this.props.value} onChange={evt => this.props.handler}/>
    //     <p> Target: {this.props.value} </p>
    //   </div>
    // )

  }
}

export default Target
