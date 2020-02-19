var ReactDOM = require('react-dom');
var React = require('react');
var Head = require('./head.jsx');
var Body = require('./body.jsx');

ReactDOM.render(<Head/>,document.getElementById('head'));
ReactDOM.render(<Body/>,document.getElementById('body'));
