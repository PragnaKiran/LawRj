"use client"; 
import React, { useState, useRef, useEffect } from 'react';
import Nav from "@/components/header/Nav"
import Link from 'next/link';

function HeaderFour() {


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
      
        const languages = [
          { lang: 'de', value: 'deutsch', label: 'Deutsch' },
          { lang: 'en', value: 'english', label: 'English' },
          { lang: 'fr', value: 'francais', label: 'Français' },
          { lang: 'it', value: 'italiano', label: 'Italiano' }
        ];
      
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
        


        <header className={`tmp-header-area-start header-two header-four header-five header--sticky ${isSticky ? 'sticky' : ''}`}>
            {/* header-top start */}
            <div className="header-top-one">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="header-top-inner">
                    <div className="left-information-area">
                        <p className="left-top">
                        <Link href={'tel:+4733378901'}>
                            <i className="fa-regular fa-phone" /> +00993264852
                        </Link>
                        </p>
                        <div className="location-area">
                        <i className="fa-light fa-location-dot" />
                        <Link href={'#'}>California, TX 70240</Link>
                        </div>
                        <div className="working-time">
                        <i className="fa-light fa-clock" />
                        <p>Working Hours: 9:00 AM – 8:00 PM</p>
                        </div>
                    </div>
                    <div className="right-header-top">
                        <div className="social-area-transparent">
                        <span>Follow on</span>
                        <Link href={'#'}>
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                        <Link href={'#'}>
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link href={'#'}>
                            <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        <Link href={'#'}>
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
                    {/* <Link href={'#'} class="tmp-btn btn-primary">Get Consulting</Link> */}
                    <div className="actions-area">
                    <Link href={'/Service'} className="tmp-btn btn-primary">
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


        <div id="side-hide" className={isMenuVisible ? 'show' : ''}>
            <div className="top-area">
                <a href="index.html" className="logo-area">
                <img src="assets/images/logo/logo-03.png" alt="logo" />
                </a>
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
                    <a href="#" className="number">
                        +92 (8800) - 98670
                    </a>
                    </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact-information-side">
                    <i className="fa-light fa-envelope" />
                    <div className="information">
                    <span>Mail Us</span>
                    <a href="#" className="number">
                        example@info.com
                    </a>
                    </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact-information-side">
                    <i className="fa-sharp fa-light fa-location-dot" />
                    <div className="information">
                    <span>Our Address</span>
                    <a href="#" className="number">
                        66 Broklyant, New York 3269
                    </a>
                    </div>
                </div>
                {/* single contact information end */}
                </div>
                {/* social area start */}
                <ul className="social-icons solid-social-icons rounded-social-icons">
                <li>
                    <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa-brands fa-linkedin-in" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa-brands fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="fa-brands fa-instagram" />
                    </a>
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
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(2)}>
                            Pages
                        </Link>
                        <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                          <li><Link href="/Appoinment">Appoinment</Link></li>
                          <li><Link href="/Project">Project</Link></li>
                          <li><Link href="/ProjectMesonary">Project Mesonary</Link></li>
                          <li><Link href="/ProjectMesonaryThree">Project Mesonary v2</Link></li>
                          <li><Link href="/ProjectSlider">Project Slider</Link></li>
                          <li><Link href="/ProjectDetails">Project Details</Link></li>
                          <li><Link href="/ProjectDetailsTwo">Project Details v2</Link></li>
                          <li><Link href="/TeamOne">Team</Link></li>
                          <li><Link href="/TeamTwo">Team Two</Link></li>
                          <li><Link href="/TeamDetails">Team Details</Link></li>
                          <li><Link href="/Pricing">Pricing</Link></li>
                          <li><Link href="/FaqOne">Faq</Link></li>
                          <li><Link href="/Error">Error</Link></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(4)}>
                            Blog
                        </Link>
                        <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                          <li><Link href="/Blog">Blog</Link></li>
                          <li><Link href="/BlogColOne">Blog Col 1</Link></li>
                          <li><Link href="/BlogColTwo">Blog Col 2</Link></li>
                          <li><Link href="/BlogDetails">Blog Details</Link></li>
                          <li><Link href="/BlogDetailsTwo">Blog Details v2</Link></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link href="#" className="main" onClick={() => toggleMenu(5)}>
                            Service
                        </Link>
                        <ul className={`submenu ${openMenu === 5 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                          <li><Link href="/Service">Service</Link></li>
                          <li><Link href="/ServiceDetails">Service Details</Link></li>
                        </ul>
                    </li>
                    
                    <li>
                        <Link href="#" className="main" onClick={() => toggleMenu(3)}>
                            Contact
                        </Link>
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

export default HeaderFour