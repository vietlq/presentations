var React = require('react');
var ReactDOM = require('react-dom');

var Base = require('./components/Base.jsx');

var social = {
    twitter: 'code2pro',
    facebook: 'Code2Pro',
};

var headerDetails = {
    title: 'Code2Pro',
    subtitle: 'Dream Tech Career Within Your Reach',
    social: social
}

ReactDOM.render(<Base headerDetails={headerDetails} />,
    document.getElementById('main-page-container'));
