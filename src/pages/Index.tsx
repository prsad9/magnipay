import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesMarquee from "@/components/ServicesMarquee";
import OurPartnersSection from "@/components/OurPartnersSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CashbackRewardsSection from "@/components/CashbackRewardsSection";
import ImageShowcase from "@/components/ImageShowcase";
import RefundPolicySection from "@/components/RefundPolicySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop, MobileCTA } from "@/components/ScrollUtilities";

const Index = () => {
  return (
    <div className="noise-overlay overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesMarquee />
        <OurPartnersSection />
        <ServicesSection />
        <FeaturesSection />
        <CashbackRewardsSection />
        <ImageShowcase />
        <RefundPolicySection />
        <HowItWorksSection />
        <AboutSection />
        <TestimonialsSection />
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
