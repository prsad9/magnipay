import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift, BadgePercent, Heart, CheckCircle, RefreshCcw, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ModalState = {
  icon: LucideIcon;
  title: string;
  greeting: string;
  longDesc: string;
} | null;

const categories = [
  {
    id: "cat-rewards",
    title: "Cashback & Rewards",
    icon: Gift,
    gradient: "from-pink-500 to-rose-600",
    services: [
      { icon: Gift, title: "Cashback Program", desc: "Earn cashback on every transaction made. Instant rewards that can be redeemed or transferred instantly.", greeting: "Thanks for choosing Cashback Program! Earn up to 2% on every transaction with instant rewards and no expiry.", longDesc: "Get rewarded for every purchase and payment. Earn up to 2% cashback on transactions made through Magnipay. Rewards are credited instantly and can be used for future transactions or transferred to your bank account. No minimum balance required, no expiry dates, and transparent earning rules." },
      { icon: BadgePercent, title: "Loyalty Rewards", desc: "Accumulate points on every purchase and payment. Exchange points for discounts, products, or cash vouchers.", greeting: "Thanks for choosing Loyalty Rewards! Accumulate points faster with exclusive bonuses and partner discounts.", longDesc: "Build loyalty points with every transaction on Magnipay. Accumulate points faster with higher transaction volumes and exclusive milestone bonuses. Redeem points for discounts on partner merchant stores, exclusive product vouchers, or convert directly to cash. Higher tier members get bonus points on all transactions." },
      { icon: Heart, title: "Exclusive Tiers", desc: "Get exclusive perks and benefits based on your spending tier. Premium membership with additional rewards and benefits.", greeting: "Thanks for choosing Exclusive Tiers! Unlock Silver, Gold, and Platinum benefits based on your spending volume.", longDesc: "Unlock exclusive benefits as you move up our loyalty tiers. Silver members get 1% bonus rewards, Gold members get priority support and exclusive deals, and Platinum members enjoy concierge service and personalized offers. Tier status is based on annual transaction volume, and benefits reset annually." },
    ],
  },
  {
    id: "cat-refunds",
    title: "Easy Payments & Easy Refunds",
    icon: RefreshCcw,
    gradient: "from-teal-500 to-emerald-600",
    services: [
      { icon: CheckCircle, title: "One-Click Payments", desc: "Pre-saved payment methods for instant checkout. Complete payments in seconds without re-entering details.", greeting: "Thanks for choosing One-Click Payments! Save methods securely and checkout in seconds with bank-level encryption.", longDesc: "Save payment methods securely for faster checkouts. Complete transactions with a single click without re-entering card or bank details. Bank-level encryption protects your information, and you can manage saved payment methods anytime. Perfect for repeat purchases and subscriptions." },
      { icon: RefreshCcw, title: "Instant Refunds", desc: "Refund processing in real-time to the original payment method. No waiting, no middleman delays.", greeting: "Thanks for choosing Instant Refunds! Get refunds instantly within minutes to your original payment method.", longDesc: "Get refunds instantly to your original payment method within minutes. Real-time processing means no waiting for bank working days. Automated refund initiation for eligible transactions, instant SMS/email notification of refund status, and dedicated support for any refund inquiries." },
    ],
  },
];

const CashbackAndRefundsSection = () => {
  const [activeModal, setActiveModal] = useState<ModalState>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [activeModal]);

  const baseMotion = {
    initial: isMobile ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 20, filter: "blur(6px)" },
    whileInView: isMobile ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 1, y: 0, filter: "blur(0)" },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: isMobile ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="cashback-refunds" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-800">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(333 71% 51% / 0.15), transparent)" }}
      />
      <div className="absolute top-1/4 -left-32 w-[300px] h-[300px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, hsl(174 83% 31% / 0.15), transparent)" }}
      />

      <div className="container relative z-10">
        <motion.div
          {...baseMotion}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 capsule bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Rewards & Benefits
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Cashback <span className="text-gradient">& Refunds</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty text-xs sm:text-sm lg:text-base">
            Earn rewards on every transaction and enjoy seamless refund processing.
          </p>
        </motion.div>

        {/* Two columns side by side */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={isMobile ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: isMobile ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-white/30 dark:hover:border-white/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg flex-shrink-0`}>
                  <cat.icon size={20} className="text-white sm:size-24" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{cat.title}</h3>
                </div>
              </div>

              {/* Services Grid */}
              <div className="space-y-2 sm:space-y-3">
                {cat.services.map((s, i) => (
                  <motion.button
                    key={s.title}
                    className="neon-card p-3 sm:p-4 group text-left w-full flex items-start gap-3 hover:border-primary/60 transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveModal({ icon: s.icon, title: s.title, greeting: s.greeting, longDesc: s.longDesc })}
                    initial={isMobile ? { opacity: 1, y: 0, filter: "blur(0)" } : { opacity: 0, y: 20, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: isMobile ? 0.25 : 0.6, delay: isMobile ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    type="button"
                  >
                    {/* Icon */}
                    <div className={`rounded-lg bg-gradient-to-br ${cat.gradient} transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0 p-2`}>
                      <s.icon size={14} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold mb-0.5 line-clamp-1">{s.title}</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{s.desc}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-xl"
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(8px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.currentTarget === e.target && setActiveModal(null)}
            >
              <div className="max-h-[90vh] overflow-y-auto w-full max-w-3xl p-8 sm:p-12 rounded-3xl 
                              bg-gradient-to-br from-[#E5E7EB] to-[#F3F4F6] 
                              dark:from-neutral-900/98 dark:to-neutral-800/95
                              backdrop-blur-xl border border-[#D1D5DB] dark:border-white/20 
                              shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                              relative"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  type="button"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {activeModal.greeting && (
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600">
                    {activeModal.greeting}
                  </h2>
                )}

                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent mb-6">
                  <activeModal.icon size={32} className="text-white" />
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-bold mb-6 text-foreground">{activeModal.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">{activeModal.longDesc}</p>
                <a href="#contact" onClick={() => setActiveModal(null)} className="btn-cta text-base inline-block px-8 py-3">
                  Get Service →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CashbackAndRefundsSection;
