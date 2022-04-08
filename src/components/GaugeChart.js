import React, { Component } from 'react'
import Chart from 'react-gauge-chart'

class GaugeChart extends Component {
  
  render() {
    let needle = 0.5 + (this.props.delta/100/2) ; // delta = -100 -> 0 //  delta = 0 -> 0.5 // delta = 100 -> 1
    const chartStyle = {
		    height: 200,
	  }
    if(!needle){ // see issue in react-gauge-graph
      return null
    } else {
      return (
        <div className="Graph">
          <Chart
            id="tracker-gauge"
            style={chartStyle}
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
