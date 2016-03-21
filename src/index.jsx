var React = require('react');
import { JsTypeahead } from './js/JsTypeahead'
import { JsnoxTypeahead } from './jsnox/JsnoxTypeahead'
import { JsxTypeahead } from './jsx/JsxTypeahead'
import { HyperscriptTypeahead } from './hyperscript/HyperscriptTypeahead'
var ReactDOM = require('react-dom');

var Container = React.createClass({
  props:{

  },
  render: function(){
    return (
      <div>
        <JsTypeahead inputLabel='Javascript' options={['first','second','third']} inputName='JsTypeahead' ></JsTypeahead>
        <JsnoxTypeahead inputLabel='JSNoX' options={['fourth','fifth','sixth']} inputName='JsnoxTypeahead' ></JsnoxTypeahead>
        <JsxTypeahead inputLabel='JSX' options={['fourth','fifth','sixth']} inputName='JsxTypeahead' ></JsxTypeahead>
        <HyperscriptTypeahead inputLabel='Hyperscript' options={['fourth','fifth','sixth']} inputName='HyperscriptTypeahead' ></HyperscriptTypeahead>
      </div>
    );
  }
});

ReactDOM.render(
  <Container></Container>,
  document.getElementById('react-box')
);