var d3 = require('d3');

var simpleChart = {};

simpleChart.create = function(el, state) {
  var svg = d3.select(el)
    .append('svg')
    .attr('height', 500)
    .attr('width', 500);

  svg.selectAll('circle')
    .data(state.data)
    .enter()
    .append('svg:circle')
    .attr('cx', function(d, i) {return i*20;})
    .attr('cy', function(d, i) {return i*20;})
    .attr('r', 9)
    .attr('fill', 'red');

};

module.exports = simpleChart;
