"use client"
import Header from "@/components/header/HeaderOne"
import BannerOne from "@/components/banner/BannerOne"
import AboutOne from "@/components/about/AboutOne"
import ServiceOne from "@/components/service/ServiceOne"
import WorkingProcess from "@/components/workingprocess/ProcessOne"
import FaqOne from "@/components/faq/FaqOne"
import FunfactsOne from "@/components/funfacts/FunfactsOne"
import IndiaBridgeOne from "@/components/bridge/IndiaBridgeOne"
import TestimonialsOne from "@/components/testimonials/TestimonialsOne"
import ContactOne from "@/components/contact/ContactOne"
import FooterOne from "@/components/footer/FooterOne"
import BackToTop from "@/components/footer/BackToTop"
import { useEffect } from 'react';
import AOS from 'aos';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 20,
    });
  }, []);

  return (
    <div className="index-one">
      <Header />
      <BannerOne />
      <AboutOne />
      <ServiceOne />
      <WorkingProcess />
      <IndiaBridgeOne />
      <FunfactsOne />
      <TestimonialsOne />
      <FaqOne />
      <ContactOne />
      <FooterOne />
      <BackToTop />
    </div>
  )
}

export default HomePage