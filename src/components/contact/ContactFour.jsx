"use client"; 
import Link from 'next/link';



function Contact() {
  return (
    <div>
        <>
            {/* Start Contact Area  */}
            <div className="contact-area-three tmp-section-gapTop">
                <div className="bg-shape">
                <img src="assets/images/cta/02.png" alt="bussiness-contact" />
                </div>
                <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                    <div className="contact-inner">
                        <div
                        className="section-head section-head-one-side text-align-left">
                        <span className="title">Contact Us</span>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                        </p>
                        </div>
                        <ul
                        className="ft-link ft-link-style-three">
                        <li>
                            <div className="single-contact background-transparent">
                            <div className="icon">
                                <i className="fa-light fa-phone" />
                            </div>
                            <div className="content">
                                <span>Call Us</span>
                                <Link className="contact-here" href="#">
                                +123 34598768
                                </Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="single-contact background-transparent">
                            <div className="icon">
                                <i className="fa-solid fa-envelope-open-text" />
                            </div>
                            <div className="content">
                                <span>E-mail</span>
                                <Link className="contact-here" href="#">
                                info@uibundle.com
                                </Link>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="single-contact background-transparent">
                            <div className="icon">
                                <i className="fa-solid fa-map-location-dot" />
                            </div>
                            <div className="content">
                                <span>Address</span>
                                <Link className="contact-here" href="#">
                                25/5 Double Street, Texas Houston USA
                                </Link>
                            </div>
                            </div>
                        </li>
                        </ul>
                        <div
                        className="tmp-tag-list tag-list-one">
                        <Link className="tag-list" href="#">
                            Facebook
                        </Link>
                        <Link className="tag-list" href="#">
                            Twitter
                        </Link>
                        <Link className="tag-list" href="#">
                            Linkedin
                        </Link>
                        <Link className="tag-list" href="#">
                            Skype
                        </Link>
                        <Link className="tag-list" href="#">
                            Pinterest
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-7">
                    <div className="contact-inner">
                        <div className="section-head section-head-one-side text-align-left">
                        <span className="title">GET IN TOUCH</span>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                        </p>
                        </div>
                        <div className="contact-form style-two">
                        <form id="contact-form" action="#">
                            <div className="contact-form-wrapper row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                <input
                                    className="input-field"
                                    name="contact-name"
                                    placeholder="Name"
                                    id="contact-name"
                                    type="text"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                <input
                                    className="input-field"
                                    name="contact-phone"
                                    placeholder="Phone"
                                    type="text"
                                />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                <input
                                    className="input-field"
                                    name="contact-phone"
                                    placeholder="Email"
                                    type="email"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                <input
                                    className="input-field"
                                    type="text"
                                    id="subject"
                                    placeholder="Website"
                                    name="Website"
                                />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <textarea
                                    className="input-field"
                                    placeholder="How can we help"
                                    name="contact-message"
                                    id="contact-message"
                                    defaultValue={""}
                                />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-submit-group">
                                <button
                                    name="submit"
                                    className="tmp-btn btn-primary"
                                    type="submit"
                                    id="submit"
                                >
                                    Submit Now
                                </button>
                                </div>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Contact Area  */}
        </>
    </div>
  )
}

export default Contact