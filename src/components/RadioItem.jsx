var React = require('react');

var RadioItem = React.createClass({
  render: function() {

    return (
      <div>
        <input type="radio" name={this.props.name} value={this.props.value} /> {this.props.value}
      </div>
    );
  }
});

module.exports = RadioItem;
