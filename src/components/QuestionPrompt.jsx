var React = require('react');

var QuestionPrompt = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.text}
      </p>
    );
  }
});

module.exports = QuestionPrompt;
