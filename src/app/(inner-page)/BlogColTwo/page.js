
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

import Link from 'next/link';
function page() {
  return (
    <div className="index-one">
        <HeaderInner/>
        <Breadcrumb title="Latest News" activeItem="Latest News" />
                    {/* latest blog area start */}
                    <div className="altest-blog-area tmp-section-gap">
                        <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-blog">
                                <div className="blog-inner">
                                <div className="thumbnail">
                                    <Link href={'/BlogDetails'}>
                                    <img
                                        src="assets/images/blog/blog-2.png"
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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-blog">
                                <div className="blog-inner">
                                <div className="thumbnail">
                                    <Link href={'/BlogDetails'}>
                                    <img
                                        src="assets/images/blog/blog-3.png"
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
                                        Professional Theme Portfolio Compilation with Man
                                        organaixation.
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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-blog">
                                <div className="blog-inner">
                                <div className="thumbnail">
                                    <Link href={'/BlogDetails'}>
                                    <img
                                        src="assets/images/blog/blog-4.png"
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
                                        Moralization Theme Portfolio Compilation with Man
                                        organaixation.
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
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="single-blog">
                                <div className="blog-inner">
                                <div className="thumbnail">
                                    <Link href={'/BlogDetails'}>
                                    <img
                                        src="assets/images/blog/blog-5.png"
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
                                        Morning Theme Portfolio Compilation with Man
                                        organaixation.
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
                            <div className="tmp-pagination-area-next-pev mt--50">
                            <button>
                                <i className="fa-regular fa-chevron-left" />
                            </button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>
                                <i className="fa-sharp fa-regular fa-chevron-right" />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* latest blog area end */}
                   
        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page