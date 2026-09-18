'use client';
import { useEffect } from 'react';
import BannerSeven from "@/components/banner/BannerSeven"
import HeaderFour from "@/components/header/HeaderFour"
import BackToTop from "@/components/footer/BackToTop"
import ServiceSix from "@/components/service/ServiceSix"
import AboutFive from "@/components/about/AboutFive"
import FunFacts from "@/components/funfacts/FunfactsTwo"
import ProcessThree from "@/components/workingprocess/ProcessThree"
import PortfolioSix from "@/components/portfolio/PortfolioSix"
import FaqThree from "@/components/faq/FaqThree"
import TeamFour from "@/components/team/TeamThree"
import LargeVideoTwo from "@/components/video/LargeVideoTwo"
import TestimonialsOne  from '@/components/testimonials/TestimonialsOne';
import ContactOne  from '@/components/contact/ContactOne';
import CtaTwo  from '@/components/cta/CtaTwo';
import BlogSix  from '@/components/blog/BlogSix';
import FooterOne  from '@/components/footer/FooterOne';
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
    <div className="index-seven">
        <HeaderFour/>
        <BannerSeven/>
        <ServiceSix/>
        <AboutFive/>
        <FunFacts/>
        <ProcessThree/>
        <PortfolioSix/>
        <FaqThree/>
        <TeamFour/>
        <LargeVideoTwo/>
        <TestimonialsOne/>
        <ContactOne/>
        <CtaTwo/>
        <BlogSix/>
        <FooterOne/>



        <BackToTop/>
    </div>
  )
}

export default HomePage