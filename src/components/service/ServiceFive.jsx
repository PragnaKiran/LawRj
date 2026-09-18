"use client"; 
import React from 'react'
import Link from 'next/link';
function ServiceFIve() {
  return (
    <div>
        
        <div className="service-area tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                <div
                    className="col-lg-12">
                    <div className="section-head">
                    <div className="section-sub-title center-title">
                        <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Business_Consulting_services"
                        />
                        <span>OUR SERVICES</span>
                    </div>
                    <h2 className="title split-collab">Our Provided Services</h2>
                    </div>
                </div>
                </div>
                <div className="row g-5">
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-6.svg"
                        alt="corporate_Business_Services_agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Business Stratagy</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-1.svg"
                        alt="corporate_Business_Services_agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Custom website design</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-2.svg"
                        alt="corporate_Business_Services_Agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Data Analysis</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-3.svg"
                        alt="corporate_Business_Services_agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Saving &amp; Investments</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-4.svg"
                        alt="corporate_Business_Services_agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Website Design</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                    <div className="service-inner financial-service-inner agency-service">
                    <div className="icon">
                        <img
                        src="assets/images/services/agency-5.svg"
                        alt="corporate_Business_Services_agency"
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">Mutual Funds</h2>
                        <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                        </p>
                        <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                        </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ServiceFIve