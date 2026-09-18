
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

                    {/* tmp service section */}
                    <div className="tmp-service-section tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            {/* single projects- column one */}
                            <div className="single-projects-one-col-1">
                                <Link href={'/BlogDetails'} className="thumbnail">
                                <img src="assets/images/blog/blog-07.jpg" alt="" />
                                </Link>
                                <div className="inner-blog-single">
                                <div className="inner">
                                    <div className="category">Sultan Ahmed / Consulting</div>
                                    <Link href={'/BlogDetails'}>
                                    <h3 className="title">
                                        Earn good money and make you very successful creative
                                        working
                                    </h3>
                                    </Link>
                                    <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                                    condiment diam sed, consequat tellus. Quisque ac odio eget
                                    ligula gravida.
                                    </p>
                                    <Link href={'/BlogDetails'} className="read-more-btn">
                                    Read more <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* single projects- column one end */}
                            {/* single projects- column one */}
                            <div className="single-projects-one-col-1">
                                <Link href={'/BlogDetails'} className="thumbnail">
                                <img src="assets/images/blog/blog-08.jpg" alt="" />
                                </Link>
                                <div className="inner-blog-single">
                                <div className="inner">
                                    <div className="category">Sultan Ahmed / Consulting</div>
                                    <Link href={'/BlogDetails'}>
                                    <h3 className="title">
                                        Earn good money and make you very successful creative
                                        working
                                    </h3>
                                    </Link>
                                    <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                                    condiment diam sed, consequat tellus. Quisque ac odio eget
                                    ligula gravida.
                                    </p>
                                    <Link href={'/BlogDetails'} className="read-more-btn">
                                    Read more <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* single projects- column one end */}
                            {/* single projects- column one */}
                            <div className="single-projects-one-col-1">
                                <Link href={'/BlogDetails'} className="thumbnail">
                                <img src="assets/images/blog/blog-09.jpg" alt="" />
                                </Link>
                                <div className="inner-blog-single">
                                <div className="inner">
                                    <div className="category">Sultan Ahmed / Consulting</div>
                                    <Link href={'/BlogDetails'}>
                                    <h3 className="title">
                                        Earn good money and make you very successful creative
                                        working
                                    </h3>
                                    </Link>
                                    <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                                    condiment diam sed, consequat tellus. Quisque ac odio eget
                                    ligula gravida.
                                    </p>
                                    <Link href={'/BlogDetails'} className="read-more-btn">
                                    Read more <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* single projects- column one end */}
                            {/* single projects- column one */}
                            <div className="single-projects-one-col-1">
                                <Link href={'/BlogDetails'} className="thumbnail">
                                <img src="assets/images/blog/blog-07.jpg" alt="" />
                                </Link>
                                <div className="inner-blog-single">
                                <div className="inner">
                                    <div className="category">Sultan Ahmed / Consulting</div>
                                    <Link href={'/BlogDetails'}>
                                    <h3 className="title">
                                        Earn good money and make you very successful creative
                                        working
                                    </h3>
                                    </Link>
                                    <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur eget ornare quam. Sed sit amet sem sollicitudin,
                                    condiment diam sed, consequat tellus. Quisque ac odio eget
                                    ligula gravida.
                                    </p>
                                    <Link href={'/BlogDetails'} className="read-more-btn">
                                    Read more <i className="fa-regular fa-arrow-right" />
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {/* single projects- column one end */}
                            {/* tmp pagination area start */}
                            <div className="tmp-pagination-area-next-pev">
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
                            {/* tmp pagination area end */}
                            </div>
                            <div className="col-lg-4 pl--50">
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
                                    <Link href="#" className="single-category">
                                    <p>Business Solution</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </Link>
                                    {/* single category end */}
                                    {/* single category */}
                                    <Link href="#" className="single-category">
                                    <p>Strategy Growth</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </Link>
                                    {/* single category end */}
                                    {/* single category */}
                                    <Link href="#" className="single-category">
                                    <p>Finance Solution</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </Link>
                                    {/* single category end */}
                                    {/* single category */}
                                    <Link href="#" className="single-category">
                                    <p>Investment Policy</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </Link>
                                    {/* single category end */}
                                    {/* single category */}
                                    <Link href="#" className="single-category">
                                    <p>Tax Manegment</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </Link>
                                    {/* single category end */}
                                </div>
                                </div>
                                {/* single bar end */}
                                <div className="signle-side-bar recent-post">
                                <div className="header">
                                    <h3 className="title">Recent Post</h3>
                                </div>
                                <div className="body mt--50">
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <Link href="#" className="thumbnail">
                                        <img src="assets/images/blog/blog-4.jpg" alt="blog-Post" />
                                        <div className="inner">
                                        <span className="post-time">
                                            <i className="fa-regular fa-clock" />
                                            12 Jan, 2023
                                        </span>
                                        <h6 className="title">
                                            Commanded household smallness delivered.
                                        </h6>
                                        </div>
                                    </Link>
                                    </div>
                                    {/* single blog-post  ed */}
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <Link href="#" className="thumbnail">
                                        <img src="assets/images/blog/blog-5.jpg" alt="blog-Post" />
                                        <div className="inner">
                                        <span className="post-time">
                                            <i className="fa-regular fa-clock" />
                                            12 Jan, 2023
                                        </span>
                                        <h6 className="title">
                                            Future Plan &amp; Strategy for Construction
                                        </h6>
                                        </div>
                                    </Link>
                                    </div>
                                    {/* single blog-post  ed */}
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <Link href="#" className="thumbnail">
                                        <img src="assets/images/blog/blog-6.jpg" alt="blog-Post" />
                                        <div className="inner">
                                        <span className="post-time">
                                            <i className="fa-regular fa-clock" />
                                            12 Jan, 2023
                                        </span>
                                        <h6 className="title">
                                            Melancholy particular devonshire alteration
                                        </h6>
                                        </div>
                                    </Link>
                                    </div>
                                    {/* single blog-post  ed */}
                                </div>
                                </div>
                                {/* single bar end */}
                                <div className="signle-side-bar tags">
                                <div className="header">
                                    <h3 className="title">Popular Tags</h3>
                                </div>
                                <div className="body mt--50">
                                    <div className="tags-wrapper-side-bar">
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Fashion</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Education</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Nation</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Studyt</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Health</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Food</button>
                                    </div>
                                    {/* sigle tags end */}
                                    {/* sigle tags */}
                                    <div className="signle-tag-side-bar">
                                        <button>Travel</button>
                                    </div>
                                    {/* sigle tags end */}
                                    </div>
                                </div>
                                </div>
                                {/* single bar */}
                                <div className="signle-side-bar call-to-action">
                                <div className="easy-call-to-action">
                                    <div className="icon-center-call">
                                    <i className="fa-light fa-phone" />
                                    </div>
                                    <h3 className="title animated fadeIn">Need any help?</h3>
                                    <p className="disc">
                                    We are here to help our customer any time. You can call on
                                    24/7 To Answer Your Question.
                                    </p>
                                    <Link href="Tel:1234567890">+(012)3456789</Link>
                                </div>
                                </div>
                                {/* single bar end */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp service section end */}                   

        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page