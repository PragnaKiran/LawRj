"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

function BannerFour() {
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
        
        {/* tmp banner area start */}
        <div className="tmp-section-gap tmp-banner__agency-wrapper-bg position-relative bg_image">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="banner-inner-content-four">
                    <div className="inner-content-banner-four">
                    {/* video icon */}
                    <div className="vedio-icone" data-aos="fade-right" data-aos-delay="100">
                        <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                            <span />
                            <p className="text">Play Video</p>
                        </Link>
                    </div>
                    {/* video icon */}
                    <div className="content-wrapper">
                        <h1 className="title" data-aos="move-left" data-aos-delay="300">
                        We Design &amp; Build <br /> <span> Powerfull Website</span>{" "}
                        </h1>
                        <p className="disc" data-aos="move-left" data-aos-delay="500">
                        Design Better Website With Bizper HTML Template
                        </p>
                        <div className="button-area-banner-one" data-aos="move-left" data-aos-delay="700">
                        <Link href={'/Service'} className="tmp-btn btn-primary">
                            <i className="fa-light fa-users" /> Get In Touch With Us
                        </Link>
                        {/* video icon */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="tmp-ocean">
            <div className="ocean">
                <div className="wave" />
                <div className="wave" />
            </div>
            </div>
        </div>
        {/* tmp banner area end */}
        {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
    </div>
  )
}

export default BannerFour