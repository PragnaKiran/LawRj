"use client"; 
import Link from 'next/link';
function BlogSix() {
  return (
    <div>
    
        <>
        {/* Tmp Blog Area Start  */}
        <div className="tmp-blog-area tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title center-title">
                    <img
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                    />
                    <span className="subtitle">LATEST BLOG</span>
                    </div>
                    <h2 className="title split-collab">Latest News &amp; Articles</h2>
                </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-blog">
                    <div className="blog-inner">
                    <div className="thumbnail">
                        <Link href={'/BlogDetails'}>
                        <img  data-aos="move-right" data-aos-delay="100"
                            src="assets/images/blog/blog-12.png"
                            alt="Business Consulting Blog"
                        />
                        </Link>
                        <div className="pmt-blog-meta">
                        <ul className="all-meta">
                            <li className="date">
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
                            <h4 className="title">
                            Consulted admitting wooded is power acuteness.
                            </h4>
                        </Link>
                        <p className="description">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered.
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
                <div
                className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="single-blog">
                    <div className="blog-inner">
                    <div className="thumbnail">
                        <Link href={'/BlogDetails'}>
                        <img  data-aos="move-right" data-aos-delay="300"
                            src="assets/images/blog/blog-11.png"
                            alt="Business Consulting Blog"
                        />
                        </Link>
                        <div className="pmt-blog-meta">
                        <ul className="all-meta">
                            <li className="date">
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
                            <h4 className="title">
                            Grow your business strategy with business consulting.
                            </h4>
                        </Link>
                        <p className="description">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered.
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
            </div>
            </div>
        </div>
        {/* Tmp Blog Area Start  */}
        </>

    </div>
  )
}

export default BlogSix