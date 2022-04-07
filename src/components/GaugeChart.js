import React, { Component } from 'react'
import Chart from 'react-gauge-chart'

class GaugeChart extends Component {
  constructor(props) {
    super(props);
    console.log("props = " + props.value);
  }

  componentDidMount() {
    //console.log("props.value = " + {this.props.value});
    let value = this.props.value;
    console.log("value = " + value);
  }

  render() {
    const chartStyle = {
        height: 250,
    };
    return (
      <div className="Tracker">
        <Chart
          id="tracker-gauge"
          style={chartStyle}
          nrOfLevels={30}
          colors={['#5BE12C', '#F5CD19', '#EA4228']}
          arcWidth={0.3}
          percent={this.props.value}
          formatTextValue={value => value + ' days'}
        />
      </div>
    )
  }
}
export default GaugeChart
