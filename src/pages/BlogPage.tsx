import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone, Shield, TrendingUp, CreditCard, Globe, Zap, Wallet,
  Users, Banknote, ArrowRight, ArrowLeft, BookOpen, QrCode, Landmark,
  Wifi, IndianRupee, BadgeCheck, ShieldCheck, PiggyBank
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop } from "@/components/ScrollUtilities";

const articles = [
  { icon: Smartphone, title: "The Rise of Mobile Payments in India", tag: "Trends", desc: "How smartphones are transforming financial transactions for millions of Indians, driving a cashless revolution from metros to villages.", link: "https://www.npci.org.in/" },
  { icon: Shield, title: "Securing Digital Transactions: Best Practices", tag: "Security", desc: "Essential security measures every digital payment user should know — from two-factor authentication to encryption standards.", link: "https://www.rbi.org.in/" },
  { icon: QrCode, title: "UPI: India's Payment Revolution", tag: "Technology", desc: "How the Unified Payments Interface became the backbone of India's digital payment ecosystem, processing billions of transactions monthly.", link: "https://www.npci.org.in/what-we-do/upi/product-overview" },
  { icon: TrendingUp, title: "Fintech Trends Shaping 2026", tag: "Industry", desc: "From embedded finance to AI-powered fraud detection — the key fintech trends defining the industry this year.", link: "https://www.fintechfutures.com/" },
  { icon: CreditCard, title: "The Evolution of POS Systems", tag: "Technology", desc: "From bulky card swipers to sleek Android terminals — how Point of Sale technology has evolved for modern merchants.", link: "https://www.visa.co.in/" },
  { icon: Globe, title: "Digital Financial Inclusion in Rural India", tag: "Impact", desc: "How fintech companies are bridging the rural-urban divide by bringing banking services to India's remotest corners.", link: "https://www.pmjdy.gov.in/" },
  { icon: Zap, title: "Instant Onboarding: The Future of Merchant Services", tag: "Innovation", desc: "Why paperless, instant onboarding is becoming the gold standard for merchant acquisition in fintech.", link: "https://razorpay.com/blog/" },
  { icon: Wallet, title: "Digital Wallets vs Bank Accounts: What's Better?", tag: "Guide", desc: "A comprehensive comparison of digital wallets and traditional bank accounts for everyday transactions.", link: "https://www.rbi.org.in/" },
  { icon: Users, title: "Building a Partner Network in Fintech", tag: "Business", desc: "Strategies for creating and scaling a successful partner distribution network in financial services.", link: "https://yourstory.com/topic/fintech" },
  { icon: Banknote, title: "The Micro ATM Revolution", tag: "Innovation", desc: "How Micro ATMs are becoming the lifeline for cash access in underserved regions across India.", link: "https://www.npci.org.in/" },
  { icon: Landmark, title: "RBI Guidelines for Digital Payments", tag: "Regulation", desc: "Understanding the regulatory framework governing digital payments and what it means for businesses and consumers.", link: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx" },
  { icon: Wifi, title: "Offline Payments: The Next Frontier", tag: "Technology", desc: "How NFC and USSD-based offline payment solutions are ensuring financial access even without internet connectivity.", link: "https://www.npci.org.in/" },
  { icon: IndianRupee, title: "Understanding Payment Gateway Charges", tag: "Guide", desc: "A breakdown of transaction fees, MDR, and other charges in the digital payment ecosystem.", link: "https://razorpay.com/blog/" },
  { icon: BadgeCheck, title: "KYC in the Digital Age", tag: "Compliance", desc: "How e-KYC and video-KYC are simplifying customer verification while maintaining compliance standards.", link: "https://www.rbi.org.in/" },
  { icon: ShieldCheck, title: "Fraud Prevention in Digital Payments", tag: "Security", desc: "Advanced AI and machine-learning techniques being used to detect and prevent payment fraud in real time.", link: "https://www.npci.org.in/" },
  { icon: PiggyBank, title: "The Insurance Distribution Opportunity", tag: "Business", desc: "How fintech platforms are enabling retail partners to sell insurance products and earn additional commissions.", link: "https://www.irdai.gov.in/" },
  { icon: Globe, title: "CBDC and the Digital Rupee", tag: "Future", desc: "India's Central Bank Digital Currency initiative and how it could reshape the payments landscape.", link: "https://www.rbi.org.in/" },
  { icon: TrendingUp, title: "Scaling a Fintech Startup in India", tag: "Business", desc: "Key lessons from successful Indian fintech companies on building scalable payment infrastructure.", link: "https://yourstory.com/topic/fintech" },
];

const tagColors: Record<string, string> = {
  Trends: "bg-[#1F6FA9]/10 text-[#1F6FA9] border-[#1F6FA9]/20",
  Security: "bg-[#1B4F7A]/10 text-[#1B4F7A] border-[#1B4F7A]/20",
  Technology: "bg-[#3B8FC4]/10 text-[#3B8FC4] border-[#3B8FC4]/20",
  Industry: "bg-[#1B4F7A]/10 text-[#1B4F7A] border-[#1B4F7A]/20",
  Impact: "bg-[#6BBF59]/12 text-[#4A9E3E] border-[#6BBF59]/20",
  Innovation: "bg-[#3B8FC4]/10 text-[#1F6FA9] border-[#3B8FC4]/20",
  Guide: "bg-[#1F6FA9]/10 text-[#1F6FA9] border-[#1F6FA9]/20",
  Business: "bg-[#4A9E3E]/10 text-[#4A9E3E] border-[#4A9E3E]/20",
  Regulation: "bg-[#1B4F7A]/10 text-[#1B4F7A] border-[#1B4F7A]/20",
  Compliance: "bg-[#6BBF59]/12 text-[#4A9E3E] border-[#6BBF59]/20",
  Future: "bg-[#8FD97A]/15 text-[#4A9E3E] border-[#8FD97A]/30",
};

const BlogPage = () => {
  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Hero */}
        <section className="container mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
              <BookOpen size={14} />
              Blog
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Insights &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Knowledge
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest trends, guides, and insights from the world of
              fintech and digital payments.
            </p>
          </motion.div>
        </section>

        {/* Articles Grid */}
        <section className="container mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((a, i) => (
              <motion.a
                key={a.title}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="neon-card p-6 group hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                    <a.icon size={20} className="text-primary" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${tagColors[a.tag] || "bg-primary/10 text-primary border-primary/20"}`}>
                    {a.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {a.desc}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Read More <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link to="/#contact" className="btn-cta !px-8 !py-3 text-center">
              Contact Us
            </Link>
            <Link to="/#contact" className="px-8 py-3 rounded-xl border border-primary/30 font-semibold hover:bg-primary/5 transition-all duration-300 text-center">
              Become a Partner
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-border/50 font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPage;
