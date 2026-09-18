"use client"; 
import React, { useState, useRef, useEffect } from 'react';
import Nav from "@/components/header/Nav"
import Link from 'next/link';

function HeaderInner() {



    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   // header side collups area start here


   const [isOpen, setIsOpen] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState('english');
   const pickerRef = useRef(null);
   

   
   useEffect(() => {
       const handleClickOutside = (event) => {
       if (pickerRef.current && !pickerRef.current.contains(event.target)) {
           setIsOpen(false);
       }
       };
   
       const handleKeyUp = (event) => {
       if (event.key === 'Escape') {
           setIsOpen(false);
       }
       };
   
       window.addEventListener('click', handleClickOutside);
       window.addEventListener('keyup', handleKeyUp);
   
       return () => {
       window.removeEventListener('click', handleClickOutside);
       window.removeEventListener('keyup', handleKeyUp);
       };
   }, []);
   
   const toggleDropdown = () => {
       setIsOpen(!isOpen);
   };
   
   const handleLanguageChange = (language) => {
       setSelectedLanguage(language.value);
       setIsOpen(false);
       // Handle redirection or other actions based on language selection
   };
   
   // side menu active
   const [isMenuVisible, setIsMenuVisible] = useState(false);
   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   
   const handleMenuToggle = () => {
       setIsMenuVisible(!isMenuVisible);
       setIsOverlayVisible(!isOverlayVisible);
   };
   
   const handleCloseMenu = () => {
       setIsMenuVisible(false);
       setIsOverlayVisible(false);
   };
   
   const handleOverlayClick = () => {
       setIsMenuVisible(false);
       setIsOverlayVisible(false);
   };
   
   
   
   // mobile menu
   const [openMenu, setOpenMenu] = useState(null);
   
   const toggleMenu = (menuhome) => {
       setOpenMenu(openMenu === menuhome ? null : menuhome);
   };


  return (
    <div>
        
        {/* tpm-header-area start */}
        <header className={`tmp-header-area-start header-two header-four header--sticky ${isSticky ? 'sticky' : ''}`}>
            {/* header-top start */}
            <div className="header-top-one">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="header-top-inner">
                    <div className="left-information-area">
                        <p className="left-top">
                        Using user feedback to creat a million dollar
                        </p>
                        <div className="location-area">
                        <i className="fa-light fa-location-dot" />
                        <Link href="#">California, TX 70240</Link>
                        </div>
                        <div className="working-time">
                        <i className="fa-light fa-clock" />
                        <p>Working Hours: 9:00 AM – 8:00 PM</p>
                        </div>
                    </div>
                    <div className="right-header-top">
                        <div className="social-area-transparent">
                        <span>Follow on</span>
                        <Link href="#">
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href="#">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href="#">
                            <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* header-top end */}
            {/* header mid area start */}
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="header-mida-area style-two ">
                    <div className="logo-area-start">
                    <Link href="/">
                        <img src="assets/images/logo/logo-03.png" alt="logo" />
                    </Link>
                    </div>
                    <Nav/>
                    {/* <Link href="#" class="tmp-btn btn-primary">Get Consulting</Link> */}
                    <div className="actions-area">
                    <Link href="#" className="tmp-btn btn-primary">
                        Get Started Now
                    </Link>
                    {/* <div class="menu-button" id="search">
                        <i class="fa-light fa-grid-2"></i>
                        </div> */}
                    <div className="tmp-side-collups-area" id="side-collups" onClick={handleMenuToggle}>
                        <svg
                        width={20}
                        height={16}
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <rect y={14} width={20} height={2} fill="#fff" />
                        <rect y={7} width={20} height={2} fill="#fff" />
                        <rect width={20} height={2} fill="#fff" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* header mid area end */}
        </header>
        {/* tpm-header-area end */}



        <div id="side-hide" className={isMenuVisible ? 'show' : ''}>
            <div className="top-area">
                <Link href="index.html" className="logo-area">
                <img src="assets/images/logo/logo-03.png" alt="logo" />
                </Link>
                <div className="close-icon-area">
                <div id="close-slide__main" onClick={handleOverlayClick}>
                    <i className="fa-solid fa-x" />
                </div>
                </div>
            </div>
            <div className="body">
                <h5 className="title">Transforming your ideas into digital reality</h5>
                <p className="disc">
                Sed ut perspiciatis unde omnis natus error voluptatem santium doloremque
                laudantium, totam rem aperiam, eaque.
                </p>
                <div className="short-contact-area-side-collups">
                {/* single contact information */}
                <div className="single-contact-information-side">
                    <i className="fa-solid fa-phone" />
                    <div className="information">
                    <span>Call Now</span>
                    <Link href="#" className="number">
                        +92 (8800) - 98670
                    </Link>
                    </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact-information-side">
                    <i className="fa-light fa-envelope" />
                    <div className="information">
                    <span>Mail Us</span>
                    <Link href="#" className="number">
                        example@info.com
                    </Link>
                    </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact-information-side">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <div className="information">
                    <span>Our Address</span>
                    <Link href="#" className="number">
                        66 Broklyant, New York 3269
                    </Link>
                    </div>
                </div>
                {/* single contact information end */}
                </div>
                {/* social area start */}
                <ul className="social-icons solid-social-icons rounded-social-icons">
                <li>
                    <Link href="#">
                    <i className="fa-brands fa-facebook-f" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                    <i className="fa-brands fa-linkedin-in" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                    <i className="fa-brands fa-twitter" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                    <i className="fa-brands fa-instagram" />
                    </Link>
                </li>
                </ul>
                {/* social area end */}
            </div>
            
            {/* mobile menu area start */}
            <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">
                <ul className="mainmenu metismenu" id="mobile-menu-active">


                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(1)}>
                            Home
                        </Link>
                        <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/home-one">
                                    Corporate Demo
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-two">
                                    Home Two
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-three">
                                    Home Three
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-four">
                                    Home Four
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-five">
                                    Home Five
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-six">
                                    Home Six
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-seven">
                                    Home Seven
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-eight">
                                    Home Eight
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-nine">
                                    Home Nine
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-ten">
                                    Home Ten
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/home-eleven">
                                    Home Eleven
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(2)}>
                            Pages
                        </Link>
                        <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/team">
                                    Affiliate
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/faq">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/book-a-demo">
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/free-audit">
                                    Whois
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/pricing">
                                    Partner
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/blog-list">
                                    Blog List
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/blog-grid-2">
                                    Blog Grid
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/support">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/pricing-two">
                                    Pricing Package
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/pricing-three">
                                    Pricing Comparison
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/signin">
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/business-mail">
                                    Business Mail
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/knowledgebase">
                                    Knowledgebase
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/blog-details">
                                    Blog Details
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/domain-checker">
                                    Domain Checker
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/ssl-certificate">
                                    SSL Certificates
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/data-center">
                                    Data Centers
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/technology">
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/domain-transfer">
                                    Domain Transfer
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/payment-method">
                                    Payment Method
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                            Hosting
                        </Link>
                        <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/shared-hosting">
                                    Shared Hosting
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/wordpress-hosting">
                                    WordPress Hosting
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/vps-hosting">
                                    VPS Hosting
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/reseller-hosting">
                                    Reseller Hosting
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/dedicated-hosting">
                                    Dedicated Hosting
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/cloud-hosting">
                                    Cloud Hosting
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(4)}>
                            Domain
                        </Link>
                        <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/domain-checker">
                                    Domain Checker
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/domain-transfer">
                                    Domain Transfer
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(5)}>
                            Technology
                        </Link>
                        <ul className={`submenu ${openMenu === 5 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/technology">
                                    Technology
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/data-center">
                                    Data Center
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/game-details">
                                    Game Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(6)}>
                            Help Center
                        </Link>
                        <ul className={`submenu ${openMenu === 6 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                            <li>
                                <Link className="mobile-menu-link" href="/knowledgebase">
                                    Knowledgebase
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="hosting-offer-one">
                                    Ads Banner
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/whois">
                                    Whois
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/support">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link className="mobile-menu-link" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            </div>
            {/* mobile menu area end */}
        </div>

        <div id="overlay_every-where" className={isOverlayVisible ? 'bgshow' : ''}
        onClick={handleOverlayClick}></div>

    </div>
  )
}

export default HeaderInner