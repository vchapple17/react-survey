var React = require('react');
var EmailValidator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function() {
    return {
      valid: true, value: ""
    }
  },

  onChange: function(e) {
    var val = e.target.value;

    if (!EmailValidator.validate(val)) {
      this.setState({valid: false, value: val});
    } else {
      this.setState({valid: true, value: val});
    }
  },

  render: function() {
    var formClass = this.state.valid ? "form-group" : "form-group has-error"
    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value}/>
      </div>
    );
  }
});

module.exports = EmailField;
