import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Banknote, Fingerprint, CreditCard, ShoppingCart, HandCoins, Send,
  Shield, Plane, Zap, Gift, RefreshCcw, Lock, FileText, AlertCircle,
} from "lucide-react";

const services = [
  { icon: Banknote, label: "Collections", desc: "Accept payments instantly", gradient: "from-blue-500 to-indigo-600", target: "cat-collections", type: "scroll" },
  { icon: Fingerprint, label: "aadhar", desc: "Biometric payment access", gradient: "from-emerald-500 to-teal-600", target: "cat-aadhaar", type: "scroll" },
  { icon: CreditCard, label: "Banking", desc: "Payouts & fund transfers", gradient: "from-amber-500 to-orange-600", target: "cat-banking", type: "scroll" },
  { icon: ShoppingCart, label: "payments", desc: "Online & offline solutions", gradient: "from-indigo-500 to-blue-600", target: "cat-payment-services", type: "scroll" },
  { icon: HandCoins, label: "cash", desc: "Smart money management", gradient: "from-orange-500 to-red-600", target: "cat-cash-management", type: "scroll" },
  { icon: Send, label: "Money Remittance", desc: "Easy domestic transfer", gradient: "from-purple-500 to-violet-600", target: "cat-remittance", type: "scroll" },
  { icon: Shield, label: "Insurance", desc: "Coverage & protection", gradient: "from-sky-500 to-blue-600", target: "cat-insurance", type: "scroll" },
  { icon: Plane, label: "Travel", desc: "Ticket booking made easy", gradient: "from-violet-600 to-purple-700", target: "cat-travel", type: "scroll" },
  { icon: Zap, label: "bills", desc: "Recharges & utilities", gradient: "from-yellow-500 to-amber-600", target: "cat-bills", type: "scroll" },
  { icon: Gift, label: "rewards", desc: "Earn on every transaction", gradient: "from-pink-500 to-rose-600", target: "cat-rewards", type: "scroll" },
  { icon: RefreshCcw, label: "refunds", desc: "Instant refund process", gradient: "from-teal-500 to-emerald-600", target: "refund-policy-section", type: "scroll" },
  { icon: Lock, label: "Privacy Policy", desc: "Your data is protected", gradient: "from-blue-500 to-indigo-600", target: "/privacy-policy", type: "navigate" },
  { icon: FileText, label: "Terms of Service", desc: "Browse our terms", gradient: "from-purple-500 to-violet-600", target: "/terms-of-service", type: "navigate" },
];

const ServiceCard = ({ icon: Icon, label, desc, gradient, onClick }: { icon: React.ComponentType<{ size: number; className: string }>; label: string; desc: string; gradient: string; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="w-full group cursor-pointer select-none"
    onClick={onClick}
  >
    <div className="relative aspect-square rounded-2xl border border-border/40 bg-card/60 dark:bg-card/40 backdrop-blur-sm
                    flex flex-col items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 p-2 sm:p-2.5 lg:p-3.5
                    transition-all duration-300 overflow-hidden
                    hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]
                    hover:scale-[1.04] active:scale-[0.98]">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-300 rounded-2xl`} />
      
      {/* Icon container */}
      <div className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-lg sm:rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0
                       group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300`}>
        <Icon size={16} className="text-white sm:hidden" />
        <Icon size={18} className="text-white hidden sm:block lg:hidden" />
        <Icon size={20} className="text-white hidden lg:block" />
      </div>
      
      {/* Label */}
      <span className="relative z-10 text-[10px] sm:text-xs lg:text-sm font-semibold text-foreground text-center leading-tight line-clamp-1">
        {label}
      </span>

      {/* Description */}
      <span className="relative z-10 text-[7px] sm:text-[8px] lg:text-[10px] text-muted-foreground text-center leading-tight line-clamp-2">
        {desc}
      </span>
    </div>
  </motion.div>
);

const ServicesMarquee = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.type === "navigate") {
      navigate(service.target);
    } else {
      document.getElementById(service.target)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
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
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Everything You Need,{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
        </motion.div>
      </div>

      {/* 2-Row Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} onClick={() => handleServiceClick(s)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
