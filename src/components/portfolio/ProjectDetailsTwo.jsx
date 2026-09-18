"use client"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
function ProjectDetailsTwo() {
  return (
    <div>
                {/* Start Projects Details area  */}
                <div className="projects-details-area tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="projects-details-inner">
                        {/* Additional required wrapper */}
                        <Swiper
                                    // install Swiper modules
                                    modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                                    className="my-swiper-product-details"
                                    speed={500}
                                    slidesPerView={1}
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
                                        1200: { slidesPerView: 1 },
                                        900: { slidesPerView: 1 },
                                        768: { slidesPerView: 1 },
                                        580: { slidesPerView: 1 },
                                        450: { slidesPerView: 1 },
                                        0: { slidesPerView: 1 },
                                    }}
                                    >
                                    <SwiperSlide>
                                        <div className="thumbnail position-relative">
                                            <img
                                                src="assets/images/projects-details/projects-details.jpg"
                                                alt="projects-details"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="thumbnail position-relative">
                                            <img
                                                src="assets/images/projects-details/projects-details.jpg"
                                                alt="projects-details"
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="thumbnail position-relative">
                                            <img
                                                src="assets/images/projects-details/projects-details.jpg"
                                                alt="projects-details"
                                            />
                                        </div>
                                    </SwiperSlide>

                                    <div className="swiper-button-next" />
                                    <div className="swiper-button-prev" />
                                </Swiper>
                                {/* If we need navigation buttons */}
                        
                        <div className="clients-projects-details">
                        <div className="clients-details-inner">
                            <h3 className="title text-center">CLIENT PROJECT DETAILS</h3>
                            <div className="single-projects-details">
                            <div className="info">
                                <div className="icon">
                                <i className="fa-solid fa-user" />
                                </div>
                                <div className="content">
                                <h4 className="subtitle">Clients:</h4>
                                <h5 className="category">Alex Brands</h5>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                <i className="fa-sharp fa-light fa-layer-group" />
                                </div>
                                <div className="content">
                                <h4 className="subtitle">Category:</h4>
                                <h5 className="category">Business Solution</h5>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                <i className="fa-light fa-calendar-days" />
                                </div>
                                <div className="content">
                                <h4 className="subtitle">Date:</h4>
                                <h5 className="category">05 May 2023</h5>
                                </div>
                            </div>
                            <div className="info">
                                <div className="icon">
                                <i className="fa-regular fa-map-location" />
                                </div>
                                <div className="content">
                                <h4 className="subtitle">Address:</h4>
                                <h5 className="category">+880123456678</h5>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="projects-details-wrapper">
                            <h3 className="title">Business Planing &amp; Solution</h3>
                            <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                            erat elit eu lacus. Vestibulum non justo consectetur, cursus
                            ante, tincidunt sapien. Nulla quis diam sit amet turpis
                            interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                            egestas elementum. Mauris et bibendum dui. Aenean consequat
                            pulvinar luctus. Suspendisse consectetur tristique tortorLorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                            pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                            eu lacus.
                            </p>
                            <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                            erat elit eu lacus. Vestibulum non justo consectetur, cursus
                            ante, tincidunt sapien. Nulla quis diam sit amet turpis
                            interdum.
                            </p>
                        </div>
                        <div className="projects-details-wrapper">
                            <h3 className="title">The Challenge Of Project</h3>
                            <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                            erat elit eu lacus. Vestibulum non justo consectetur, cursus
                            ante, tincidunt sapien. Nulla quis diam sit amet turpis
                            interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                            egestas elementum. Mauris et bibendum dui. Aenean consequat
                            pulvinar luctus.
                            </p>
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    It Essential To Work With Business Consultants Who
                                    Have
                                </p>
                                </div>
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    It Essential To Work With Business Consultants Who
                                    Have
                                </p>
                                </div>
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    It Essential To Work With Business Consultants Who
                                    Have It Essential To Work With Business Consultants
                                    Who Have
                                </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    With Business Consultants Who Have
                                </p>
                                </div>
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    Work With Business Consultants Who Have
                                </p>
                                </div>
                                <div className="challenge-details">
                                <div className="icon">
                                    <i className="fa-solid fa-check" />
                                </div>
                                <p className="description">
                                    Who Have It Essential To Work
                                </p>
                                </div>
                            </div>
                            </div>
                            <p className="description mt--30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                            viverra pretium, dolor tellus aliquet nunc, vitae ultricies
                            erat elit eu lacus. Vestibulum non justo consectetur, cursus
                            ante, tincidunt sapien. Nulla quis diam sit amet turpis
                            interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh
                            egestas elementum. Mauris et bibendum dui. Aenean consequat
                            pulvinar luctus. Suspendisse consectetur tristique tortorLorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                            pretium, dolor tellus aliquet nunc, vitae ultricies erat elit
                            eu lacus. Vestibulum non justo consectetur, cursus ante,
                            tincidunt sapien.
                            </p>
                            <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="thumbnail">
                                <img
                                    src="assets/images/projects-details/challen-1.jpg"
                                    alt="project details"
                                />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="thumbnail">
                                <img
                                    src="assets/images/projects-details/challen-2.jpg"
                                    alt="project details"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* Start Projects Details area  */}
    </div>
  )
}

export default ProjectDetailsTwo