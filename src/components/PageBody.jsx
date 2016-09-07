var React = require('react');

var PageBody = React.createClass({
    render: function() {
        return (
            <div className="page-body-container">
                <div className="col-sm-12">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-7">
                            </div>
                            <div className="col-sm-5">
                                <iframe className="live-stream" allowFullScreen frameBorder="0"
                                    height="234" width="416"
                                    src="https://www.youtube.com/embed/-GnebGxHee4"></iframe>
                                <br/>
                                <iframe allowFullScreen frameBorder="0"
                                    height="234" width="416"
                                    src="https://www.youtube.com/live_chat?v=gtj6Yc4MWxU&embed_domain=vietlq.github.io"></iframe>
                                <div id="disqus_thread"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PageBody;
