
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"


import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

import Link from 'next/link';
function page() {
  return (
    <div className="service-details">
        <HeaderInner/>
        <Breadcrumb title="Latest News" activeItem="Latest News" />
         {/* tmp service section */}
         <div className="tmp-service-section tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="blog-details-left-area border-bottom">
                                <div className="thumbnail-top">
                                <img
                                    src="assets/images/blog/details/01.png"
                                    alt="Corporate_business"
                                />
                                </div>
                                <div className="blog-details-discription">
                                <div className="category-area">Sultan Ahmed / Consulting</div>
                                <h3 className="title split-collab">
                                    Earn good money and make you very successful
                                </h3>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem
                                    sollicitudin.
                                </p>
                                <p className="disc">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem
                                    sollicitudin, condiment diam sed.
                                </p>
                                </div>
                                <div className="quote-area-blog-details">
                                <i className="fa-sharp fa-regular fa-quote-left fa-lg" />
                                <p className="disc">
                                    Rockling Devario deep sea bonefish cutthroat trout streamer fish
                                    kaluga sailback scorpionfish sand dab, turkeyfish golden loach
                                    sand diver. Leopard danio píntano bonnet mouth.
                                </p>
                                <span className="author">David Miller</span>
                                </div>
                                <div className="blog-details-discription">
                                <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem
                                    sollicitudin.
                                </p>
                                <div className="short-feature-blog-details">
                                    <div className="single-feature">
                                    How will digital activities impact traditional manufacturing.
                                    </div>
                                    <div className="single-feature">
                                    I monitor my staff with software that takes screen.
                                    </div>
                                    <div className="single-feature">
                                    Minim veniam quis niacin sodium nostrud exer.
                                    </div>
                                    <div className="single-feature">
                                    Laoreet dolore magna niacin sodium glutimate.
                                    </div>
                                    <div className="single-feature">
                                    Narrow formal length my highly
                                    </div>
                                </div>
                                <p className="disc">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem
                                    sollicitudin, condiment diam sed.
                                </p>
                                </div>
                                <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="thumbnail-50">
                                    <img src="assets/images/blog/details/02.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="thumbnail-50">
                                    <img src="assets/images/blog/details/03.jpg" alt="" />
                                    </div>
                                </div>
                                </div>
                                <div className="blog-details-discription">
                                <p className="disc">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget ornare quam. Sed sit amet sem
                                    sollicitudin, condiment diam sed.
                                </p>
                                </div>
                            </div>
                            <div className="blog-details-bottom-area mt--40">
                                <div className="tag-socila-area-blgo-details">
                                <div className="left-tag">
                                    <span>Tag:</span>
                                    <div className="tag-wrapper">
                                    <div className="signle-wrapper">Algoritham</div>
                                    <div className="signle-wrapper">Data Science</div>
                                    </div>
                                </div>
                                <div className="social-blog-tag-area">
                                    <span>Search:</span>
                                    <ul>
                                    <li>
                                        <a href="#">
                                        <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa-brands fa-pinterest-p" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="author-comment-area">
                                <div className="thumbnail">
                                    <img
                                    src="assets/images/blog/details/04.jpg"
                                    alt="Corporate_Business"
                                    />
                                </div>
                                <div className="main-information-of-autonr">
                                    <h6 className="name">Md Jonny</h6>
                                    <p className="disc">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                                    eiusmod tempor sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium.
                                    </p>
                                    <div className="social-blog-tag-area">
                                    <ul>
                                        <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="fa-brands fa-pinterest-p" />
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="comment-area-main-wrapper mt--30">
                                <h3 className="title">Comments (3)</h3>
                                <div className="single-comment-audience border-bottom pb--30">
                                    <div className="author-image">
                                    <img
                                        src="assets/images/blog/details/05.png"
                                        alt="Corporate_business"
                                    />
                                    </div>
                                    <div className="right-area-commnet">
                                    <div className="top-area-comment">
                                        <div className="left">
                                        <h6 className="title">James Smith</h6>
                                        <span>March 20, 2024</span>
                                        </div>
                                        <button>
                                        <i className="fa-solid fa-share fa-flip-both fa-lg" />
                                        Reply
                                        </button>
                                    </div>
                                    <p className="disc mt--15">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate .
                                    </p>
                                    </div>
                                </div>
                                <div className="single-comment-audience border-bottom pb--30 pl--50 pl_sm--0">
                                    <div className="author-image">
                                    <img
                                        src="assets/images/blog/details/06.png"
                                        alt="Corporate_business"
                                    />
                                    </div>
                                    <div className="right-area-commnet">
                                    <div className="top-area-comment">
                                        <div className="left">
                                        <h6 className="title">Adom Smith</h6>
                                        <span>February 20, 2024</span>
                                        </div>
                                        <button>
                                        <i className="fa-solid fa-share fa-flip-both fa-lg" />
                                        Reply
                                        </button>
                                    </div>
                                    <p className="disc mt--15">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure.
                                    </p>
                                    </div>
                                </div>
                                <div className="single-comment-audience">
                                    <div className="author-image">
                                    <img
                                        src="assets/images/blog/details/07.png"
                                        alt="Corporate_business"
                                    />
                                    </div>
                                    <div className="right-area-commnet">
                                    <div className="top-area-comment">
                                        <div className="left">
                                        <h6 className="title">Mr Lee Smith</h6>
                                        <span>February 28, 2023</span>
                                        </div>
                                        <button>
                                        <i className="fa-solid fa-share fa-flip-both fa-lg" />
                                        Reply
                                        </button>
                                    </div>
                                    <p className="disc mt--15">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate .
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="blog-details-form-wrapper">
                                <h4 className="title">Leave A Comments</h4>
                                <span>
                                    Your email address will not be published. Required fields are
                                    marked *
                                </span>
                                <form action="#" className="blog-details-form">
                                    <div className="single-input">
                                    <input type="text" placeholder="Name" />
                                    <i className="fa-light fa-user" />
                                    </div>
                                    <div className="half-input-wrapper">
                                    <div className="single-input">
                                        <input type="text" placeholder="Email" />
                                        <i className="fa-light fa-envelope" />
                                    </div>
                                    <div className="single-input">
                                        <input type="text" placeholder="Website" />
                                        <i className="fa-light fa-globe" />
                                    </div>
                                    </div>
                                    <textarea placeholder="Write a Message" defaultValue={""} />
                                    <button className="tmp-btn btn-primary">Submit Comment</button>
                                </form>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 pl--50 pl_md--10 pl_sm--10 mt_md--50 mt_sm--50">
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
                                <div className="signle-side-bar recent-post">
                                <div className="header">
                                    <h3 className="title">Recent Post</h3>
                                </div>
                                <div className="body mt--50">
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <a href="#" className="thumbnail">
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
                                    </a>
                                    </div>
                                    {/* single blog-post  ed */}
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <a href="#" className="thumbnail">
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
                                    </a>
                                    </div>
                                    {/* single blog-post  ed */}
                                    {/* single blog-post sidevar */}
                                    <div className="single-blog-recent-post-sidebar">
                                    <a href="#" className="thumbnail">
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
                                    </a>
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
                                    <a href="Tel:1234567890">+(012)3456789</a>
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