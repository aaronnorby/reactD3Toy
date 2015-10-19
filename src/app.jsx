var React = require('react');
var ReactDOM = require('react-dom');

var Chart = require('./Chart.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      data: [1,2,3]
    };
  },

  render: function() {
    return (
        <Chart 
          appState={this.state} />
        );
  }
});

module.exports = App;
