import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Banknote, Fingerprint, CreditCard, ShoppingCart, HandCoins, Send,
  Shield, Plane, Zap, Gift, RefreshCcw, Lock, Scroll, FileText,
} from "lucide-react";

const services = [
  { icon: Banknote, label: "Collections", desc: "Accept payments instantly", gradient: "from-brand-blue to-brand-light-blue", target: "cat-collections", type: "section" },
  { icon: Fingerprint, label: "aadhar", desc: "Biometric payment access", gradient: "from-brand-green to-brand-dark-green", target: "cat-aadhaar", type: "section" },
  { icon: CreditCard, label: "Banking", desc: "Payouts & fund transfers", gradient: "from-brand-dark-blue to-brand-blue", target: "cat-banking", type: "section" },
  { icon: ShoppingCart, label: "payments", desc: "Online & offline solutions", gradient: "from-brand-light-blue to-brand-blue", target: "cat-payment-services", type: "section" },
  { icon: HandCoins, label: "cash", desc: "Smart money management", gradient: "from-brand-dark-blue to-brand-dark-green", target: "cat-cash-management", type: "section" },
  { icon: Send, label: "Money Remittance", desc: "Easy domestic transfer", gradient: "from-brand-blue to-brand-green", target: "cat-remittance", type: "section" },
  { icon: Shield, label: "Insurance", desc: "Coverage & protection", gradient: "from-brand-green to-brand-light-green", target: "cat-insurance", type: "section" },
  { icon: Lock, label: "Privacy Policy", desc: "Your data protection", gradient: "from-brand-green to-brand-dark-green", target: "/privacy", type: "page" },
  { icon: Scroll, label: "Terms of Service", desc: "Terms & conditions", gradient: "from-brand-dark-blue to-brand-blue", target: "/terms", type: "page" },
  { icon: FileText, label: "Refund Policy", desc: "Refund & returns", gradient: "from-brand-blue to-brand-green", target: "/refund", type: "page" },
  { icon: Plane, label: "Travel", desc: "Ticket booking made easy", gradient: "from-brand-dark-blue to-brand-green", target: "cat-travel", type: "section" },
  { icon: Zap, label: "bills", desc: "Recharges & utilities", gradient: "from-brand-light-blue to-brand-green", target: "cat-bills", type: "section" },
  { icon: Gift, label: "rewards", desc: "Earn on every transaction", gradient: "from-brand-green to-brand-light-green", target: "cat-rewards", type: "section" },
  { icon: RefreshCcw, label: "refunds", desc: "Instant refund process", gradient: "from-brand-blue to-brand-green", target: "cat-refunds", type: "section" },
];

const ServiceCard = ({ icon: Icon, label, desc, gradient, target, type }: { icon: typeof Banknote; label: string; desc: string; gradient: string; target: string; type: string }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (type === "page") {
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  
  return (
  <div
    className="w-full group cursor-pointer select-none"
    onClick={handleClick}
  >
    <div className="relative aspect-square rounded-2xl border border-border/50 dark:border-white/10 bg-card/80 dark:bg-white/[0.02] backdrop-blur-md
                    flex flex-col items-center justify-center gap-3 p-5
                    transition-all duration-300 overflow-hidden
                    hover:border-primary/60 dark:hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(31,111,169,0.18)] dark:hover:shadow-[0_12px_40px_rgba(59,143,196,0.24)]
                    hover:scale-[1.05] active:scale-[0.98]">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-300 rounded-2xl`} />
      
      {/* Icon container */}
      <div className={`relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-md
                       group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] group-hover:scale-[1.15] transition-all duration-300`}>
        <Icon size={22} className="text-white sm:hidden" />
        <Icon size={24} className="text-white hidden sm:block" />
      </div>
      
      {/* Label */}
      <span className="relative z-10 text-sm sm:text-base font-semibold text-foreground text-center leading-snug transition-colors duration-300 line-clamp-1">
        {label}
      </span>

      {/* Description */}
      <span className="relative z-10 text-[11px] sm:text-xs text-muted-foreground text-center leading-relaxed transition-colors duration-300 line-clamp-2">
        {desc}
      </span>
    </div>
  </div>
);
};

const ServicesMarquee = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-3">
            All-in-One Platform
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything You Need,{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
        </motion.div>
      </div>

      {/* Grid layout - 7 columns on 2 rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-5 lg:gap-6 place-items-center lg:place-items-stretch">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
