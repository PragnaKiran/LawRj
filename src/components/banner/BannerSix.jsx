"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';




function BannerSix() {
  return (
    <div>
        

        {/* start startup banner swiper main wrapper */}
        <div className="startup-banner-swiper-wrapper construction-banner-top-wrapper">
            <div className="swiper swiper-startup-banner-construction">
            <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                    className="banner-style-five"
                    speed={800}
                    slidesPerView={1}
                    effect='fade'
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
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Shaping Your <br /> Future Landscape
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
                            <div className="shape-image">
                            <img src="assets/images/banner/shape/04.png" alt="shape" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg-two bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Designing Your <br /> Ideal Environment
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
                            <div className="shape-image">
                            <img src="assets/images/banner/shape/04.png" alt="shape" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg-three bg_image">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="banner-startup-main-content-wrapper">
                                        <h1 className="title">
                                        Making Your <br /> Future Buildings
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
                                <div className="shape-image">
                                <img src="assets/images/banner/shape/04.png" alt="shape" />
                                </div>
                        </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>

            </div>
        </div>
        {/* start startup banner swiper main wrapper end */}


    </div>
  )
}

export default BannerSix