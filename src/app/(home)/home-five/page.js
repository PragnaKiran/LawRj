
'use client';
import { useEffect } from 'react';
import HeaderFour from "@/components/header/HeaderFour"
import BannerFive from "@/components/banner/BannerFive"
import AboutOne from "@/components/about/AboutOne"
import ServiceFive from "@/components/service/ServiceFive"
import PortfolioFive from '../../../components/portfolio/PortfolioFive';
import ProcessTwo from "@/components/workingprocess/ProcessTwo"
import BlogFive from "@/components/blog/BlogFive"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop";
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
    <div className="index-Five">

        <HeaderFour/>
        <BannerFive/>
        <AboutOne/>
        <ServiceFive/>
        <PortfolioFive/>
        <ProcessTwo/>
        <BlogFive/>
        <FooterOne/>
        <BackTop/>

    </div>
  )
}

export default HomePage