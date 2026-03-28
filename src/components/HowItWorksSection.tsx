import { motion } from "framer-motion";
import { Mail, Code2, CreditCard, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Mail,
    title: "Contact Us",
    desc: "Reach out and let's talk. Our team will answer your questions and show you exactly what MagniPay can do for you.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Easy Setup",
    desc: "No complex setup. We'll guide you through the integration step-by-step. Test everything in sandbox first.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: CreditCard,
    title: "Start Receiving",
    desc: "Accept payments from day one—UPI, cards, wallets, bank transfers. Your first transaction can happen today.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "Watch It Grow",
    desc: "See your business grow in real-time. Our dashboard gives you all the insights you need to succeed.",
    gradient: "from-primary to-secondary",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 30% at 50% 50%, hsl(var(--glow-secondary)), transparent)" }}
      />
      {/* Premium gradient accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            Simple Process
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Get up and running in four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center group"
            >
              {/* Premium Card Background */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/60 to-white/40 dark:from-neutral-900/70 dark:to-neutral-800/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                <div className="relative inline-flex mb-3 sm:mb-4">
                  <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg
                    group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] transition-all duration-400 group-hover:scale-105`}>
                    <step.icon size={18} className="text-white sm:hidden" />
                    <step.icon size={24} className="text-white hidden sm:block" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base mb-2.5 leading-tight text-foreground">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{step.desc}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-12 transition-all duration-300" />
              </motion.div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 text-primary/30">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
