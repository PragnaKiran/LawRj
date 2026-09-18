"use client"; 
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function PortfolioFour() {
  return (
    <div>
        
        {/* tmp product area start */}
        <div className="tmp-product-area">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title center-title">
                    <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                    />
                    <span className="subtitle">OUR PORTFOLIO</span>
                    </div>
                    <h2 className="title split-collab">Let Check Our Best Works </h2>
                </div>
                </div>
            </div>
            </div>
            <div className="container-full">
            <div className="row">
                <div className="col-lg-12">
                {/* product swiper area start */}
                <div className="product-swiper-area-one">
                  <Swiper
                          // install Swiper modules
                          modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                          className="mySwiper-portfolio-1"
                          speed={500}
                          slidesPerView={5}
                          spaceBetween={30}
                          loop={true}
                          centeredSlides={true}
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
                              1200: { slidesPerView: 5 },
                              900: { slidesPerView: 3 },
                              768: { slidesPerView: 3 },
                              580: { slidesPerView: 2 },
                              450: { slidesPerView: 1 },
                              0: { slidesPerView: 1 },
                          }}
                      >
                      <SwiperSlide>
                          <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="signle-product-start"
                          data-tmp-cursor="lg text-secondary transparent fw-bold"
                          data-tmp-cursor-icon="fa-solid fa-arrow-up-right"
                        >
                          <Link href={'/ProjectDetails'} className="thumbnail">
                            <img
                              src="assets/images/portfolio/portfolio-1.png"
                              alt="corporate_business"
                            />
                          </Link>
                          <div className="inner-content">
                            <Link href={'/ProjectDetails'}>
                              <h5 className="title">Corporate Design</h5>
                            </Link>
                            <span className="designation">Financial advisory</span>
                            <div className="tag" />
                          </div>
                        </div>
                      </SwiperSlide>
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                  </Swiper>
                  
                  <div className="swiper-pagination"></div>
                </div>
                {/* product swiper area end */}
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default PortfolioFour