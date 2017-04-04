var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function () {
//       var {temp,location} = this.props;
//     return (
//       <h4>It's {temp} in {location}.</h4>
//     )
//   }
// });
// Refactoring : Stateless Functional Components
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
