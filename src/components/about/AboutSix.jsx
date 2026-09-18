"use client"; 
import React from 'react'
import Link from 'next/link';

function AboutSix() {
  return (
    <div>
        


        {/* short discription about company area  */}
        <div className="short-discription-area tmp-section-gapBottom">
            <div className="container  plr_sm--15">
            <div className="row">
                <div className="col-lg-12">
                <div className="short-discription-between-area">
                    <h2 className="title" data-aos="move-left" data-aos-delay="100">
                    We are a dynamic creative digital agency dedicated to elevating
                    our company brands.
                    </h2>
                    <div className="discription-area">
                    <p className="disc" data-aos="move-left" data-aos-delay="300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        quis. Ullam accusantium dignissimos repellendus nemo fugiat
                        numquam, nisi odio adipisci. Veniam neque itaque expedita
                        officiis rem ipsa! Ratione, rem reiciendis?
                    </p>
                    <a href="#" className="btn-readmore d-flex" data-aos="move-left" data-aos-delay="500">
                        View More
                        <i className="fa-light fa-arrow-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* short discription about company area end */}
        {/* about company wrapper */}
        <section className="about-company-area tmp-section-gapBottom">
            <div className="row align-items-center  plr_sm--15 plr_md--15">
            <div className="col-lg-4 offset-lg-2 mb_md--50 mb_sm--30">
                <div className="split-inner">
                <h2
                    className="title sal-animate mb--40" >
                    What is Bizper?
                </h2>
                <p
                    className="description sal-animate mb--25">
                    Randomised words which don look even slightly believable. If you
                    are to use a passage of Lorem Ipsum. You need to be sure there isn
                    anything embarrassing hidden in the middle of text. in some form, by
                    injectedeed bedhumour, or randomised even.
                </p>
                <p
                    className="description sal-animate">
                    You need to be sure there isn anything embarrassing hidden in the
                    middle of text. in some form, by injectedeed bedhumour, or
                    randomised even.
                </p>
                <ul
                    className="split-list sal-animate">
                    <li>- Doug DeMarco, Design Prototyping Manager</li>
                    <li>- 108 million paying subscribers</li>
                    <li>- Over 1.7 billion hours of music played monthly</li>
                    <li>- 4,000+ employees working across 16 offices</li>
                </ul>
                <div
                    className="view-more-button mt--35 sal-animate d-flex">
                    <Link className="tmp-btn btn-primary" href={'/Contact'}>
                    Contact With Us
                    </Link>
                </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
                <div className="thumbnail image-right-content" data-aos="move-left" data-aos-delay="300">
                <img src="assets/images/about/about-large.jpg" alt="split Images" />
                </div>
            </div>
            </div>
        </section>
        {/* about company wrapper end */}



    </div>
  )
}

export default AboutSix