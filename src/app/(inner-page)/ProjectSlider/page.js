"use client"
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


function page() {
  return (
    <div className="service-details">
        <HeaderInner/>
        <Breadcrumb title="Project Slider" activeItem="Project Slider" />
         

                   {/* recent project areas tart */}
                   <div className="recent-project-area tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="section-head">
                        <div className="section-sub-title center-title">
                        <img
                            src="assets/images/services/section-custom-menubar.png "
                            alt="Corporate_service"
                        />
                        <span className="subtitle">Recent Blog</span>
                        </div>
                        <h2 className="title split-collab">Our Latest Project</h2>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="recent-project-area-wrapper-swiper">
                            {/* Additional required wrapper */}
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                                className="mySwiper-recent-product ptb--30"
                                speed={500}
                                slidesPerView={3}
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
                                    1200: { slidesPerView: 3 },
                                    900: { slidesPerView: 2 },
                                    768: { slidesPerView: 2 },
                                    580: { slidesPerView: 1 },
                                    450: { slidesPerView: 1 },
                                    0: { slidesPerView: 1 },
                                }}
                                >
                                <SwiperSlide>
                                    <div className="tmp-single-portfolio-item">
                <Link href={'/ProjectDetails'} className="thumbnail">
                <img
                    src="assets/images/product/05.jpg"
                    alt="personal_portfolio"
                />
                </Link>
                <div className="tmp-inner-content">
                <div className="top-item">
                    <span className="left">Mobile App Design</span>
                    <span className="left">25 likes</span>
                </div>
                <Link href={'/ProjectDetails'}>
                    <h2 className="title">
                    Mobile App Design UI/UX <br />
                    In Figma
                    </h2>
                </Link>
                </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="tmp-single-portfolio-item">
                <Link href={'/ProjectDetails'} className="thumbnail">
                <img
                    src="assets/images/product/06.jpg"
                    alt="personal_portfolio"
                />
                </Link>
                <div className="tmp-inner-content">
                <div className="top-item">
                    <span className="left">Mobile App Design</span>
                    <span className="left">25 likes</span>
                </div>
                <Link href={'/ProjectDetails'}>
                    <h2 className="title">
                    Mobile App Design UI/UX <br />
                    In Figma
                    </h2>
                </Link>
                </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tmp-single-portfolio-item">
                <Link href={'/ProjectDetails'} className="thumbnail">
                <img
                    src="assets/images/product/07.jpg"
                    alt="personal_portfolio"
                />
                </Link>
                <div className="tmp-inner-content">
                <div className="top-item">
                    <span className="left">Mobile App Design</span>
                    <span className="left">25 likes</span>
                </div>
                <Link href={'/ProjectDetails'}>
                    <h2 className="title">
                    Mobile App Design UI/UX <br />
                    In Figma
                    </h2>
                </Link>
                </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tmp-single-portfolio-item">
            <Link href={'/ProjectDetails'} className="thumbnail">
            <img
                src="assets/images/product/05.jpg"
                alt="personal_portfolio"
            />
            </Link>
            <div className="tmp-inner-content">
            <div className="top-item">
                <span className="left">Mobile App Design</span>
                <span className="left">25 likes</span>
            </div>
            <Link href={'/ProjectDetails'}>
                <h2 className="title">
                Mobile App Design UI/UX <br />
                In Figma
                </h2>
            </Link>
            </div>
                                    </div>
                                </SwiperSlide>
                                <div
                                    className="swiper-button-next"
                                    data-tmp-cursor="md transparent fw-bold"
                                    data-tmp-cursor-text="Next"
                                />
                                <div
                                    className="swiper-button-prev"
                                    data-tmp-cursor="md transparent fw-bold"
                                    data-tmp-cursor-text="Prev"
                                />
                            </Swiper>
                            {/* If we need navigation buttons */}
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* recent project areas end */}


        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page