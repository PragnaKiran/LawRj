"use client"; 
import Link from 'next/link';
import Image from 'next/image';
function PortfolioTwo() {
  return (
    <div>
        
            {/* Start Portfolio area  */}
            <div className="portfolio-area portfolio-style-two tmp-section-gap">
                <div className="container">
                <div className="row mb--30">
                    <div className="col-lg-5 col-md-6">
                    <div className="inner">
                        <div className="section-head section-head-one-side text-align-left">
                        <div className="section-sub-title color-secondary" data-aos="fade-up" data-aos-delay="100">
                            <span className="subtitle">OUR PORTFOLIO</span>
                        </div>
                        <h2 className="title split-collab" data-aos="fade-up" data-aos-delay="300">
                            Let check our best <br /> recent work{" "}
                        </h2>
                        </div>
                        <p className="description" data-aos="fade-up" data-aos-delay="400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        eget ornare quam. Sed sit amet sem sollicitudin, condimentum diam
                        sed, consequat tellus. Quisque ac odio eget ligula gravida
                        efficitur. Nunc facilisis sagittis magna, non venenatis mauris
                        luctus quis.
                        </p>
                        <Link
                        href={'/Project'}
                        className="tmp-btn btn-with-icon btn-secondary" data-aos="move-right" data-aos-delay="100"
                        >
                        Our All Works
                        <i className="fa-light fa-arrow-right" />
                        </Link>
                    </div>
                    </div>
                    <div
                    className="col-lg-7 col-md-6 mt_md--80 mt_sm--50 ">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link href={'/ProjectDetails'} className="thumbnail">
                        <Image width={738} height={448} data-aos="move-right" data-aos-delay="100"
                            src="/assets/images/portfolio/portfolio-two-1.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag">
                        <div className="content">
                            <Link href={'/ProjectDetails'}>
                            <h3 className="name">Janet Phillips</h3>
                            </Link>
                            <div className="designation">Software Developer</div>
                        </div>
                        <Link
                            href={'/ProjectDetails'}
                            className="icon angle-roted border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link href={'/ProjectDetails'} className="thumbnail">
                        <Image width={405} height={425} data-aos="move-right" data-aos-delay="100"
                            src="/assets/images/portfolio/portfolio-two-2.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link href={'/ProjectDetails'}>
                            <h3 className="name">Doris Sharp</h3>
                            </Link>
                            <div className="designation">Chief Architect</div>
                        </div>
                        <Link
                            href={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link href={'/ProjectDetails'} className="thumbnail">
                        <Image width={405} height={425} data-aos="move-right" data-aos-delay="100"
                            src="/assets/images/portfolio/portfolio-two-3.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link href={'/ProjectDetails'}>
                            <h3 className="name">Sharon Willis</h3>
                            </Link>
                            <div className="designation">Software Engineer</div>
                        </div>
                        <Link
                            href={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div
                    className="col-lg-4 col-md-6">
                    <div
                        className="portfolio-inner"
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                    >
                        <Link href={'/ProjectDetails'} className="thumbnail">
                        <Image width={405} height={425} data-aos="move-right" data-aos-delay="100"
                            src="/assets/images/portfolio/portfolio-two-4.png"
                            alt="corporate business"
                        />
                        </Link>
                        <div className="portfolio-tag portfolio-md-tag">
                        <div className="content">
                            <Link href={'/ProjectDetails'}>
                            <h3 className="name">Gina Larsen</h3>
                            </Link>
                            <div className="designation">Product Manager</div>
                        </div>
                        <Link
                            href={'/ProjectDetails'}
                            className="icon icon--30 radius-circle border-none bg-color-white"
                        >
                            <i className="fa-solid fa-arrow-right transform-rotate-318" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Start Portfolio area  */}
    </div>
  )
}

export default PortfolioTwo