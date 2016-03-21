var h = require('react-hyperscript');
var React = require('react');
import { Typeahead } from 'react-typeahead'
 
export const HyperscriptTypeahead = React.createClass({
  props: {
    inputLabel: React.PropTypes.string.isRequired,
    inputName: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function render() {
    return (
      h('div.'+this.props.inputName, [
        h('label', this.props.inputLabel),
        h(Typeahead, {options: this.props.options, maxVisible: 4, name: this.props.inputName})
      ])
    );
  }
});