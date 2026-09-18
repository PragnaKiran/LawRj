"use client"; 
import Link from 'next/link';

function ContactTwo() {
  return (
    <div>
        
        <>
            {/* Start Contact Form Area  */}
            <div className="contact-area contact-bg-1 bg_image tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                    <div className="contact-inner">
                        <div className="section-head section-head-one-side text-align-left">
                        <h2 className="title split-collab">
                            Get free marketing <br />
                            consultation today
                        </h2>
                        <p className="description mt--30">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                        </p>
                        </div>
                        <ul className="ft-link ft-link-style-two">
                        <li>
                            <div className="single-contact background-transparent">
                            <div className="icon">
                                <i className="fa-light fa-phone" />
                            </div>
                            <div className="content">
                                <span>Call Us</span>
                                <a className="contact-here" href="#">
                                +123 34598768
                                </a>
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
                                <a className="contact-here" href="#">
                                info@uibundle.com
                                </a>
                            </div>
                            </div>
                        </li>
                        <li>
                            <div className="single-contact background-transparent">
                            <div className="icon">
                                <i className="fa-regular fa-map-location-dot" />
                            </div>
                            <div className="content">
                                <span>Address</span>
                                <a className="contact-here" href="#">
                                25/5 Double Street, Texas Houston USA
                                </a>
                            </div>
                            </div>
                        </li>
                        </ul>
                        <div className="tmp-tag-list tag-list-one">
                        <a className="tag-list" href="#">
                            Facebook
                        </a>
                        <a className="tag-list" href="#">
                            Twitter
                        </a>
                        <a className="tag-list" href="#">
                            Linkedin
                        </a>
                        <a className="tag-list" href="#">
                            Skype
                        </a>
                        <a className="tag-list" href="#">
                            Pinterest
                        </a>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-7 mt_md--50 mt_sm--50">
                    <div className="contact-form">
                        <div className="section-head section-head-one-side text-align-left">
                        <span className="subtitle">GET IN TOUCH</span>
                        <h2 className="title">Free consultation</h2>
                        </div>
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
                                required=""
                                defaultValue={""}
                                />
                            </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="form-submit-group">
                                <p className="check-condition">
                                <input
                                    className="check-box"
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                />
                                <label className="condition" htmlFor="terms">
                                    I agree to the <span>terms</span> and{" "}
                                    <span>conditions</span>
                                </label>
                                </p>
                                <button
                                name="submit"
                                className="tmp-btn btn-secondary"
                                type="submit"
                                id="submit"
                                >
                                <span className="submit-wrapper">
                                    <span className="btn-text">Submit Now</span>
                                    <span className="btn-icon">
                                    <i className="fa-sharp fa-light fa-arrow-right" />
                                    </span>
                                </span>
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
            {/* Start Contact Form Area  */}
        </>

    </div>
  )
}

export default ContactTwo