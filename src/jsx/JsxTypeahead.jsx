var React = require('react');
var Typeahead = require('react-typeahead').Typeahead;

export const JsxTypeahead = React.createClass({
  props:{
    inputLabel: React.PropTypes.string.isRequired,
    inputName: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },
  render: function(){
    return (
      <div className={this.props.inputName}>
        <label>{this.props.inputLabel}</label>
        <Typeahead options={this.props.options} maxVisible={4} name={this.props.inputName} />
      </div>
    )
  }
});