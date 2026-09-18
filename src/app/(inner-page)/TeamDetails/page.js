
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Link from 'next/link';
function page() {
  return (
    <div className="service-details appoinment-inner-page">
        <HeaderInner/>
        <Breadcrumb title="Team Details" activeItem="Team Details" />
         
          {/* Start Team Details Area  */}
          <div className="team-details-area tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                    <div className="team-details-thumb">
                        <div className="thumbnail">
                        <img src="assets/images/team-details/team-1.jpg" alt="team" />
                        </div>
                        <div className="content">
                        <div className="author-info">
                            <h4 className="name">Richerd Joseph</h4>
                            <span className="designation">CEO &amp; Founder</span>
                        </div>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <div className="team-details-social">
                            <ul className="social-icons solid-social-icons rounded-social-icons">
                            <li>
                                <a className="bg-transparent border-one-primary" href="#">
                                <i className="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a className="bg-transparent border-one-primary" href="#">
                                <i className="fa-brands fa-linkedin-in" />
                                </a>
                            </li>
                            <li>
                                <a className="bg-transparent border-one-primary" href="#">
                                <i className="fa-brands fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a className="bg-transparent border-one-primary" href="#">
                                <i className="fa-brands fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a className="bg-transparent border-one-primary" href="#">
                                <i className="fa-brands fa-youtube" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-7">
                    <div className="team-details-content">
                        <div className="personal-info">
                        <h3 className="title">Personal Info</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit.
                        </p>
                        <div className="all-info">
                            <div className="info-left">
                            <div className="single-info">
                                <span>Phone:</span>
                                <a href="#">+256 3254 2654</a>
                            </div>
                            <div className="single-info">
                                <span>E-mail:</span>
                                <a href="#">supportjony@gmail.com</a>
                            </div>
                            </div>
                            <div className="info-right">
                            <div className="single-info">
                                <span>Experiences:</span>
                                <a href="#">25+ years</a>
                            </div>
                            <div className="single-info">
                                <span>Address:</span>
                                <a href="#"> 2972 Westheimer Rd, Illinois 85486</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="personal-experience">
                        <h3 className="title">Personal Experience</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit.
                        </p>
                        <div className="progress-wrapper">
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">80%</span>
                                <p className="name">Marketing</p>
                            </div>
                            <div className="progress bg-white">
                                <div
                                className="progress-bar bg--primary wow fadeInLeft bg--primary"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">90%</span>
                                <p className="name">Consulting</p>
                            </div>
                            <div className="progress bg-white">
                                <div
                                className="progress-bar bg--primary wow fadeInLeft bg--primary"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                            <div className="single-progress-area progress-style-two">
                            <div className="progress-top">
                                <span className="parcent">95%</span>
                                <p className="name">Social Assistant</p>
                            </div>
                            <div className="progress bg-white">
                                <div
                                className="progress-bar bg--primary wow fadeInLeft bg--primary"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Team Details Area  */}

        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page