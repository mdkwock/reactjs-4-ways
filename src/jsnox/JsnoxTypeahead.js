var React = require('react');
var d = require('jsnox')(React)
import { Typeahead } from 'react-typeahead'

export const JsnoxTypeahead = React.createClass({displayName: "JsnoxTypeahead",
  props: {
    inputLabel: React.PropTypes.string.isRequired,
    inputName: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function () {
    return( 
      d('div.'+this.props.inputName ,
        d('label', this.props.inputLabel),
        d(Typeahead, {options: this.props.options, maxVisible: 4, name: this.props.inputName})
      )
    );
  }
});