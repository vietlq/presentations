var React = require('react');
var ReactDOM = require('react-dom');

var Base = require('./components/Base.jsx');

var social = {
    twitter: 'code2pro',
    facebook: 'Code2Pro',
};

var headerDetails = {
    title: 'Code2Pro',
    subtitle: 'Train Developers for Top Tech Jobs',
    social: social
}

ReactDOM.render(<Base headerDetails={headerDetails} />,
    document.getElementById('main-page-container'));
