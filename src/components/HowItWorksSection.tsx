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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
            Simple Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xl">
            Get up and running in four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/60 to-white/40 dark:from-neutral-900/70 dark:to-neutral-800/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="relative inline-flex mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg
                    group-hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.4)] transition-all duration-400 group-hover:scale-110`}>
                    <step.icon size={24} className="text-white sm:hidden" />
                    <step.icon size={32} className="text-white hidden sm:block" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>

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
