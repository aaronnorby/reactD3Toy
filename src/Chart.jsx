var React = require('react');

var d3Chart = require('./d3Chart.jsx');

var Chart = React.createClass({

  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, this.props.appState);
  },
  
  render: function() {
    return (
        <div className="Chart">"hellow world!"</div>
        );
  }
});

module.exports = Chart;
