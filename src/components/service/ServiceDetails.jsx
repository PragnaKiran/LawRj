"use client";
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
function ServiceDetails() {
  return (
    <div>
        
                    {/* tmp service section */}
                    <div className="tmp-service-section tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="tmp-large-service-detials">
                                <img
                                src="assets/images/services/details-large.png"
                                alt="corporate_business_details"
                                />
                            </div>
                            {/* single service details component */}
                            <div className="single-service-details-component mt--40">
                                <h2 className="title split-collab">
                                Finance &amp; strategy service
                                </h2>
                                <p className="disc mb--20">
                                As a app web crawler expert, I help organizations adjust to the
                                expanding significance of internet promoting. or lipsum as it is
                                sometimes known, is dummy text used in laying out print, grap or
                                web designs. USA champions professionalism in the cleaning
                                industry by providing top-quality cleaning and related services
                                that meet and exceed the expectations of today’s demanding
                                corporate, office and ware house clients…courteously,
                                responsively. Lorem ipsum dolor sit amet.
                                </p>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Instant Business Growth</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Expert Team Members</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Easy Customer Service</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>24/7 Quality Service</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                </div>
                            </div>
                            {/* single service details component end */}
                            <div className="row g-5 mt--10">
                                <div className="col-lg-6 col-md-6">
                                {/* single service large-details */}
                                <div className="single-service-details">
                                    <div className="icon">
                                    <img
                                        src="assets/images/services/details-1.png"
                                        alt="corporate_business_details"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Business Growth</h6>
                                    <p className="disc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod temp incididunt ut labore.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                {/* single service large-details */}
                                <div className="single-service-details">
                                    <div className="icon">
                                    <img
                                        src="assets/images/services/details-2.png"
                                        alt="corporate_business_details"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Financial planning</h6>
                                    <p className="disc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod temp incididunt ut labore.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                            </div>
                            <div className="row g-5 mt--10">
                                <div className="col-lg-12">
                                <h2 className="title split-collab">Working challenge</h2>
                                <p className="disc mb--20">
                                    As a app web crawler expert, I help organizations adjust to the
                                    expanding significance of internet promoting. or lipsum as it is
                                    sometimes known, is dummy text used in laying out print, grap or
                                    web designs. USA champions professionalism in the cleaning
                                    industry by providing top-quality cleaning and related services
                                    that meet and exceed .
                                </p>
                                </div>
                                <div className="col-lg-6">
                                <div className="thumbnail-service-details">
                                    <img
                                    src="assets/images/services/details-thumb-1.png"
                                    alt="Corporate_Business"
                                    />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="service-detials-thumb-details">
                                    <p className="itelic disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod temp incididunt ut labore.
                                    </p>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>The master-builder of human happiness</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Awards Winning Business Comapny</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Firebase Authentication &amp; Database</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Business &amp; Consulting Agency</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Expert Team Members</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Business &amp; Consulting Agency</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <p className="disc">
                                    As a app web crawler expert, I help organizations adjust to the
                                    expanding significance of internet promoting. or lipsum as it is
                                    sometimes known, is dummy text used in laying out print, grap or
                                    web designs. USA champions professionalism in the cleaning
                                    industry by providing top-quality cleaning and related services
                                    that meet and exceed .
                                </p>
                                </div>
                            </div>
                            <div className="row mt--40">
                                <div className="col-lg-12">
                                <div className="faq-accordion">

                                    <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                        <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>Why is collaborative learning so important</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Companions shy had solicitude favorable own. Which could saw
                                                guest man now heard but. Lasted my coming uneasy marked so
                                                should. Gravity letters it amongst herself dearest an
                                                windows by. Wooded ladies she.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>Do you offer free trials</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Companions shy had solicitude favorable own. Which could saw
                                                guest man now heard but. Lasted my coming uneasy marked so
                                                should. Gravity letters it amongst herself dearest an
                                                windows by. Wooded ladies she.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    Can I share my courses with non-registered users
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Companions shy had solicitude favorable own. Which could saw
                                                guest man now heard but. Lasted my coming uneasy marked so
                                                should. Gravity letters it amongst herself dearest an
                                                windows by. Wooded ladies she.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>

                                    <div className="faq-buttom">
                                    <h4 className="title">Still Have More Questions?</h4>
                                    <p>
                                        Contact Our <a href="#">Expert Support Team</a>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 pl--50 pl_md--15 pl_sm--10 mt_md--50 mt_sm--50">
                            <div className="side-bar-details-page">
                                {/* single bar */}
                                <div className="signle-side-bar search-area">
                                <div className="body">
                                    <div className="search-area">
                                    <input type="text" placeholder="Entry Key" />
                                    <i className="fa-solid fa-magnifying-glass" />
                                    </div>
                                </div>
                                </div>
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar category-area">
                                <div className="header">
                                    <h3 className="title">Category List</h3>
                                </div>
                                <div className="body">
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Business Solution</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Strategy Growth</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Finance Solution</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Investment Policy</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Tax Manegment</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                </div>
                                </div>
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar call-to-action">
                                <div className="easy-call-to-action">
                                    <div className="icon-center-call">
                                    <i className="fa-light fa-phone" />
                                    </div>
                                    <h3 className="title">Need any help?</h3>
                                    <p className="disc">
                                    We are here to help our customer any time. You can call on
                                    24/7 To Answer Your Question.
                                    </p>
                                    <a href="#">+(012)3456789</a>
                                </div>
                                </div>
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar brochure">
                                <div className="header">
                                    <h3 className="title">Brochure</h3>
                                </div>
                                <div className="body">
                                    {/* single category */}
                                    <a href="#" className="single-brocher">
                                    <p>Investment Policy</p>
                                    <i className="fa-light fa-cloud-arrow-down" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-brocher">
                                    <p>Company Details</p>
                                    <i className="fa-light fa-note" />
                                    </a>
                                    {/* single category end */}
                                </div>
                                </div>
                                {/* single bar end */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp service section end */}
        
    </div>
  )
}

export default ServiceDetails