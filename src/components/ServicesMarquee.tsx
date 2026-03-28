import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Banknote, Fingerprint, CreditCard, ShoppingCart, HandCoins, Send,
  Shield, Plane, Zap, Gift, RefreshCcw, Lock, FileText, AlertCircle,
} from "lucide-react";

const services = [
  { icon: Banknote, label: "Collections", desc: "Accept payments instantly", fullDesc: "Accept payments from customers instantly with our Collections service. Support all major payment modes including cards, UPI, wallets, and bank transfers. Get real-time notifications and automatic reconciliation.", gradient: "from-blue-500 to-indigo-600", target: "cat-collections" },
  { icon: Fingerprint, label: "aadhar", desc: "Biometric payment access", fullDesc: "Enable contactless payments with biometric verification. Aadhaar-based payments offer enhanced security and faster transaction processing for your customers.", gradient: "from-emerald-500 to-teal-600", target: "cat-aadhaar" },
  { icon: CreditCard, label: "Banking", desc: "Payouts & fund transfers", fullDesc: "Instant payouts and fund transfers to any bank account in India. Bulk transfer capabilities, instant settlement, and comprehensive reporting for your business needs.", gradient: "from-amber-500 to-orange-600", target: "cat-banking" },
  { icon: ShoppingCart, label: "payments", desc: "Online & offline solutions", fullDesc: "Complete payment solutions for both online and offline channels. Accept payments on your website, mobile app, or through physical payment terminals.", gradient: "from-indigo-500 to-blue-600", target: "cat-payment-services" },
  { icon: HandCoins, label: "cash", desc: "Smart money management", fullDesc: "Intelligent cash management tools to help you optimize liquidity. Track cash flow, manage working capital, and get smart recommendations for better financial health.", gradient: "from-orange-500 to-red-600", target: "cat-cash-management" },
  { icon: Send, label: "Money Remittance", desc: "Easy domestic transfer", fullDesc: "Send money domestically with ease. Fast, reliable, and secure transfers with competitive rates. Perfect for business payouts and personal transfers.", gradient: "from-purple-500 to-violet-600", target: "cat-remittance" },
  { icon: Shield, label: "Insurance", desc: "Coverage & protection", fullDesc: "Comprehensive insurance coverage for your business and customers. Protect against fraud, chargebacks, and other transaction risks with our insurance solutions.", gradient: "from-sky-500 to-blue-600", target: "cat-insurance" },
  { icon: Plane, label: "Travel", desc: "Ticket booking made easy", fullDesc: "Simplified travel and ticket booking for your customers. Support flight bookings, hotel reservations, and other travel-related transactions seamlessly.", gradient: "from-violet-600 to-purple-700", target: "cat-travel" },
  { icon: Zap, label: "bills", desc: "Recharges & utilities", fullDesc: "Enable bill payments and recharges on your platform. Mobile recharges, electricity bills, water bills, and more all in one place.", gradient: "from-yellow-500 to-amber-600", target: "cat-bills" },
  { icon: Gift, label: "rewards", desc: "Earn on every transaction", fullDesc: "Engage customers with a powerful loyalty program. Earn rewards on every transaction and redeem them instantly or accumulate for bigger rewards.", gradient: "from-pink-500 to-rose-600", target: "cat-rewards" },
  { icon: RefreshCcw, label: "refunds", desc: "Instant refund process", fullDesc: "Process refunds instantly and automatically. Refunded amount reaches customers within minutes. Full audit trail and compliance with all regulatory requirements.", gradient: "from-teal-500 to-emerald-600", target: "cat-refunds" },
];

const ServiceCard = ({ icon: Icon, label, desc, gradient, onSelect }: { icon: React.ComponentType<{ size: number; className: string }>; label: string; desc: string; gradient: string; onSelect: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="w-full group cursor-pointer select-none"
    onClick={onSelect}
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
      <span className="relative z-10 text-[8px] sm:text-[10px] lg:text-xs text-muted-foreground text-center leading-relaxed line-clamp-2">
        {desc}
      </span>
    </div>
  </motion.div>
);

const ServicesMarquee = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} onSelect={() => setSelectedService(s)} />
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border/40 rounded-2xl max-w-xl w-full p-8 sm:p-10 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={20} className="text-muted-foreground" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex-shrink-0`}>
                  {<selectedService.icon size={32} className="text-white" />}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {selectedService.label}
                </h3>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>

              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) || setSelectedService(null)}
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 bg-muted text-muted-foreground font-semibold rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesMarquee;
