import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){

   //  return (
   //  <form onSubmit={this.handleSubmit}>
   //    <label>
   //      Name:
   //      <input type="text" value={this.state.value} onChange={this.handleChange} />
   //    </label>
   //    <input type="submit" value="Submit" />
   //  </form>
   // );

    return(
      <div>
        <input type="range" min="500" max ="1500" value={this.state.value} onChange={this.handleChange}/>
        <p> Target: {this.state.value} </p>
      </div>
    )

  }
}

export default Target
