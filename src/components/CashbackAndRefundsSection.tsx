import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuGift as Gift,
  LuBadgePercent as BadgePercent,
  LuHeart as Heart,
  LuCircleCheck as CheckCircle,
  LuRefreshCcw as RefreshCcw,
  LuChevronRight as ChevronRight,
  LuX as X,
} from "react-icons/lu";
import type { IconType as LucideIcon } from "react-icons";

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
    subtitle: "Earn more on every successful transaction",
    icon: Gift,
    gradient: "from-pink-500 to-rose-500",
    services: [
      { icon: Gift, title: "Cashback Program", desc: "Earn cashback on every transaction made. Instant rewards that can be redeemed or transferred instantly.", greeting: "Thanks for choosing Cashback Program! Earn up to 2% on every transaction with instant rewards and no expiry.", longDesc: "Get rewarded for every purchase and payment. Earn up to 2% cashback on transactions made through Magnipay. Rewards are credited instantly and can be used for future transactions or transferred to your bank account. No minimum balance required, no expiry dates, and transparent earning rules." },
      { icon: BadgePercent, title: "Loyalty Rewards", desc: "Accumulate points on every purchase and payment. Exchange points for discounts, products, or cash vouchers.", greeting: "Thanks for choosing Loyalty Rewards! Accumulate points faster with exclusive bonuses and partner discounts.", longDesc: "Build loyalty points with every transaction on Magnipay. Accumulate points faster with higher transaction volumes and exclusive milestone bonuses. Redeem points for discounts on partner merchant stores, exclusive product vouchers, or convert directly to cash. Higher tier members get bonus points on all transactions." },
      { icon: Heart, title: "Exclusive Tiers", desc: "Get exclusive perks and benefits based on your spending tier. Premium membership with additional rewards and benefits.", greeting: "Thanks for choosing Exclusive Tiers! Unlock Silver, Gold, and Platinum benefits based on your spending volume.", longDesc: "Unlock exclusive benefits as you move up our loyalty tiers. Silver members get 1% bonus rewards, Gold members get priority support and exclusive deals, and Platinum members enjoy concierge service and personalized offers. Tier status is based on annual transaction volume, and benefits reset annually." },
    ],
  },
  {
    id: "cat-refunds",
    title: "Easy Payments & Easy Refunds",
    subtitle: "Fast checkout and transparent refund handling",
    icon: RefreshCcw,
    gradient: "from-teal-500 to-emerald-500",
    services: [
      { icon: CheckCircle, title: "One-Click Payments", desc: "Pre-saved payment methods for instant checkout. Complete payments in seconds without re-entering details.", greeting: "Thanks for choosing One-Click Payments! Save methods securely and checkout in seconds with bank-level encryption.", longDesc: "Save payment methods securely for faster checkouts. Complete transactions with a single click without re-entering card or bank details. Bank-level encryption protects your information, and you can manage saved payment methods anytime. Perfect for repeat purchases and subscriptions." },
      { icon: RefreshCcw, title: "Instant Refunds", desc: "Refund processing in real-time to the original payment method. No waiting, no middleman delays.", greeting: "Thanks for choosing Instant Refunds! Get refunds instantly within minutes to your original payment method.", longDesc: "Get refunds instantly to your original payment method within minutes. Real-time processing means no waiting for bank working days. Automated refund initiation for eligible transactions, instant SMS/email notification of refund status, and dedicated support for any refund inquiries." },
    ],
  },
];

const CashbackAndRefundsSection = () => {
  const [activeModal, setActiveModal] = useState<ModalState>(null);

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

  return (
    <section id="cashback-refunds" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,hsl(var(--primary)/0.1),transparent_72%)]" />
      <div className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Rewards & Refunds
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cashback & Refunds,
            <span className="text-gradient"> Simplified</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Clear benefits, fast actions, and support-first policies in one clean experience.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-2">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[0_18px_45px_rgba(2,8,20,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0">
                  <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.gradient} opacity-50 blur-md`} />
                  <div className={`relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} shadow-[0_12px_28px_rgba(0,0,0,0.22)]`}>
                    <cat.icon size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{cat.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{cat.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {cat.services.map((s, i) => (
                  <motion.button
                    key={s.title}
                    className="group flex w-full items-start gap-3 rounded-2xl border border-black/5 bg-background/80 p-4 text-left transition-all duration-200 hover:border-primary/35 hover:bg-background dark:border-white/10"
                    onClick={() => setActiveModal({ icon: s.icon, title: s.title, greeting: s.greeting, longDesc: s.longDesc })}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    type="button"
                  >
                    <div className="relative mt-0.5 h-9 w-9 shrink-0">
                      <span className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.gradient} opacity-45 blur-md transition-opacity duration-200 group-hover:opacity-70`} />
                      <div className={`relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} shadow-[0_8px_18px_rgba(0,0,0,0.18)]`}>
                        <s.icon size={15} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground sm:text-base">{s.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.desc}</p>
                    </div>

                    <ChevronRight size={16} className="mt-1 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm"
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
              <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-black/10 bg-white/92 p-7 shadow-[0_25px_80px_rgba(2,8,20,0.22)] backdrop-blur-xl dark:border-white/15 dark:bg-neutral-900/92 sm:p-10"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute right-5 top-5 rounded-xl p-2 text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
                  type="button"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {activeModal.greeting && (
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {activeModal.greeting}
                  </p>
                )}

                <div className="relative mb-5 inline-flex h-[52px] w-[52px] items-center justify-center">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-55 blur-md" />
                  <span className="relative inline-flex rounded-2xl bg-gradient-to-br from-primary to-accent p-3.5 shadow-[0_12px_28px_rgba(0,0,0,0.24)]">
                    <activeModal.icon size={24} className="text-white" />
                  </span>
                </div>

                <h3 className="font-display mb-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {activeModal.title}
                </h3>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">{activeModal.longDesc}</p>
                <a
                  href="#contact"
                  onClick={() => setActiveModal(null)}
                  className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Get service
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
