var React = require('react');
import { Typeahead } from 'react-typeahead'

export const JsTypeahead = React.createClass({displayName: "JsTypeahead",
  props: {
    inputLabel: React.PropTypes.string.isRequired,
    inputName: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function () {
    return (
      React.createElement('div', {className: this.props.inputName},
        [
          React.createElement('label', {},this.props.inputLabel),
          React.createElement(Typeahead, {options: this.props.options, maxVisible: 4, name: this.props.inputName})
        ]
      )
    );
  }
});