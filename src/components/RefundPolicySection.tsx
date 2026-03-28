import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, Ban, AlertTriangle, Clock, CheckCircle2,
  ArrowRight, Banknote, RefreshCcw, IndianRupee, Percent,
} from "lucide-react";

const highlights = [
  { icon: Ban, label: "No Cancellation", desc: "Transactions are final once value is credited to your ID.", color: "from-red-500 to-rose-600" },
  { icon: AlertTriangle, label: "Failed Delivery?", desc: "If value isn't delivered in 24 hrs, you can request a refund.", color: "from-amber-500 to-orange-500" },
  { icon: Clock, label: "45-Day Processing", desc: "Verified refunds credited to original payment method within 45 working days.", color: "from-primary to-secondary" },
  { icon: CheckCircle2, label: "Transparent Process", desc: "Email us with transaction details and we'll handle the rest.", color: "from-accent to-emerald-600" },
];

const stats = [
  { icon: IndianRupee, value: "0", suffix: " Hidden Fees", gradient: "from-accent to-emerald-600" },
  { icon: Percent, value: "100", suffix: "% Transparent", gradient: "from-primary to-secondary" },
  { icon: RefreshCcw, value: "45", suffix: " Day Refund", gradient: "from-secondary to-primary" },
  { icon: Banknote, value: "24/7", suffix: " Support", gradient: "from-primary to-accent" },
];

const RefundPolicySection = () => {
  return (
    <section id="refund-policy-section" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--glow-primary)), transparent)" }}
      />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck size={12} />
            Transparent & Secure
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Easy Payments &{" "}
            <span className="text-gradient">Easy Refunds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
            Transparent refund policies, zero hidden charges, and bank-grade security — so you can transact with complete confidence.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.suffix}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-6 sm:p-8 text-center group"
            >
              <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4
                group-hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.3)] transition-all duration-400`}>
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold mb-1 tabular-nums text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.suffix}</div>
            </motion.div>
          ))}
        </div>

        {/* Refund policy cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-7 group"
            >
              <div className="flex items-start gap-4">
                <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.color}
                  group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1.5">{item.label}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full policy */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Link
            to="/refund"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors duration-200 group"
          >
            Read Full Refund Policy
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicySection;
