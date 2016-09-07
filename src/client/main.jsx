var React = require('react');
var ReactDOM = require('react-dom');

var Base = require('../components/Base.jsx');

var social = {
    twitter: 'vietlq',
    facebook: 'vietlq85',
    instagram: 'vietlq',
};

var headerDetails = {
    title: 'VietExpat News',
    subtitle: 'Top News for Vietnamese Expats',
    social: social
}

ReactDOM.render(<Base headerDetails={headerDetails} />,
    document.getElementById('main-page-container'));
