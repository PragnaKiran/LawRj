"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import ModalVideo from 'react-modal-video';


function LargeVideo() {
    const [isOpen, setIsOpen] = useState(false);
    const videoLink = 'https://www.youtube.com/watch?v=bFgREmqH5kI'; // Define the video link here
    const [videoId, setVideoId] = useState(null);
    useEffect(() => {
        // Extract the video ID from the video link
        if (videoLink) {
            const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
            const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
            setVideoId(id);
        }
    }, [videoLink]);
    // Console log to debug
    console.log('Video ID:', videoId);

  return (
    <div>
        


        <>
            {/* Start faq area  */}
            <div className="faq-area faq-style-two faq-bg-image-2 bg_image tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="faq-inner">
                        <div className="faq-content">
                        {/* video icon */}
                        <div className="vedio-icone">
                            <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                <span />
                            </Link>
                        </div>
                        {/* video icon */}
                        <div className="title">Get solutions for Business</div>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End faq area  */}
            {/* faq area start */}
            <div className="tmp-faq-area-three">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-faq">
                            <div className="shape-image">
                            <img src="assets/images/faq/03.png" alt="business_faq" />
                            </div>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                    <img src="assets/images/faq/faq-img-2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-7 pl--50 pl_sm--15">
                                    
                                    <div className="faq-accordion faq-accordion-style-two">
                                        <Accordion defaultActiveKey="0">
                                            <div className="section-head text-align-left mb--30">
                                                <span className="subtitle color-gradiant">QUESTIONS &amp; ANSWERS</span>
                                                <h2 className="title split-collab">Frequency asked questions?</h2>
                                            </div>

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>Why is collaborative learning so important</span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                        </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>Do you offer free trials</span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <div className="accordion-button-left">
                                                        <i className="fa-regular fa-question" />
                                                        <span>
                                                            Can I share my courses with non-registered users
                                                        </span>
                                                        </div>
                                                        <div className="accordion-button-right">
                                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                                    </div>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                        Companions shy had solicitude favorable own. Which could saw
                                                        guest man now heard but. Lasted my coming uneasy marked so
                                                        should. Gravity letters it amongst herself dearest an
                                                        windows by. Wooded ladies she.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* faq area end */}
            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>

    </div>
  )
}

export default LargeVideo