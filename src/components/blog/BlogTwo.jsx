"use client"; 
import Link from 'next/link';
import Image from 'next/image';


function BlogTwo() {
  return (
    <div>

            {/* Start Blog Area   */}
            <div className="blog-area tmp-section-gap">
                <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                    <div className="inner">
                        <div className="section-head section-head-one-side text-align-left">
                        <div className="section-sub-title color-secondary">
                            <span className="subtitle">LATEST BLOG</span>
                        </div>
                        <h2 className="title split-collab">
                            Latest news &amp; <br /> articles from <br /> the blog
                        </h2>
                        </div>
                        <p
                        className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        eget ornare quam. Sed sit amet sem sollicitudin.
                        </p>
                        <div
                        className="single-blog blog-style-two">
                        <div className="blog-inner">
                            <div className="thumbnail">
                            <Link href={'/BlogDetails'}>
                                <Image data-aos="move-left" data-aos-delay="100" data-aos-duration="1000"  width={296} height={217}
                                src="/assets/images/blog/blog-1.png"
                                alt="Business Consulting Blog"
                                />
                            </Link>
                            <div className="pmt-blog-meta">
                                <ul className="all-meta">
                                <li className="date bg--secondary">
                                    <span>20</span>
                                </li>
                                <li className="month">
                                    <span>JAN</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="blog-content">
                            <div className="blog-head">
                                <span className="name">Sultan Ahmed</span>
                                <span className="designation">Consulting</span>
                            </div>
                            <div className="blog-body">
                                <Link href={'/BlogDetails'} className="title-area">
                                <h4 className="title sm-title">
                                    Consulted admitting wooded is power acuteness.
                                </h4>
                                </Link>
                            </div>
                            <Link className="btn-read-more" href={'/BlogDetails'}>
                                <span className="read-more-text">Read More</span>
                                <span className="read-more-icon">
                                <i className="fa-solid fa-arrow-right" />
                                </span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                    <div className="single-blog blog-style-two">
                        <div className="blog-inner">
                        <div className="thumbnail">
                            <Link href={'/BlogDetails'}>
                            <Image data-aos="move-left" data-aos-delay="100" data-aos-duration="1000"  width={623} height={455}
                                src="/assets/images/blog/blog-2.png"
                                alt="Business Consulting Blog"
                            />
                            </Link>
                            <div className="pmt-blog-meta">
                            <ul className="all-meta">
                                <li className="date bg--secondary">
                                <span>20</span>
                                </li>
                                <li className="month">
                                <span>JAN</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-head">
                            <span className="name">Sultan Ahmed</span>
                            <span className="designation">Consulting</span>
                            </div>
                            <div className="blog-body">
                            <Link href={'/BlogDetails'} className="title-area">
                                <h4 className="title lg-title">
                                Grow your siness strategy with business consulting.
                                </h4>
                            </Link>
                            <p className="description">
                                One order all scale sense her gay style wrote. Incommode our
                                not one ourselves residence. Shall there whose those stand
                                she end. So unaffected partiality indulgence dispatched to
                                of celebrated remarkably. Unfeeling are had allowance own
                                perceived .
                            </p>
                            </div>
                            <Link className="btn-read-more" href={'/BlogDetails'}>
                            <span className="read-more-text">Read More</span>
                            <span className="read-more-icon">
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                    <div
                        className="single-blog blog-style-two">
                        <div className="blog-inner">
                        <div className="thumbnail">
                            <Link href={'/BlogDetails'}>
                            <Image data-aos="move-left" data-aos-delay="100" data-aos-duration="1000"  width={296} height={217} 
                                src="/assets/images/blog/blog-3.png"
                                alt="Business Consulting Blog"
                            />
                            </Link>
                            <div className="pmt-blog-meta">
                            <ul className="all-meta">
                                <li className="date bg--secondary">
                                <span>20</span>
                                </li>
                                <li className="month">
                                <span>JAN</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-head">
                            <span className="name">Sultan Ahmed</span>
                            <span className="designation">Consulting</span>
                            </div>
                            <div className="blog-body">
                            <Link href={'/BlogDetails'} className="title-area">
                                <h4 className="title sm-title">
                                Facilis dolor eques about under official,presentism.
                                </h4>
                            </Link>
                            </div>
                            <Link className="btn-read-more" href={'/BlogDetails'}>
                            <span className="read-more-text">Read More</span>
                            <span className="read-more-icon">
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div
                        className="single-blog blog-style-two mt--30">
                        <div className="blog-inner">
                        <div className="thumbnail">
                            <Link href={'/BlogDetails'}>
                            <Image data-aos="move-left" data-aos-delay="100" data-aos-duration="1000"  width={296} height={217}
                                src="/assets/images/blog/blog-4.png"
                                alt="Business Consulting Blog"
                            />
                            </Link>
                            <div className="pmt-blog-meta">
                            <ul className="all-meta">
                                <li className="date bg--secondary">
                                <span>20</span>
                                </li>
                                <li className="month">
                                <span>JAN</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-head">
                            <span className="name">Sultan Ahmed</span>
                            <span className="designation">Consulting</span>
                            </div>
                            <div className="blog-body">
                            <Link href={'/BlogDetails'} className="title-area">
                                <h4 className="title sm-title">
                                Consulted admitting wooded is power acuteness.
                                </h4>
                            </Link>
                            </div>
                            <Link className="btn-read-more" href={'/BlogDetails'}>
                            <span className="read-more-text">Read More</span>
                            <span className="read-more-icon">
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* End Blog Area   */}
    </div>
  )
}

export default BlogTwo