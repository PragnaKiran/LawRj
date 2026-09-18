"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';

function PortfolioThree() {

  return (
    <div>
        

        <>
            {/* Start Portfolio Area  */}
            <div className="portfolio-area portfolio-style-three tmp-section-gap bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-inner">
                                <div className="section-head pb--30  text-align-left">
                                <span className="subtitle color-gradiant">OUR PORTFOLIO</span>
                                <h2 className="title color-white split-collab">
                                    Let Check Our Best Recent Work{" "}
                                </h2>
                                </div>
                                <div className="btn-group">
                                <Link href={'/Project'} className="tmp-btn btn-gradiant">
                                    Explore More
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
  <div
    className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-15.jpg"
          alt="corporate business"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">EcoTech Innovations</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link href="#" className="icon angle-roted border-none bg-color-white">
          <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  </div>
  <div
    className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-11.jpg"
          alt="corporate business"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">Wellness Platform</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link
          href={'/ProjectDetails'}
          className="icon icon--30 radius-circle border-none bg-color-white"
        >
          <i className="fa-solid fa-arrow-right transform-rotate-318" />
        </Link>
      </div>
    </div>
  </div>
  <div
    className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-12.jpg"
          alt="business Corporate portfolio"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">Powered Education</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link
          href={'/ProjectDetails'}
          className="icon icon--30 radius-circle border-none bg-color-white"
        >
          <i className="fa-solid fa-arrow-right transform-rotate-318" />
        </Link>
      </div>
    </div>
  </div>
  <div
    className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-13.jpg"
          alt="business Corporate portfolio"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">Alex Brands</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link
          href={'/ProjectDetails'}
          className="icon icon--30 radius-circle border-none bg-color-white"
        >
          <i className="fa-solid fa-arrow-right transform-rotate-318" />
        </Link>
      </div>
    </div>
  </div>
  <div
    className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-14.jpg"
          alt="business Corporate portfolio"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant portfolio-sm-tag">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">Virtual Event</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link
          href={'/ProjectDetails'}
          className="icon icon--30 radius-circle border-none bg-color-white"
        >
          <i className="fa-solid fa-arrow-right transform-rotate-318" />
        </Link>
      </div>
    </div>
  </div>
  <div
    className="col-lg-6 col-md-6 col-sm-12  wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
    <div className="portfolio-inner">
      <Link href={'/ProjectDetails'} className="thumbnail">
        <img data-aos="move-right" data-aos-delay="100"
          src="assets/images/portfolio/portfolio-15.jpg"
          alt="corporate business"
        />
      </Link>
      <div className="portfolio-tag bg-gradiant">
        <div className="content">
          <Link href={'/ProjectDetails'}>
            <h3 className="name animated fadeIn">Alex Brands</h3>
          </Link>
          <div className="designation">Financial advisory</div>
        </div>
        <Link href="#" className="icon angle-roted border-none bg-color-white">
          <i className="fa-solid fa-arrow-right" />
        </Link>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </>




    </div>
  )
}

export default PortfolioThree