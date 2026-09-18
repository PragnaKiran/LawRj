"use client"; 
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';


function BannerFive() {
  return (
    <div>
        

        {/* start startup banner swiper main wrapper */}
        <div className="startup-banner-swiper-wrapper">
            <div className="swiper swiper-startup-banner">

            <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="swiper-startup-banner"
                        speed={500}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
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
                         {/* tmp banner area start */}
                        <div className="tmp-banner-area banner-style-five tmp-section-gap banner-bg-startup bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Startup Your <br /> Business Agency
                                    </h1>
                                    <p className="disc">
                                    Network with potential clients, attend industry events,
                                    and leverage your existing connections to generate leads
                                    and acquire clients.
                                    </p>
                                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                                    Get Started Now
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* tmp banner area end */}
                    </SwiperSlide>
                    <SwiperSlide>
                         {/* tmp banner area start */}
                         <div className="tmp-banner-area banner-style-five tmp-section-gap banner-bg-startup bg-two bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Startup Your <br /> Business Agency
                                    </h1>
                                    <p className="disc">
                                    Network with potential clients, attend industry events,
                                    and leverage your existing connections to generate leads
                                    and acquire clients.
                                    </p>
                                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                                    Get Started Now
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* tmp banner area end */}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* tmp banner area start */}
                        <div className="tmp-banner-area banner-style-five tmp-section-gap banner-bg-startup bg-three bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Startup Your <br /> Business Agency
                                    </h1>
                                    <p className="disc">
                                    Network with potential clients, attend industry events,
                                    and leverage your existing connections to generate leads
                                    and acquire clients.
                                    </p>
                                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                                    Get Started Now
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* tmp banner area end */}
                    </SwiperSlide>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </div>


    </div>
  )
}

export default BannerFive