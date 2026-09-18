"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
function BannerTwo() {
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
            

                <div className="banner-area banner-style-two bg_image tmp-section-gapTop">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
                        <div className="banner-inner">
                            <div
                            className="sub-title" data-aos="move-right" data-aos-delay="100"
                            style={{ display: "block" }}>
                            Financial Consulting Agency
                            </div>
                            <h2 className="title split-collab" data-aos="move-right" data-aos-delay="300">
                            Prosper in this <br /> volatile market <br /> founding.
                            </h2>
                            <p
                            className="description" data-aos="move-right" data-aos-delay="500">
                            We help small startups grow from idea to millions of users. we can
                            also automate your marketing and customer service.
                            </p>
                            <div
                            className="banner-bottom" data-aos="fade-up" data-aos-delay="100"
                            style={{ gap: 30 }}>
                            <Link href={'/Contact'} className="tmp-btn btn-secondary">
                                Get Started Now
                            </Link>

                              {/* video icon */}
                              <div className="vedio-icone">
                                    <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                        <span style={{ borderLeftColor: "var(--color-secondary)" }} />
                                        <p className="text" style={{ color: "black" }}>Play Video</p>
                                    </Link>
                                </div>
                                {/* video icon */}
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2  order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
                        <div className="banner-two-thumbnail">
                            <div className="thumbnail">
                            <Image width={495} height={854} data-aos="move-left" data-aos-delay="100" src="/assets/images/banner/banner-two-2.png" alt="Business_Corporate" className="wow slideInRight"/>
                            <div className="product-share product-share-style-two">
                                <div className="rating">
                                <div className="number">4.8</div>
                                <div className="stars-group">
                                    <div className="star">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star-half-stroke" />
                                    </div>
                                </div>
                                </div>
                                <div className="profile-share">
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <Image width={40} height={40} src="/assets/images/about/4.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <Image width={40} height={40} src="/assets/images/about/5.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <Image width={40} height={40} src="/assets/images/about/6.png" alt="education" />
                                </Link>
                                <Link
                                    href="#"
                                    className="avatar"
                                    data-tooltip="Mark JOrdan"
                                    tabIndex={0}
                                >
                                    <Image width={40} height={40} src="/assets/images/about/7.png" alt="education" />
                                </Link>
                                </div>
                            </div>
                            <div className="banner-tag">
                                <div className="inner">
                                <div className="icon bg-color-secondary radius-circle mr--20">
                                    <i className="fa-regular fa-check" />
                                </div>
                                <div className="content">
                                    <h3 className="title">
                                    Save up to 50% in
                                    <br />
                                    Yearly plan.
                                    </h3>
                                    <Link className="btn-learn-more" href="#">
                                    Learn More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-circle">
                    <Image width={1070} height={1070} src="/assets/images/banner/banner-circle.png" alt="banner" />
                    </div>
                    <div className="bg-dolour">
                    <Image width={257} height={153} src="/assets/images/banner/banner-dolour.png" alt="banner" />
                    </div>
                    <div className="bg-blue-circle">
                    <Image width={252} height={245} src="/assets/images/banner/blue-circle.png" alt="banner" />
                    </div>
                    <div className="bg-curly-lines">
                    <Image width={1189} height={581} src="/assets/images/banner/curly-lines.png" alt="banner" />
                    </div>
                </div>
                {/* End banner area  */}
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

export default BannerTwo