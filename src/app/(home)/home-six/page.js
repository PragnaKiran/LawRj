
'use client';
import { useEffect } from 'react';
import BannerSix from "@/components/banner/BannerSix"
import Header from "@/components/header/HeaderFour"
import AboutOne from "@/components/about/AboutOne"
import ServiceFive from "@/components/service/ServiceFive"
import PortfolioFour from "@/components/portfolio/PortfolioFour"
import WorkingProcess from "@/components/workingprocess/ProcessOne"
import TestimonialsOne from "@/components/testimonials/TestimonialsOne"
import ContactOne from "@/components/contact/ContactOne"
import TeamOne from "@/components/team/TeamOne"
import BlogFive from "@/components/blog/BlogFive"
import FooterThree from "@/components/footer/FooterThree"
import BackTop from "@/components/footer/BackToTop"

function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Safely using `window`
      console.log('Window is available:', window.location.href);
    } else {
      console.log('Window is not available');
    }
  }, []);
  return (
    <div className="index-Six">
        <Header/>
        <BannerSix/>
        <AboutOne/>
        <ServiceFive/>
        <PortfolioFour/>
        <WorkingProcess/>
        <TestimonialsOne/>
        <ContactOne/>
        <TeamOne/>
        <BlogFive/>
        <FooterThree/>
        <BackTop/>
    </div>
  )
}

export default HomePage