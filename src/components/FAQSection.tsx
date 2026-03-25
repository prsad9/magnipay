import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can I integrate MagniPay APIs?",
    a: "Most businesses go live within 24–48 hours. Our RESTful APIs come with comprehensive documentation, SDKs for popular languages, and a sandbox environment for testing before launch.",
  },
  {
    q: "What payment methods does MagniPay support?",
    a: "We support UPI, IMPS, NEFT, RTGS, prepaid cards, wallets, and QR-based payments. Our platform covers collections, payouts, and prepaid card lifecycle management.",
  },
  {
    q: "Is MagniPay secure and compliant?",
    a: "Absolutely. We are ISO 27001 certified and PCI DSS Level 1 compliant. All transactions are encrypted with bank-grade AES-256 encryption and monitored 24/7.",
  },
  {
    q: "What are the settlement timelines?",
    a: "UPI collections settle in T+0 (instant) to T+1 depending on your plan. Payouts via IMPS are instant, while NEFT and RTGS follow standard banking windows.",
  },
  {
    q: "Do you provide a dashboard for tracking?",
    a: "Yes. Our smart dashboard gives real-time analytics, transaction history, auto-reconciliation reports, and downloadable statements — all in one place.",
  },
  {
    q: "How do I get started with MagniPay?",
    a: "Simply fill out the contact form or reach out via WhatsApp. Our team will guide you through KYC, onboarding, and API integration within 24 hours.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 50%, hsl(var(--glow-color)), transparent)",
        }}
      />

      <div className="container relative z-10 max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <HelpCircle size={12} />
            FAQ
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg lg:text-xl">
            Everything you need to know about MagniPay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="neon-card px-4 sm:px-7 py-1 border-none data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base hover:no-underline hover:text-primary transition-colors py-4 sm:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-4 sm:pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
