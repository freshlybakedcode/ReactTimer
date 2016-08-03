var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className = "row">
        <div className = "small-centered medium-6 large-4 columns">
          <h1 className="text-center">React timer</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
