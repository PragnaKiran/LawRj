"use client"; 
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';




function TestimonialsFour() {
  return (
    <div>
        

        {/* Start Testimonial with brand  */}
        <div className="testimonial-with-brand">
            {/* Start Testimonial Area  */}
            <div className="testimonial-brand-area">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="testimonials-button-area">
                    <div className="section-head text-align-left">
                        <div className="section-sub-title">
                        <img
                            src="assets/images/services/section-custom-menubar.png "
                            alt="Corporate_service"
                        />
                        <span className="subtitle">Client’s Testimonials</span>
                        </div>
                        <h2 className="title split-collab">
                        What People Say About <br /> Our Company
                        </h2>
                    </div>
                    <div className="button-next-prev">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    {/* Slider main container */}
                    <div className="swiper-style-one">
                    <div className="swiper-container-style-two">
                        {/* Additional required wrapper */}
                        <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="mySwiper-portfolio-1"
                                        speed={500}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 5500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        breakpoints={{
                                            1200: { slidesPerView: 2 },
                                            900: { slidesPerView: 2 },
                                            768: { slidesPerView: 2 },
                                            580: { slidesPerView: 1 },
                                            450: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                        >
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
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
                                                <p className="description">
                                                    Its incredible. its really wonderful. company has
                                                    completely surpassed our expect. Urna porttitor
                                                    rhoncus dolor purus non enim praesent at the
                                                    facilisis lectus. Adipiscing tristique risus.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Clade Owen</div>
                                                    <div className="designation">CEO &amp; Founder</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-1.jpg"
                                                    alt="testimonial"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
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
                                                <p className="description">
                                                    Its incredible. its really wonderful. company has
                                                    completely surpassed our expect. Urna porttitor
                                                    rhoncus dolor purus non enim praesent at the
                                                    facilisis lectus. Adipiscing tristique risus.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Nicolas Alvin</div>
                                                    <div className="designation">Web Developer</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-2.jpg"
                                                    alt="testimonial"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
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
                                                <p className="description">
                                                    Its incredible. its really wonderful. company has
                                                    completely surpassed our expect. Urna porttitor
                                                    rhoncus dolor purus non enim praesent at the
                                                    facilisis lectus. Adipiscing tristique risus.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Nicolas Alvin</div>
                                                    <div className="designation">Web Developer</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-1.jpg"
                                                    alt="testimonial"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div> */}
                        </Swiper>
                        {/* If we need navigation buttons */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* End Testimonial Area  */}
            {/* End Brand Area  */}
        </div>
        {/* End Testimonial with brand  */}



    </div>
  )
}

export default TestimonialsFour