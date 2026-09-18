"use client"; 
import Link from 'next/link';
import Image from 'next/image';

function TestimonialsTwo() {
  return (
    <div>
        


        <>
            {/* Start testimonial Area  */}
            <div className="testimonial-area testimonial-style-two tmp-section-gapTop">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="section-head pb-40">
                        <div className="section-sub-title color-secondary center-title">
                        <span>Client’s Testimonials</span>
                        </div>
                        <h2 className="section-title split-collab">
                        What clients have to say
                        </h2>
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6">
                    <div className="single-testimonial">
                        <div className="testimonial-header">
                        <div className="header-inner">
                            <div className="content">
                            <div className="content-left">
                                <div className="thumbnail">
                                <Image width={80} height={80}
                                    src="/assets/images/testimonial/img-sm-1.png"
                                    alt="Business Consulting testimonial"
                                />
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="name">Esther Howard</div>
                                <div className="designation">Web Developer</div>
                            </div>
                            </div>
                            <div className="icon">
                            <i className="fa-sharp fa-regular fa-quote-right" />
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-body">
                        <p className="description">
                            It’s incredible. it’s really wonderful. bcom has completely
                            surpassed our expect. Urna porttitor rhoncus dolor purus non
                            enim praesent at the facilisis lectus. Adipiscing tristique
                            risus feugiat fermentum.It’s incredible. it’s really wonderful.
                            bcom has completely surpassed our expect.
                        </p>
                        <div className="rating rating-style-two">
                            <div className="title">Rating : </div>
                            <div className="stars-group">
                            <div className="star">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="single-testimonial">
                        <div className="testimonial-header">
                        <div className="header-inner">
                            <div className="content">
                            <div className="content-left">
                                <div className="thumbnail">
                                <Image width={80} height={80}
                                    src="/assets/images/testimonial/img-sm-1.png"
                                    alt="Business Consulting testimonial"
                                />
                                </div>
                            </div>
                            <div className="content-right">
                                <div className="name">Esther Howard</div>
                                <div className="designation">Web Developer</div>
                            </div>
                            </div>
                            <div className="icon">
                            <i className="fa-sharp fa-regular fa-quote-right" />
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-body">
                        <p className="description">
                            It’s incredible. it’s really wonderful. bcom has completely
                            surpassed our expect. Urna porttitor rhoncus dolor purus non
                            enim praesent at the facilisis lectus. Adipiscing tristique
                            risus feugiat fermentum.It’s incredible. it’s really wonderful.
                            bcom has completely surpassed our expect.
                        </p>
                        <div className="rating rating-style-two">
                            <div className="title">Rating :</div>
                            <div className="stars-group">
                            <div className="star">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End testimonial Area  */}
        </>


    </div>
  )
}

export default TestimonialsTwo