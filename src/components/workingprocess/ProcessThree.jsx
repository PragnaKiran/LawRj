"use client"; 
import Link from 'next/link';

function WorkingProcessTwo() {
  return (
    <div>

        <div className="tpm-services-process-area tmp-section-gapBottom">
            <div className="container">
            <div
                className="row"
                data-sal-delay={150}
                data-sal="slide-up"
                data-sal-duration={800}
            >
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title center-title">
                    <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                    />
                    <span className="subtitle">OUR work process</span>
                    </div>
                    <h2 className="title split-collab">Our Working Process</h2>
                </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal-delay={150}
                data-sal="slide-up"
                data-sal-duration={800}
                >
                <div className="single-services construction">
                    <div className="services-inner">
                    <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                        <img
                            src="assets/images/services/services-round-1.png"
                            alt="Business consulting services"
                        />
                        <div className="number-bg-round">
                            <span>01</span>
                        </div>
                        </Link>
                    </div>
                    <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Meeting Client</h5>
                        <p className="description">
                        Continue indulged speaking the was out horrible for domestic
                        position. Seeing rather her you not esteem men settle genius
                        excuse.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal-delay={250}
                data-sal="slide-up"
                data-sal-duration={800}
                >
                <div className="single-services construction">
                    <div className="services-inner">
                    <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                        <img
                            src="assets/images/services/services-round-2.png"
                            alt="Business consulting services"
                        />
                        <div className="number-bg-round">
                            <span>02</span>
                        </div>
                        </Link>
                    </div>
                    <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Project Strategy</h5>
                        <p className="description">
                        Continue indulged speaking the was out horrible for domestic
                        position. Seeing rather her you not esteem men settle genius
                        excuse.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                data-sal-delay={350}
                data-sal="slide-up"
                data-sal-duration={800}
                >
                <div className="single-services construction">
                    <div className="services-inner">
                    <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                        <img
                            src="assets/images/services/services-round-3.png"
                            alt="Business consulting services"
                        />
                        <div className="number-bg-round">
                            <span>03</span>
                        </div>
                        </Link>
                    </div>
                    <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Campaign Design</h5>
                        <p className="description">
                        Continue indulged speaking the was out horrible for domestic
                        position. Seeing rather her you not esteem men settle genius
                        excuse.
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

export default WorkingProcessTwo