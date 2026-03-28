import { motion } from "framer-motion";
import {
  Banknote, Fingerprint, CreditCard, ShoppingCart, HandCoins, Send,
  Shield, Plane, Zap, Gift, RefreshCcw,
} from "lucide-react";

const services = [
  { icon: Banknote, label: "Collections", desc: "Accept payments instantly", gradient: "from-blue-500 to-indigo-600", target: "cat-collections" },
  { icon: Fingerprint, label: "aadhar", desc: "Biometric payment access", gradient: "from-emerald-500 to-teal-600", target: "cat-aadhaar" },
  { icon: CreditCard, label: "Banking", desc: "Payouts & fund transfers", gradient: "from-amber-500 to-orange-600", target: "cat-banking" },
  { icon: ShoppingCart, label: "payments", desc: "Online & offline solutions", gradient: "from-indigo-500 to-blue-600", target: "cat-payment-services" },
  { icon: HandCoins, label: "cash", desc: "Smart money management", gradient: "from-orange-500 to-red-600", target: "cat-cash-management" },
  { icon: Send, label: "Money Remittance", desc: "Easy domestic transfer", gradient: "from-purple-500 to-violet-600", target: "cat-remittance" },
  { icon: Shield, label: "Insurance", desc: "Coverage & protection", gradient: "from-sky-500 to-blue-600", target: "cat-insurance" },
  { icon: Plane, label: "Travel", desc: "Ticket booking made easy", gradient: "from-violet-600 to-purple-700", target: "cat-travel" },
  { icon: Zap, label: "bills", desc: "Recharges & utilities", gradient: "from-yellow-500 to-amber-600", target: "cat-bills" },
  { icon: Gift, label: "rewards", desc: "Earn on every transaction", gradient: "from-pink-500 to-rose-600", target: "cat-rewards" },
  { icon: RefreshCcw, label: "refunds", desc: "Instant refund process", gradient: "from-teal-500 to-emerald-600", target: "cat-refunds" },
];

const ServiceCard = ({ icon: Icon, label, desc, gradient, target }: { icon: React.ComponentType<{ size: number; className: string }>; label: string; desc: string; gradient: string; target: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="w-full group cursor-pointer select-none"
    onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "center" })}
  >
    <div className="relative aspect-square rounded-2xl border border-border/40 bg-card/60 dark:bg-card/40 backdrop-blur-sm
                    flex flex-col items-center justify-center gap-2 sm:gap-2.5 lg:gap-3 p-2.5 sm:p-3 lg:p-5
                    transition-all duration-300 overflow-hidden
                    hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]
                    hover:scale-[1.04] active:scale-[0.98]">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-300 rounded-2xl`} />
      
      {/* Icon container */}
      <div className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0
                       group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300`}>
        <Icon size={18} className="text-white sm:hidden" />
        <Icon size={22} className="text-white hidden sm:block lg:hidden" />
        <Icon size={26} className="text-white hidden lg:block" />
      </div>
      
      {/* Label */}
      <span className="relative z-10 text-xs sm:text-sm lg:text-base font-semibold text-foreground text-center leading-snug line-clamp-2">
        {label}
      </span>

      {/* Description */}
      <span className="relative z-10 text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground text-center leading-tight line-clamp-2">
        {desc}
      </span>
    </div>
  </motion.div>
);

const ServicesMarquee = () => {
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
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Everything You Need,{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
        </motion.div>
      </div>

      {/* 2-Row Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
