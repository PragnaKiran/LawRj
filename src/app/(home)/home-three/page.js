
'use client';
import { useEffect } from 'react';
import HeaderThree from "@/components/header/HeaderThree"
import BannerThree from "@/components/banner/BannerThree"
import ServiceThree from "@/components/service/ServiceThree"
import Skill from "@/components/skill/Skill"
import AboutThree from "@/components/about/AboutThree"
import PortfolioThree from "@/components/portfolio/PortfolioThree"
import ContactThree from "@/components/contact/ContactThree"
import TestimonialsThree from "@/components/testimonials/TestimonialsThree"
import LargeVideo from "@/components/video/LargeVideo"
import BlogThree from "@/components/blog/BlogThree"
import CtaOne from "@/components/cta/CtaOne"
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
    <div className="index-three">

        <HeaderThree/>
        <BannerThree/>
        <ServiceThree/>
        <Skill/>
        <AboutThree/>
        <PortfolioThree/>
        <ContactThree/>
        <TestimonialsThree/>
        <LargeVideo/>
        <BlogThree/>
        <CtaOne/>
        <FooterOne/>
        <BackTop/>

    </div>
  )
}

export default HomePage