import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuBuilding2 as Building2, LuUsers as Users, LuGlobe as Globe, LuShield as Shield, LuSmartphone as Smartphone, LuZap as Zap, LuTrendingUp as TrendingUp, LuHeadphones as Headphones, LuWallet as Wallet, LuShieldCheck as ShieldCheck, LuCreditCard as CreditCard, LuBanknote as Banknote, LuArrowLeft as ArrowLeft } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop } from "@/components/ScrollUtilities";

const services = [
  "UPI Collection", "Payout Solutions", "Aadhaar ATM", "Bharat QR",
  "Cash Management", "Money Remittance", "Insurance", "Travel Booking",
  "Bill Payments", "Micro ATM", "POS Systems",
];

const stats = [
  { label: "Partners", value: "13,000+", icon: Users },
  { label: "Transactions", value: "10M+", icon: CreditCard },
  { label: "States Covered", value: "28+", icon: Globe },
  { label: "Uptime", value: "99.9%", icon: Shield },
];

const features = [
  { icon: Zap, title: "Instant Onboarding", desc: "Seamless digital onboarding within minutes — no paperwork.", gradient: "from-primary to-secondary" },
  { icon: Smartphone, title: "Easy-to-Use App", desc: "Intuitive interface designed for everyone, from beginners to experts.", gradient: "from-secondary to-primary" },
  { icon: TrendingUp, title: "High Margins", desc: "Competitive commission structures with growing market demand.", gradient: "from-primary to-secondary" },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated customer support to resolve queries quickly.", gradient: "from-secondary to-primary" },
  { icon: ShieldCheck, title: "Bank-Grade Security", desc: "Advanced encryption and robust security protocols.", gradient: "from-primary to-secondary" },
  { icon: Wallet, title: "24×7 Wallet Top-up", desc: "Add funds anytime for uninterrupted transactions.", gradient: "from-secondary to-primary" },
];

const AboutPage = () => {
  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        {/* Hero */}
        <section className="container mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 size={14} />
              About Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MagniPay</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
              Magnipay Technologies Private Limited is a leading fintech company
              providing end-to-end payment solutions for businesses across India.
              We follow a B2B2C model, empowering retailers and partners to serve
              millions of customers with seamless digital financial services.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="container mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="neon-card p-6 text-center"
              >
                <s.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 px-2">
            {services.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20 text-sm font-medium hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="container mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MagniPay</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="neon-card p-7 group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${f.gradient} mb-4 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand */}
        <section className="container mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neon-card p-10 md:p-14 text-center max-w-3xl mx-auto"
          >
            <Banknote size={40} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Powered by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Utkal Digital</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Utkal Digital is the brand name under which Magnipay Technologies
              delivers its services. Built with the vision to digitise financial
              services for Bharat, we empower local entrepreneurs and retailers to
              become mini-banks in their communities.
            </p>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="container mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mission</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To make digital financial services accessible, affordable, and
              available to every corner of India — empowering businesses and
              communities with technology-driven payment solutions that are fast,
              secure, and reliable.
            </p>
          </motion.div>
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

export default AboutPage;
