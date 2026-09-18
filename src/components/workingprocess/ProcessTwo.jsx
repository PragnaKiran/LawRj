"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';


function WorkingProcess() {

  return (
    <div>
        <div className="tpm-services-process-area tmp-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-head">
                    <div className="section-sub-title center-title">
                        <img src="assets/images/services/section-custom-menubar.png" alt="Corporate_service" />
                        <span className="subtitle">OUR work process</span>
                    </div>
                    <h2 className="title split-collab">How Our Services Work</h2>
                    </div>
                </div>
            </div>

            <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".1s">
                    <div className="single-services">
                    <div className="services-inner">
                        <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                            <img src="assets/images/services/services-round-1.png" alt="Business consulting services" />
                        </Link>
                        <div className="number-bg-round">
                            <span>01</span>
                        </div>
                        </div>
                        <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Meeting Client</h5>
                        <p className="description">
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem
                            men settle genius excuse.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".2s">
                    <div className="single-services">
                    <div className="services-inner">
                        <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                            <img src="assets/images/services/services-round-2.png" alt="Business consulting services" />
                        </Link>
                        <div className="number-bg-round">
                            <span>02</span>
                        </div>
                        </div>
                        <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Project Strategy</h5>
                        <p className="description">
                            Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem
                            men settle genius excuse.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".3s">
                    <div className="single-services">
                        <div className="services-inner">
                            <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                            <Link href="#">
                                <img src="assets/images/services/services-round-3.png" alt="Business consulting services" />
                            </Link>
                            <div className="number-bg-round">
                                <span>03</span>
                            </div>
                            </div>
                            <div className="services-content services-content-style-1 text-center">
                            <h5 className="title">Campaign Design</h5>
                            <p className="description">
                                Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem
                                men settle genius excuse.
                            </p>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WorkingProcess





