var React = require('react');
var RadioItemList = require('./RadioItemList.jsx');
var QuestionPrompt = require('./QuestionPrompt.jsx');

var RadioQuestionManager = React.createClass({
  getInitialState: function() {
    return {
      name: "group",
      items: ["one", "two"],
      prompt: "question prompt"
    };
  },

  render: function() {
    return (
      <div>
        <QuestionPrompt text={this.state.prompt} />
        <RadioItemList name={this.state.name} items={this.state.items} />
      </div>
    );
  }
});

module.exports = RadioQuestionManager;
