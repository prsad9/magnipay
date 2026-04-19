import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuShieldCheck as ShieldCheck,
  LuBan as Ban,
  LuTriangleAlert as AlertTriangle,
  LuClock as Clock,
  LuArrowRight as ArrowRight,
} from "react-icons/lu";
import { WobbleCard } from "@/components/ui/wobble-card";

const policyRules = [
  {
    icon: Ban,
    title: "No Cancellation",
    description: "Transactions are final once the value is credited to your ID.",
  },
  {
    icon: AlertTriangle,
    title: "Failed Delivery",
    description: "If value is not delivered within 24 hours, you can request a refund.",
  },
  {
    icon: Clock,
    title: "Refund Timeline",
    description: "Approved refunds are credited to the original payment method within 45 working days.",
  },
];

const quickFacts = [
  { label: "Failed delivery window", value: "24h" },
  { label: "Maximum processing", value: "45 days" },
  { label: "Hidden fees", value: "0" },
  { label: "Policy transparency", value: "100%" },
];

const requestSteps = [
  "Share your transaction ID and registered contact details.",
  "Our team verifies payment and delivery status.",
  "Eligible refunds are sent back to the original payment source.",
];

const RefundPolicySection = () => {
  return (
    <section id="refund-policy" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,hsl(var(--primary)/0.14),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <ShieldCheck size={12} aria-hidden="true" />
            Refund Policy
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Refunds Designed With
            <span className="text-gradient"> Clarity First</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            A minimal, transparent process. No hidden fees, clear timelines, and direct support when a
            transaction fails.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid w-full max-w-7xl grid-cols-1 gap-4 mx-auto lg:grid-cols-3"
        >
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 min-h-[420px] border border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/80"
            className="h-full p-6 sm:p-8 lg:p-10"
          >
            <div className="grid h-full gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div className="relative z-10 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Core Rules</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Refunds, reduced to three simple rules.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Every refund decision follows a predictable policy so merchants and customers both know what
                  happens next.
                </p>
                <div className="mt-7 space-y-3 lg:pr-2">
                  {policyRules.map((rule) => (
                    <div key={rule.title} className="flex items-start gap-3 rounded-xl border border-black/5 bg-background/70 p-3 dark:border-white/10">
                      <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
                        <rule.icon size={16} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground sm:text-base">{rule.title}</p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{rule.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:justify-self-end">
                <img
                  src="/bill-payments.jpeg"
                  alt="Refund and payment overview"
                  loading="lazy"
                  className="h-[220px] w-full rounded-2xl border border-black/5 object-cover object-center opacity-90 saturate-75 shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:h-[260px] lg:h-[320px] dark:border-white/10"
                />
              </div>
            </div>
          </WobbleCard>

          <WobbleCard
            containerClassName="col-span-1 min-h-[420px] border border-black/5 bg-[#f7f8fa]/90 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/75"
            className="h-full p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Quick Facts</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Timelines you can rely on.
            </h3>
            <div className="mt-6 space-y-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-black/5 bg-background/75 p-3 dark:border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{fact.label}</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Support is available 24/7 for refund-related questions.
            </p>
          </WobbleCard>

          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 min-h-[300px] border border-black/5 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-900/80"
            className="h-full p-6 sm:p-8 lg:p-10"
          >
            <div className="grid h-full items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">How to Request</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  A calm, step-by-step refund process.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Follow the flow below, and we handle verification from there. No unnecessary back-and-forth.
                </p>

                <Link
                  to="/refund"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                >
                  Read full refund policy
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <div className="space-y-3">
                {requestSteps.map((step, index) => (
                  <div key={step} className="flex gap-3 rounded-xl border border-black/5 bg-background/70 p-3.5 dark:border-white/10">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                  </div>
                ))}

                <div className="rounded-xl border border-black/5 bg-background/80 p-3.5 dark:border-white/10">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Need Help Fast?</p>
                  <p className="mt-1 text-sm text-foreground/90">Mail support with transaction details for priority verification.</p>
                </div>
              </div>
            </div>
          </WobbleCard>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicySection;
