var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
  onSubmit: function(e) {


// 9min Section 4 Lecture 41: Forms part 2


  },

  render: function() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <NameField type="First" ref="fieldFirstName"/>
            <NameField type="Last" ref="fieldLastName"/>
            <EmailField ref="fieldEmail" />
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LeadCapture;
