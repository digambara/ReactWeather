var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });
// Refactoring : Stateless Functional Components
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Ongole'>Ongole, India</Link>
        </li>
        <li>
          <Link to='/?location=Richmond'>Richmond, KY</Link>
        </li>
      </ol>
    </div>

  )
};

module.exports = Examples;
