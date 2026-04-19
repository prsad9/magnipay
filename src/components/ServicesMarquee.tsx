import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  LuBanknote as Banknote,
  LuFingerprint as Fingerprint,
  LuCreditCard as CreditCard,
  LuShoppingCart as ShoppingCart,
  LuHandCoins as HandCoins,
  LuSend as Send,
  LuShield as Shield,
  LuPlane as Plane,
  LuZap as Zap,
  LuLock as Lock,
  LuScroll as Scroll,
  LuFileText as FileText,
} from "react-icons/lu";

const projects = [
  {
    title: "Collections",
    description: "Accept payments instantly across UPI, cards, and bank rails.",
    link: "#cat-collections",
    icon: <Banknote size={18} />,
    iconClassName: "text-sky-100",
    iconBgClassName: "bg-sky-500/20",
    iconGlowClassName: "bg-sky-400/45",
  },
  {
    title: "Aadhaar Services",
    description: "Enable biometric-assisted payment and identity workflows.",
    link: "#cat-aadhaar",
    icon: <Fingerprint size={18} />,
    iconClassName: "text-emerald-100",
    iconBgClassName: "bg-emerald-500/20",
    iconGlowClassName: "bg-emerald-400/45",
  },
  {
    title: "Banking",
    description: "Handle payouts and secure fund transfers from one control layer.",
    link: "#cat-banking",
    icon: <CreditCard size={18} />,
    iconClassName: "text-indigo-100",
    iconBgClassName: "bg-indigo-500/20",
    iconGlowClassName: "bg-indigo-400/45",
  },
  {
    title: "Payment Services",
    description: "Deploy online and offline payment acceptance without friction.",
    link: "#cat-payment-services",
    icon: <ShoppingCart size={18} />,
    iconClassName: "text-cyan-100",
    iconBgClassName: "bg-cyan-500/20",
    iconGlowClassName: "bg-cyan-400/45",
  },
  {
    title: "Cash Management",
    description: "Track and optimize movement of funds with operational clarity.",
    link: "#cat-cash-management",
    icon: <HandCoins size={18} />,
    iconClassName: "text-amber-100",
    iconBgClassName: "bg-amber-500/20",
    iconGlowClassName: "bg-amber-400/45",
  },
  {
    title: "Money Remittance",
    description: "Send domestic transfers quickly with transparent processing.",
    link: "#cat-remittance",
    icon: <Send size={18} />,
    iconClassName: "text-teal-100",
    iconBgClassName: "bg-teal-500/20",
    iconGlowClassName: "bg-teal-400/45",
  },
  {
    title: "Insurance",
    description: "Offer integrated protection and coverage options in your flow.",
    link: "#cat-insurance",
    icon: <Shield size={18} />,
    iconClassName: "text-green-100",
    iconBgClassName: "bg-green-500/20",
    iconGlowClassName: "bg-green-400/45",
  },
  {
    title: "Travel",
    description: "Support bookings and travel-related payments in one place.",
    link: "#cat-travel",
    icon: <Plane size={18} />,
    iconClassName: "text-blue-100",
    iconBgClassName: "bg-blue-500/20",
    iconGlowClassName: "bg-blue-400/45",
  },
  {
    title: "Bills",
    description: "Enable utility payments and recharges through a unified stack.",
    link: "#cat-bills",
    icon: <Zap size={18} />,
    iconClassName: "text-violet-100",
    iconBgClassName: "bg-violet-500/20",
    iconGlowClassName: "bg-violet-400/45",
  },
  {
    title: "Privacy Policy",
    description: "Understand how your customer data is protected and managed.",
    link: "/privacy",
    icon: <Lock size={18} />,
    iconClassName: "text-rose-100",
    iconBgClassName: "bg-rose-500/20",
    iconGlowClassName: "bg-rose-400/45",
  },
  {
    title: "Terms of Service",
    description: "Review platform terms, responsibilities, and usage conditions.",
    link: "/terms",
    icon: <Scroll size={18} />,
    iconClassName: "text-fuchsia-100",
    iconBgClassName: "bg-fuchsia-500/20",
    iconGlowClassName: "bg-fuchsia-400/45",
  },
  {
    title: "Refund Policy",
    description: "See refund timelines, eligibility, and request flow in detail.",
    link: "/refund",
    icon: <FileText size={18} />,
    iconClassName: "text-orange-100",
    iconBgClassName: "bg-orange-500/20",
    iconGlowClassName: "bg-orange-400/45",
  },
];

const ServicesMarquee = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-3">
            Service Catalog
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Explore Services With{" "}
            <span className="text-gradient">Smart Navigation</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <HoverEffect items={projects} className="py-2" />
      </div>
    </section>
  );
};

export default ServicesMarquee;
