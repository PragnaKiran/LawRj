"use client"; 
import Link from 'next/link';
import Image from 'next/image';

function ServiceTwo() {

  return (
    <div>
        {/* Start Service Area  */}
        <div className="service-area tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title color-secondary  center-title">
                    <span>OUR SERVICES</span>
                    </div>
                    <h2 className="section-title split-collab">
                    Our provided services
                    </h2>
                </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-1.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Business Stratagy</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-2.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Investment Advisory</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-3.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Data Analysis</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-4.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Saving &amp; Investments</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-5.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Website Design</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
                <div
                className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                <div className="service-inner financial-service-inner">
                    <div className="icon">
                    <Image width={60} height={60}
                        src="/assets/images/services/service-icon-6.png"
                        alt="corporate Business Services"
                    />
                    </div>
                    <div className="content">
                    <h2 className="title">Mutual Funds</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod.
                    </p>
                    <div className="three--dot">
                        <div className="dot dot-one" />
                        <div className="dot dot-two" />
                        <div className="dot dot-two" />
                    </div>
                    </div>
                    <Link href={'/ServiceDetails'} className="over_link" ></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* End Service Area  */}
    </div>
  )
}

export default ServiceTwo