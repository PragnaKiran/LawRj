"use client"; 
import CounterUp from "@/components/funfacts/CounterGlobal"
import Link from 'next/link';
import Image from 'next/image';

function AboutTwo() {

  return (
    <div>
        
        {/* Start About Area  */}
        <div className="about-area about-style-two tmp-section-gapBottom">
            <div className="container">
            <div className="row align-items-center">
                <div
                className="col-lg-6">
                <div className="about-thumbnails about-style-two">
                    <Image width={630} height={630} src="/assets/images/about/about-style-2.png" alt="Business Consulting about" data-aos="move-left" data-aos-delay="300"/>
                    <div className="dots animated tada">
                    <Image width={98} height={98}
                        className="tada"
                        src="/assets/images/about/dots.png"
                        alt="Business Consulting dots"
                    />
                    </div>
                    <div className="scater">
                    <Image width={310} height={310}
                        src="/assets/images/about/scater.png"
                        alt="Business Consulting scater"
                    />
                    </div>
                    <div className="tmpk__circle v__1">
                    <svg className="spinner" viewBox="0 0 100 100">
                        <defs>
                        <path
                            id="circle"
                            d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                        />
                        </defs>
                        <text>
                        <textPath xlinkHref="#circle">
                            25+ Years Of Working Experience * Experience *
                        </textPath>
                        </text>
                    </svg>
                    <div className="tmpk__circle--icon">
                        <i className="fa-light fa-arrow-right" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="inner">
                    <div className="section-head section-head-one-side text-align-left">
                    <div className="section-sub-title color-secondary" data-aos="fade-up" data-aos-delay="100">
                        <span className="subtitle">About Us</span>
                    </div>
                    <h2 className="title split-collab" data-aos="fade-up" data-aos-delay="300">
                        Find out more about our <br /> business consulting
                    </h2>
                    </div>
                    <p className="description" data-aos="fade-up" data-aos-delay="500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                    sed, consequat tellus. Quisque ac odio eget ligula gravida
                    efficitur. Nunc facilisis sagittis magna, non venenatis mauris
                    luctus quis. Nulla sapien purus feugiat vel dictum sit amet.
                    </p>
                    <div className="feature-counter" data-aos="fade-up" data-aos-delay="500">
                    <div className="tmp-feature-wrapper">
                        <h3 className="title">Grow Your Business</h3>
                        <div className="tmp-feature">
                        <div className="icon bg-color-secondary-alt radius-circle">
                            <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                            <h6 className="title">Flexible Classes</h6>
                        </div>
                        </div>
                        <div className="tmp-feature">
                        <div className="icon bg-color-secondary-alt radius-circle">
                            <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                            <h6 className="title">Innovative Ideas</h6>
                        </div>
                        </div>
                        <div className="tmp-feature">
                        <div className="icon bg-color-secondary-alt radius-circle">
                            <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                            <h6 className="title">Financial Consulting</h6>
                        </div>
                        </div>
                        <div className="tmp-feature">
                        <div className="icon bg-color-secondary-alt radius-circle">
                            <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                            <h6 className="title">Risk Management</h6>
                        </div>
                        </div>
                    </div>
                    <div className="counter-wrapper counter-style-one">
                        <div className="counter-inner">
                            <CounterUp end={1560}/>
                        <p className="description">
                            Projects completed <br /> in last 5 years
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End About Area  */}

    </div>
  )
}

export default AboutTwo