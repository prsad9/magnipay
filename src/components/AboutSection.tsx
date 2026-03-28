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
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            About Us
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5">
            Who We <span className="text-gradient">Really Are</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3 text-pretty text-sm sm:text-base">
            We're a team of payment experts who built MagniPay to make payments simple, transparent, and actually work for your business.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-3 sm:p-4 group flex flex-col"
            >
              <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${f.gradient} mb-2.5 w-fit
                group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300`}>
                <f.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xs sm:text-sm mb-1.5 leading-snug line-clamp-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug line-clamp-2 flex-grow">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
