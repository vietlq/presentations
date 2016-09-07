var React = require('react');

/*
26 - iframe (16:9) - (416:234)
27 - iframe (16:9) - (432:243)
67 - slides (16:9) - (1072:603)
*/

var PageBody = React.createClass({
    render: function() {
        return (
            <div className="page-body-container">
                <div className="col-sm-12 col-lg-10 col-lg-offset-1">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-12 col-lg-10 slides-holder">
                                <iframe id="slides-frame" allowFullScreen frameBorder="0"
                                    height="100%" width="100%"
                                    src="https://www.youtube.com/embed/-GnebGxHee4"></iframe>
                            </div>
                            <div className="col-sm-12 col-lg-2">
                                <iframe id="video-live-stream" allowFullScreen frameBorder="0"
                                    height="243" width="432"
                                    src="https://www.youtube.com/embed/-GnebGxHee4"></iframe>
                            </div>
                            <br/>
                            <div className="col-sm-12">
                                <iframe allowFullScreen frameBorder="0"
                                    height="400" width="100%"
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
