"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

function AboutFour() {

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

        {/* Tpm About Area Start  */}
        <div className="about-area tmp-section-gapBottom about-style-one">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="about-thumbnails">
                    <div className="thumbnail">
                    <img data-aos="move-left" data-aos-delay="100" src="assets/images/about/01.png" alt="corporate_business" />
                    <div className="image-two" data-aos="move-right" data-aos-delay="100">
                        <img
                        src="assets/images/about/03.png"
                        alt="corporate_business"
                        />
                    </div>
                    <div className="image-three" data-aos="move-right" data-aos-delay="100">
                        <img
                        className=""
                        src="assets/images/about/02.png"
                        alt="corporate_business"
                        />
                    </div>
                    <div className="square" />
                    <div className="flower">
                        <img
                        src="assets/images/about/flower.png"
                        alt="Corporate_Business"
                        />
                    </div>
                    <div className="product-share">
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
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/4.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/5.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/6.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        <a
                            href="#"
                            className="avatar"
                            data-tooltip="Mark JOrdan"
                            tabIndex={0}
                        >
                            <img
                            src="assets/images/about/7.png"
                            alt="Business_Corporate"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                    {/* video icon */}
                    <div className="vedio-icone">
                        <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                            <span />
                        </Link>
                    </div>
                    {/* video icon */}
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-inner">
                    <div className="section-head text-align-left section-head-one-side">
                    <div className="section-sub-title" data-aos="fade-up" data-aos-delay="100">
                        <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                        />
                        <span className="subtitle">ABOUT US</span>
                    </div>
                    <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                        Find out more about our <br /> business consulting
                    </h2>
                    </div>
                    <p
                    className="description" data-aos="fade-up" data-aos-delay="400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                    sed, consequat tellus. Quisque ac odio eget ligula gravida
                    efficitur. Nunc facilisis sagittis magna, non venenatis mauris
                    luctus quis.
                    </p>
                    {/* Prograss bar Start  */}
                    <div
                    className="single-progress-area progress-stye-one" data-aos="fade-up" data-aos-delay="600">
                    <div className="progress-top">
                        <p className="name">Consulting Service</p>
                        <span className="parcent">85%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        />
                    </div>
                    </div>
                    <div
                    className="single-progress-area progress-stye-one" data-aos="fade-up" data-aos-delay="700">
                    <div className="progress-top">
                        <p className="name">Finance Consulting</p>
                        <span className="parcent">66%</span>
                    </div>
                    <div className="progress">
                        <div
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        />
                    </div>
                    </div>
                    {/* Prograss bar End  */}
                    <div
                    className="thumbnail-with-title" data-aos="fade-up" data-aos-delay="800">
                    <div className="thumbnail">
                        <img src="assets/images/about/about-with-icon.png" alt="" />
                        <div className="icon">
                        <i className="fa-regular fa-dollar-sign" />
                        </div>
                    </div>
                    <div className="title">
                        Helping you run a more efficient &amp; profitable business.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/*Tpm About Area End  */}
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

export default AboutFour