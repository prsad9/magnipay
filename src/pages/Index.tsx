import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import OurPartnersSection from "@/components/OurPartnersSection";
import ServicesSection from "@/components/ServicesSection";
import CashbackAndRefundsSection from "@/components/CashbackAndRefundsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImageShowcase from "@/components/ImageShowcase";
import RefundPolicySection from "@/components/RefundPolicySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop, MobileCTA } from "@/components/ScrollUtilities";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
              <OurPartnersSection />
        <ImageShowcase />
        <ServicesMarquee />
  
        <HowItWorksSection />
        <ServicesSection />
        <CashbackAndRefundsSection />
        <FeaturesSection />
        <RefundPolicySection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <BackToTop />
      <MobileCTA />
    </div>
  );
};

export default Index;
