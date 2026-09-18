"use client"; 
import React, { useEffect }  from 'react';
import Link from 'next/link';



function ServiceFour() {  

  return (
    <div>
        


    <div className="best-service-we-provide pt--60 tmp-section-gapBottom">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-6.svg" alt="corporate_Business_Services_agency" />
                        </div>
                        <div className="content">
                            <h2 className="title">Business Stratagy</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-1.svg" alt="corporate_Business_Services_agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Custom website design</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-2.svg" alt="corporate_Business_Services_Agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Data Analysis</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
                            </div>
                        </div>
                        <Link href={'/ServiceDetails'} className="over_link"></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="700">
                    <div className="service-inner financial-service-inner agency-service feature-service">
                        <div className="icon">
                            <img src="assets/images/services/agency-3.svg" alt="corporate_Business_Services_agency" />

                        </div>
                        <div className="content">
                            <h2 className="title">Saving &amp; Investments</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                            </p>
                            <div className="three--dot">
                                <div className="dot dot-one"></div>
                                <div className="dot dot-two"></div>
                                <div className="dot dot-two"></div>
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

export default ServiceFour