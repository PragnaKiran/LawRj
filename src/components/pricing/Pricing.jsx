"use client"; 
import Link from 'next/link';

function Pricing() {
  return (
    <div>

        {/* Start pricing area  */}
        <div className="pricing-area pricing-style-one tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head pb-40">
                    <div className="section-sub-title color-secondary  center-title">
                    <span>BEST PRICING</span>
                    </div>
                    <h2 className="section-title split-collab">
                    Flexible plans for small to fast- <br />
                    growing business
                    </h2>
                </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".1s">
                <div className="pricing-table pricing-style-one">
                    <div className="pricing-header">
                    <div className="pricing-header-inner">
                        <h3 className="title">Basic Plan</h3>
                        <div className="price-wrap">
                        <div className="monthly-pricing">
                            <div className="amount">
                            <span className="dolour">$</span>29.
                            <span className="zero">00</span>
                            </div>
                            <span className="duration">Per Monthly</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pricing-body">
                    <ul className="plan-offer-list">
                        <li>
                        <i className="fa-light fa-check" />
                        Business Consulting
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        24/7 Customer Support
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Business Planning
                        </li>
                        <li className="off">
                        <i className="fa-sharp fa-light fa-xmark" />
                        Digital Business Solution
                        </li>
                        <li className="off">
                        <i className="fa-sharp fa-light fa-xmark" />
                        Human Research
                        </li>
                    </ul>
                    </div>
                    <div className="pricing-bottom">
                    <div className="pricing-btn">
                        <a href="#" className="tmp-btn">
                        Purchase Plan
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="pricing-table pricing-style-one">
                    <div className="pricing-header">
                    <div className="pricing-header-inner">
                        <h3 className="title">Premium Plan</h3>
                        <div className="price-wrap">
                        <div className="monthly-pricing">
                            <div className="amount">
                            <span className="dolour">$</span>59.
                            <span className="zero">00</span>
                            </div>
                            <span className="duration">Per Monthly</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pricing-body">
                    <ul className="plan-offer-list">
                        <li>
                        <i className="fa-light fa-check" />
                        Business Consulting
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        24/7 Customer Support
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Business Planning
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Digital Business Solution
                        </li>
                        <li className="off">
                        <i className="fa-sharp fa-light fa-xmark" />
                        Human Research
                        </li>
                    </ul>
                    </div>
                    <div className="pricing-bottom">
                    <div className="pricing-btn">
                        <a href="#" className="tmp-btn">
                        Purchase Plan
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInLeft" data-wow-duration=".8s" data-wow-delay=".3s">
                <div className="pricing-table pricing-style-one">
                    <div className="pricing-header">
                    <div className="pricing-header-inner">
                        <h3 className="title">Advanced Plan</h3>
                        <div className="price-wrap">
                        <div className="monthly-pricing">
                            <div className="amount">
                            <span className="dolour">$</span>89.
                            <span className="zero">00</span>
                            </div>
                            <span className="duration">Per Monthly</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pricing-body">
                    <ul className="plan-offer-list">
                        <li>
                        <i className="fa-light fa-check" />
                        Business Consulting
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        24/7 Customer Support
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Business Planning
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Digital Business Solution
                        </li>
                        <li>
                        <i className="fa-light fa-check" />
                        Human Research
                        </li>
                    </ul>
                    </div>
                    <div className="pricing-bottom">
                    <div className="pricing-btn">
                        <a href="#" className="tmp-btn">
                        Purchase Plan
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End pricing area  */}

    </div>
  )
}

export default Pricing