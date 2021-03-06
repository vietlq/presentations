var React = require('react');
var Header = require('./Header.jsx')
var PageBody = require('./PageBody.jsx')

var Base = React.createClass({
    render: function() {
        let headerDetails = this.props.headerDetails || {};

        return (
            <div className="page-base-outer-container">
                <div className="page-base-header-bg"></div>
                <div className="page-base-main">
                    <div className="container">
                        <Header headerDetails={headerDetails} />
                    </div>
                    <div className="container-fluid">
                        <PageBody />
                    </div>
                </div>
                <div className="page-base-footer">
                </div>
            </div>
        );
    }
});

module.exports = Base;
