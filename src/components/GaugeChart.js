import React, { Component } from 'react'
import Chart from 'react-gauge-chart'

class GaugeChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let needle = 0.5 + (this.props.delta/100) ; // si delta = 0 --> aiguille à 50% -->
    const chartStyle = {
		    height: 200,
	  }
    if(!needle){ // see issue in react-gauge-graph
      return null
    } else {
      return (
        <div className="Tracker">
          <Chart
            id="tracker-gauge"
            style={chartStyle}
            nrOfLevels={3}
            colors={['#EA4228', '#5BE12C', '#F5CD19']}
            nrOfLevels={420}
            arcsLength={[0.4, 0.2, 0.4]}
            arcWidth={0.5}
            hideText={true}
            percent={needle}
            // formatTextValue={value => value + ' days'}
          />
        </div>
      )
    }
  }
}
export default GaugeChart
