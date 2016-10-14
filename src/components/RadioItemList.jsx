var React = require('react');
var RadioItem = require('./RadioItem.jsx');

var RadioItemList = React.createClass({
  render: function() {
    var name = this.props.name;
    var createRadioItem = function(item, index) {
      return (
        <RadioItem key={index + item} name={name} value={item} />
      );
    };

    return (
      <div>
        {this.props.items.map(createRadioItem)}
      </div>
    );
  }
});

module.exports = RadioItemList;
