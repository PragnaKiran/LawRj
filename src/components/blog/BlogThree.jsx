"use client"; 
import Link from 'next/link';



function BlogThree() {

  return (
    <div>
        
        {/* Tmp Blog Area Start  */}
        <div className="tmp-blog-area tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="header-top-inner">
                    <div className="section-head pb--30  text-align-left">
                    <span className="subtitle color-gradiant">LATEST BLOG</span>
                    <h2 className="title split-collab">Latest news &amp; articles</h2>
                    </div>
                    <div className="btn-group">
                    <Link href={'Project'} className="tmp-btn btn-gradiant">
                        View All Post
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            <div className="row g-5 mt--10">
                <div
                className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
                <div className="single-blog blog-style-three">
                    <div className="blog-inner">
                    <div className="thumbnail">
                        <Link href={'/BlogDetails'}>
                        <img
                            src="assets/images/blog/blog-1.png"
                            alt="Business Consulting Blog"
                        />
                        </Link>
                    </div>
                    <div className="blog-content text-center">
                        <div className="blog-head">
                        <span className="name">20 JAN 2023</span>
                        <span className="designation">Consulting</span>
                        </div>
                        <div className="blog-body">
                        <Link href={'/BlogDetails'} className="title-area">
                            <h4 className="title">
                            Consulted admitting wooded is power acuteness.
                            </h4>
                        </Link>
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
                <div
                className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="300">
                <div className="single-blog blog-style-three">
                    <div className="blog-inner">
                    <div className="thumbnail">
                        <Link href={'/BlogDetails'}>
                        <img
                            src="assets/images/blog/blog-2.png"
                            alt="Business Consulting Blog"
                        />
                        </Link>
                    </div>
                    <div className="blog-content text-center">
                        <div className="blog-head">
                        <span className="name">20 JAN 2023</span>
                        <span className="designation">Consulting</span>
                        </div>
                        <div className="blog-body">
                        <Link href={'/BlogDetails'} className="title-area">
                            <h4 className="title">
                            Grow your business strategy with business consulting.
                            </h4>
                        </Link>
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
                <div
                className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="500">
                <div className="single-blog blog-style-three">
                    <div className="blog-inner">
                    <div className="thumbnail">
                        <Link href={'/BlogDetails'}>
                        <img
                            src="assets/images/blog/blog-3.png"
                            alt="Business Consulting Blog"
                        />
                        </Link>
                    </div>
                    <div className="blog-content text-center">
                        <div className="blog-head">
                        <span className="name">20 JAN 2023</span>
                        <span className="designation">Consulting</span>
                        </div>
                        <div className="blog-body">
                        <Link href={'/BlogDetails'} className="title-area">
                            <h4 className="title">
                            Facilis dolor eques about under official,presentism.
                            </h4>
                        </Link>
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
        </div>
        {/* Tmp Blog Area Start  */}

    </div>
  )
}

export default BlogThree