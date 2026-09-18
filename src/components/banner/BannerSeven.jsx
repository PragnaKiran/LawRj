"use client";
import Link from 'next/link';

import React, { useState , useEffect }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ModalVideo from 'react-modal-video';

function BannerSeven() {
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
        <div className="tmp-banner-swiper-one-area construction-2">
            <div className="swiper mySwiper-banner-one-construction">
            <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                    className="banner-style-five"
                    speed={500}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    effect='fade'
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1200: { slidesPerView: 1 },
                        900: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        580: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    >
                    <SwiperSlide>
                        <div className="tmp-banner-area bg_image-1 bg_image banner-one-height-control construction-2 tmp-section-gap">
                            <div className="shape-image-banner-one">
                            <img
                                src="assets/images/banner/shape/01.png"
                                alt="banner"
                                className="one"
                            />
                            <img
                                src="assets/images/banner/shape/02.png"
                                alt="banner"
                                className="two"
                            />
                            <img
                                src="assets/images/banner/shape/03.png"
                                alt="banner"
                                className="three"
                            />
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="banner-one-main-wrapper">
                                    <div className="inner">
                                    <span className="sub-title">
                                        Business Consulting Agency
                                    </span>
                                    <h1 className="title">
                                        Transforming Ideas into Structures
                                    </h1>
                                    <p className="disc">
                                        We help small startups grow from idea to millions of
                                        users. we can also <br />
                                        automate your marketing and customer service.
                                    </p>
                                    <div className="button-area-banner-one">
                                        <Link href={'/Service'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                        {/* video icon */}
                                        <div className="vedio-icone">
                                        <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                            <span />
                                            <p className="text">Play Video</p>
                                        </Link>
                                        </div>
                                        {/* video icon */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tmp-banner-area bg_image-2 bg_image banner-one-height-control construction-2 tmp-section-gap">
                            <div className="shape-image-banner-one">
                            <img
                                src="assets/images/banner/shape/01.png"
                                alt="banner"
                                className="one"
                            />
                            <img
                                src="assets/images/banner/shape/02.png"
                                alt="banner"
                                className="two"
                            />
                            <img
                                src="assets/images/banner/shape/03.png"
                                alt="banner"
                                className="three"
                            />
                            </div>
                            <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                <div className="banner-one-main-wrapper">
                                    <div className="inner">
                                    <span className="sub-title">
                                        Business Consulting Agency
                                    </span>
                                    <h1 className="title">Redefining Urban Landscapes</h1>
                                    <p className="disc">
                                        We help small startups grow from idea to millions of
                                        users. we can also <br />
                                        automate your marketing and customer service.
                                    </p>
                                    <div className="button-area-banner-one">
                                        <Link href={'/Service'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                        {/* video icon */}
                                        <div className="vedio-icone">
                                        <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                            <span />
                                            <p className="text">Play Video</p>
                                        </Link>
                                        </div>
                                        {/* video icon */}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="tmp-banner-area bg_image-3 bg_image banner-one-height-control construction-2 tmp-section-gap">
                        <div className="shape-image-banner-one">
                        <img
                            src="assets/images/banner/shape/01.png"
                            alt="banner"
                            className="one"
                        />
                        <img
                            src="assets/images/banner/shape/02.png"
                            alt="banner"
                            className="two"
                        />
                        <img
                            src="assets/images/banner/shape/03.png"
                            alt="banner"
                            className="three"
                        />
                        </div>
                        <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="banner-one-main-wrapper">
                                <div className="inner">
                                <span className="sub-title">
                                    Business Consulting Agency
                                </span>
                                <h1 className="title">From Concept to Construction</h1>
                                <p className="disc">
                                    We help small startups grow from idea to millions of
                                    users. we can also <br />
                                    automate your marketing and customer service.
                                </p>
                                <div className="button-area-banner-one">
                                        <Link href={'/Service'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                        {/* video icon */}
                                        <div className="vedio-icone">
                                        <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                            <span />
                                            <p className="text">Play Video</p>
                                        </Link>
                                        </div>
                                        {/* video icon */}
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </div>
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

export default BannerSeven