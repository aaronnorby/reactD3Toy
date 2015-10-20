var React = require('react');
var d3 = require('d3');


var MyCircle = React.createClass({
  

  render: function() {
    
    var circleMaker = function(i) {
      return {x: i*20 + 20, y: i*20 + 20};
    };

    return (
        <circle cx={circleMaker(this.props.index).x} cy={circleMaker(this.props.index).y}
          r="9" style={{"fill": "red"}}>
        </circle>
    );
  }
});

var Chart = React.createClass({

  getInitialState: function() {
    var height = 500;
    var width = 500;  
    return {
      svgHeight: height,
      svgWidth: width,
      data: this.props.appState.data
    }
  },

  drawCircles: function() {

    var circles = this.state.data.map(function(datum, idx) {
      return (<MyCircle datum={datum} index={idx} key={idx} />);
    });

    return circles;
  },


  render: function() {
    return (
      <div>
        <div><h1>!!!</h1></div>
        <svg 
          width={this.state.width}
          height={this.state.height}>
            <g>
            {this.drawCircles()}
            </g>
        </svg> 
      </div>
    )
  }



});

module.exports = Chart;
