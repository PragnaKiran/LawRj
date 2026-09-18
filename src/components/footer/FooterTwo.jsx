"use client";
import Link from 'next/link';
import Image from 'next/image';

function FooterTwo() {
  return (
    <div>


        {/* Start Footer Area  */}
        <footer className="footer-area footer-style-one-wrapper bg-color-footer-2 bg_images tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="subscribe-area subscribe-style-1">
                    <div className="subscribe-inner">
                    <div className="title">Subscribe to Newsletter</div>
                    <form action="#" className="newsletter-form-1 mt--40">
                        <input type="email" placeholder="Your Email" required="" />
                        <button type="submit" className="tmp-btn btn-primary">
                        Subscribe Now{" "}
                        <i className="fa-sharp fa-regular fa-paper-plane" />
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-main footer-style-one">
                <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-wrapper border-right mr--20">
                    <div className="logo">
                        <a href="index.html">
                        <Image width={188} height={61} src="/assets/images/logo/logo-02.svg" alt="logo" />
                        </a>
                    </div>
                    <p className="description">
                        Proin Pretium Sem Libero, Nec Aliquet Augue Lobortis In.
                        Phasellus Nibh Quam, Molestie Id Est Sit Amet, Luctus Pulvinar
                    </p>
                    <div className="day-time">
                        <div className="icon">
                        <i className="fa-solid fa-alarm-clock" />
                        </div>
                        <div className="content">
                        <div className="day">Sunday - Friday:</div>
                        <div className="time">9:00 AM – 8:00 PM</div>
                        </div>
                    </div>
                    <ul className="social-icons solid-social-icons rounded-social-icons">
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                    <h5 className="ft-title">Quick Link</h5>
                    <ul className="ft-link">
                        <li>
                        <a href="about.html">About Company</a>
                        </li>
                        <li>
                        <a href="team.html">Meet Our Team</a>
                        </li>
                        <li>
                        <a href="service.html">Our Services</a>
                        </li>
                        <li>
                        <a href="blog.html">News &amp; Media</a>
                        </li>
                        <li>
                        <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                        <a href="faq.html">Support</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper pr--15">
                    <h5 className="ft-title">Recent Post</h5>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post.jpg"
                            alt="Business_Corporate"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" />
                            <span>12 Feb, 2022</span>
                        </div>
                        <a href="blog-details.html">
                            <h6 className="title">
                            Day tree hide from hath gathered multy
                            </h6>
                        </a>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post-2.jpg"
                            alt="Business_Corporate"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" />
                            <span>12 Feb, 2022</span>
                        </div>
                        <a href="blog-details.html">
                            <h6 className="title">
                            Saving Time Achieving Success in Business
                            </h6>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper">
                    <h5 className="ft-title">Official info:</h5>
                    <ul className="ft-link">
                        <li className="ft-location">
                        5919 Trussville Crossings Pkwy, new Dusting town, Austria
                        </li>
                        <li>
                        <div className="single-contact">
                            <div className="icon">
                            <i className="fa-solid fa-envelope-open-text" />
                            </div>
                            <div className="content">
                            <span>E-mail:</span>
                            <a href="mailto:webmaster@example.com">
                                info@uibundle.com
                            </a>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="single-contact">
                            <div className="icon">
                            <i className="fa-light fa-phone" />
                            </div>
                            <div className="content">
                            <span>Phone:</span>
                            <a href="tel:+4733378901">+123 34598768</a>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <div className="copyright-area-one two">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="main-wrapper">
                    <p>
                    © Copyright 2024. All Rights Reserved by{" "}
                    <a href="#">Themes-Park</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Footer Area  */}



    </div>
  )
}

export default FooterTwo