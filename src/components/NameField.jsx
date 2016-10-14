var React = require('react');

var NameField = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },

  onChange: function(e) {
    var val = e.target.value;
    this.setState({value: val});
  },

  render: function() {
      return (
        <input
        className="form-control"
        placeholder={this.props.type + " Name"}
        onChange={this.onChange}
        value={this.state.value} />
      );
  }
});

module.exports = NameField;
