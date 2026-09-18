'use client';
import { useEffect } from 'react';
import BannerFour from "@/components/banner/BannerFour"
import HeaderFour from "@/components/header/HeaderFour"
import ServiceFour from "@/components/service/ServiceFour"
import BrandOne from "@/components/brand/BrandOne"
import AboutFour from "@/components/about/AboutFour"
import ServiceFIve from "@/components/service/ServiceFive"
import PortfolioFour from "@/components/portfolio/PortfolioFour"
import CounterOne from "@/components/counterup/CounterOne"
import ContactFour from "@/components/contact/ContactFour"
import BlogFour from "@/components/blog/BlogFour"
import TestimonialsFour from "@/components/testimonials/TestimonialsFour"
import TeamTwo from "@/components/team/TeamTwo"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import AOS from 'aos';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Whether animation should happen only once
      offset: 20,
    });
  }, []);
  return (
    <div className="index-four">

        <HeaderFour/>
        <BannerFour/>
        <ServiceFour/>
        <BrandOne/>
        <AboutFour/>
        <ServiceFIve/>
        <PortfolioFour/>
        <CounterOne/>
        <ContactFour/>
        <BlogFour/>
        <TestimonialsFour/>
        <TeamTwo/>
        <FooterOne/>
        <BackTop/>


    </div>
  )
}

export default HomePage