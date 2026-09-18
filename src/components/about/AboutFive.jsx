"use client";
import Link from 'next/link';
import React from 'react'


function AboutFive() {

  return (
    <div>
    

        <div className="about-area tmp-section-gap about-style-one">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="about-thumbnail-construction">
                    <div className="image-large" data-aos="move-right" data-aos-delay="100">
                    <img
                        src="assets/images/about/about-2.jpg"
                        alt="construction_business"
                    />
                    </div>
                    <div className="shape-bottom-left" />
                    <div className="work-done">
                    <h3 className="title">
                        <span className="counter">3025</span>+
                    </h3>
                    <p>Conpleated Work</p>
                    </div>
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
                    <h2 className="title split-collab" data-aos="fade-up" data-aos-delay="300">
                        Find out more about our <br /> business Construction
                    </h2>
                    </div>
                    <p
                    className="description" data-aos="fade-up" data-aos-delay="500">
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
                    className="thumbnail-with-title mt--50" data-aos="fade-up" data-aos-delay="800">
                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                        Contact Us
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>


    </div>
  )
}

export default AboutFive