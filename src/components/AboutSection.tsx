import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, Headphones, ShieldCheck, Wallet, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Start in Minutes",
    desc: "No paperwork. No waiting around. Get up and running in just a few minutes. We've made onboarding so simple, it's almost boring.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Smartphone,
    title: "Built for Everyone",
    desc: "Whether you're new to financial apps or a pro, our interface just makes sense. Everything is where you'd expect it to be.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "You Grow, We Support It",
    desc: "The more your business grows, the more you earn with us. Generous margins. Transparent rates. It's that simple.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Headphones,
    title: "We're Actually Here to Help",
    desc: "Real people pick up when you call. No bots. No runaround. We solve problems, not create them.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: ShieldCheck,
    title: "Sleep Better at Night",
    desc: "Bank-level security means your money is safer than your bank account. Zero compromises on protection.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Wallet,
    title: "Available 24/7",
    desc: "Need funds at midnight? We're ready. Always. Your business doesn't sleep, so neither do we.",
    gradient: "from-secondary to-primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Premium gradient mesh */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }} />
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={12} />
            About Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Who We <span className="text-gradient">Really Are</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-pretty text-lg">
            We're a team of payment experts who got tired of watching businesses struggle with complicated payment systems. 
            So we built MagniPay—a platform that actually makes sense. Instant setup. Transparent pricing. Real people answering your calls.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
            Whether you're a small shop owner or scaling fast, MagniPay handles your payments so you can focus on what matters—growing your business.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Learn More About Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-5 sm:p-8 lg:p-10 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${f.gradient} mb-4
                group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
