import { Link } from "react-router-dom";
import {
  ArrowLeft, RotateCcw, Ban, AlertTriangle, Mail, Clock, CheckCircle2,
  CreditCard, CalendarDays, Hash, Receipt,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── helpers ───────────────────────────────────── */
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
    <span>{children}</span>
  </li>
);

/* ── section data ──────────────────────────────── */
interface Section {
  icon: LucideIcon;
  num: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    icon: Ban,
    num: "01",
    title: "No Cancellation / Refund",
    content: (
      <p>
        Once the payment is successfully made and the value is credited to your UtkalDigital ID,
        the transaction <strong className="text-foreground">cannot be cancelled or refunded</strong>.
      </p>
    ),
  },
  {
    icon: AlertTriangle,
    num: "02",
    title: "Exception – Failed Delivery",
    content: (
      <p>
        If money is charged to your card/bank account, but the value is{" "}
        <strong className="text-foreground">not delivered within 24 hours</strong>, you may request a
        refund.
      </p>
    ),
  },
  {
    icon: Mail,
    num: "03",
    title: "How to Report",
    content: (
      <>
        <p className="mb-4">
          Email UtkalDigital at the customer service email listed on the{" "}
          <Link to="/#contact" className="text-primary hover:underline font-medium">'Contact Us'</Link>{" "}
          page. Include the following details in your email:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: CreditCard, label: "Transaction Amount" },
            { icon: CalendarDays, label: "Transaction Date" },
            { icon: Hash, label: "Order Number" },
            { icon: Receipt, label: "Transaction Number" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                <item.icon size={18} />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Refund Processing",
    content: (
      <div className="space-y-4">
        <p>
          If verified, the refund will be credited to your{" "}
          <strong className="text-foreground">original payment method</strong> within{" "}
          <strong className="text-foreground">45 working days</strong> from the date of your email.
        </p>
        <div className="flex items-center gap-4 rounded-xl border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 p-4">
          <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary to-secondary text-white shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Processing Timeline</p>
            <p className="text-sm">Up to 45 working days after verification of your claim.</p>
          </div>
        </div>
      </div>
    ),
  },
];

/* ── component ─────────────────────────────────── */
const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
      </div>

      <div className="container max-w-4xl pt-28 pb-16 sm:py-16 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <RotateCcw size={12} />
            Policy
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Refund & <span className="text-gradient">Cancellation</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: August 1, 2025 &nbsp;·&nbsp; UtkalDigital
          </p>
        </div>

        {/* Intro summary card */}
        <div className="neon-card p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
              <RotateCcw size={20} />
            </div>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">
                At UtkalDigital, we aim for a transparent and fair refund policy. Please read the
                guidelines below carefully before initiating any transaction on our platform.
              </p>
              <div className="rounded-xl border border-amber-400/30 bg-amber-500/5 dark:bg-amber-400/5 p-4 text-sm">
                <strong className="text-foreground">Important:</strong> All transactions are final once
                the value has been successfully credited to your UtkalDigital ID.
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s) => (
            <section
              key={s.num}
              className="neon-card p-6 sm:p-8 group transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-shadow duration-300">
                  <s.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary/50 tracking-widest">{s.num}</span>
                    <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                  </div>
                  <div className="text-base text-muted-foreground leading-relaxed">
                    {s.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Magnipay Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
