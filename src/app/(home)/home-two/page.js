'use client';
import AboutTwo from "@/components/about/AboutTwo"
import BannerTwo from "@/components/banner/BannerTwo"
import BlogTwo from "@/components/blog/BlogTwo"
import ContactTwo from "@/components/contact/ContactTwo"
import FaqTwo from "@/components/faq/FaqTwo"
import BackTop from "@/components/footer/BackToTop"
import FooterTwo from "@/components/footer/FooterTwo"
import HeaderTwo from "@/components/header/HeaderTwo"
import PortfolioTwo from "@/components/portfolio/PortfolioTwo"
import Pricing from "@/components/pricing/Pricing"
import ServiceTwo from "@/components/service/ServiceTwo"
import TestimonialsTwo from "@/components/testimonials/TestimonialsTwo"
import WhychooseUs from "@/components/whychoose/WhychoseUs"
import { useEffect } from 'react';
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
    <div className="index-two">

        <HeaderTwo/>
        <BannerTwo/>
        <ServiceTwo/>
        <AboutTwo/>
        <FaqTwo/>
        <PortfolioTwo/>
        <Pricing/>
        <WhychooseUs/>
        <TestimonialsTwo/>
        <BlogTwo/>
        <ContactTwo/>
        <FooterTwo/>
        <BackTop/>
    </div>
  )
}

export default HomePage