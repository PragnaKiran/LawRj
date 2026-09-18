"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'; 
import Link from 'next/link';
import Image from 'next/image';

function BannerThree() {
  return (
    <div>
        

            {/* Start swiper slider area  */}
            <div className="tmp-banner-area banner-three bg_image tmp-section-gap">
                <div className="swiper-container-three">
                {/* swiper slides */}


                <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="swiper-container-three"
                        speed={1600}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        effect="fade"
                        autoplay={{
                            delay: 51600,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            11600: { slidesPerView: 1 },
                            900: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            580: { slidesPerView: 1 },
                            450: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                    <SwiperSlide>
                        <div className="slider-inner">
                            <div className="thumbnail">
                            <Image height={1600} width={1600} layout="responsive"
                                src="/assets/images/banner/banner-three.jpg"
                                alt="marketing consulting"
                            />
                            </div>
                            <div className="content">
                            <h2 className="title">Start your upcoming modern consulting</h2>
                            <p className="description">
                                We help small startups grow from idea to millions of users. we
                                can also automate your marketing and customer service.
                            </p>
                            <div
                                className="banner-bottom justify-content-center"
                                style={{ gap: 30 }}
                            >
                                <Link href={'/Service'} className="tmp-btn btn-gradiant">
                                Get Started Now
                                </Link>
                                <Link href={'/Contact'} className="tmp-btn btn-gradiant-2">
                                Contact Us
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-inner">
                            <div className="thumbnail">
                            <Image height={1600} width={1600} layout="responsive"
                                src="/assets/images/banner/banner-four.jpg"
                                alt="marketing consulting"
                            />
                            </div>
                            <div className="content">
                            <h2 className="title">Start your upcoming modern consulting</h2>
                            <p className="description">
                                We help small startups grow from idea to millions of users. we
                                can also automate your marketing and customer service.
                            </p>
                            <div
                                className="banner-bottom justify-content-center"
                                style={{ gap: 30 }}
                            >
                                <Link href={'/Service'} className="tmp-btn btn-gradiant">
                                Get Started Now
                                </Link>
                                <Link href={'/Contact'} className="tmp-btn btn-gradiant-2">
                                Contact Us
                                </Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slider-inner">
                        <div className="thumbnail">
                        <Image height={1600} width={1600} layout="responsive"
                            src="/assets/images/banner/banner-five.jpg"
                            alt="marketing consulting"
                        />
                        </div>
                        <div className="content">
                        <h2 className="title">Marketing Consulting Help Your Business</h2>
                        <p className="description">
                            We help small startups grow from idea to millions of users. we
                            can also automate your marketing and customer service.
                        </p>
                        <div
                            className="banner-bottom justify-content-center"
                            style={{ gap: 30 }}
                        >
                            <Link href={'/Service'} className="tmp-btn btn-gradiant">
                            Get Started Now
                            </Link>
                            <Link href={'/Contact'} className="tmp-btn btn-gradiant-2">
                            Contact Us
                            </Link>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <div className="swiper-button-next"><i className="fa-regular fa-angle-right" /></div>
                    <div className="swiper-button-prev"><i className="fa-regular fa-angle-left" /></div>
                </Swiper>



                {/* pagination dots */}
                <div className="swiper-pagination" />
                {/* !pagination dots */}
                </div>
            </div>
            {/* End swiper slider area  */}


    </div>
  )
}

export default BannerThree