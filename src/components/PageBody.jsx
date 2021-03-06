var React = require('react');

/*
26 - iframe (16:9) - (416:234)
27 - iframe (16:9) - (432:243)
67 - slides (16:9) - (1072:603)
*/

var PageBody = React.createClass({
    render: function() {
        var tail = Math.floor(Math.random() * 987654321);
        console.log(tail);
        var slidesUrl = "./slides.html?" + tail;
        //var slidesUrl = "./deck.html?" + tail;

        return (
            <div className="page-body-container">
                <div className="col-sm-12 col-lg-10 col-lg-offset-1">
                    <div className="well">
                        <div className="row">
                            <div className="col-sm-12 col-lg-9">
                                <div className="slides-holder">
                                    <div className="dummy"></div>
                                    <iframe id="slides-frame" allowFullScreen frameBorder="0"
                                        src={slidesUrl}></iframe>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <div className="video-holder">
                                    <div className="dummy"></div>
                                    <iframe id="video-live-stream" allowFullScreen frameBorder="0"
                                        src="https://www.youtube.com/embed/p5CDzM2hVSs"></iframe>
                                </div>
                            </div>
                            <br/>
                            <div className="col-sm-12">
                                <iframe allowFullScreen frameBorder="0"
                                    height="400" width="100%"
                                    src="https://www.youtube.com/live_chat?v=p5CDzM2hVSs&embed_domain=vietlq.github.io"></iframe>
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
