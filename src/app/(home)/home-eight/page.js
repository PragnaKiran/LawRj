'use client';
import { useEffect } from 'react';
import HeaderFive from "@/components/header/HeaderFive"
import BannerEight from "@/components/banner/BannerEight"
import ServiceFour from "@/components/service/ServiceFour"
import FunfactsThree from "@/components/funfacts/FunfactsThree"
import BackToTop from "@/components/footer/BackToTop"
import AboutSix from "@/components/about/AboutSix"
import PortfolioSeven  from '@/components/portfolio/PortfolioSeven';
import BrandTwo from "@/components/brand/BrandTwo"
import FooterThree from '@/components/footer/FooterThree';
import AOS from 'aos';

function HomePageEight() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Whether animation should happen only once
      offset: 20,
    });
  }, []);
  return (
    <div className="index-eight">
        <HeaderFive/>
        <BannerEight/>
        <ServiceFour/>
        <AboutSix/>
        <FunfactsThree/>
        <PortfolioSeven/>
        <BrandTwo/>
        <FooterThree/>



        <BackToTop/>
    </div>
  )
}

export default HomePageEight