import { motion } from "framer-motion";
import { LuMail as Mail, LuCode as Code2, LuCreditCard as CreditCard, LuTrendingUp as TrendingUp, LuArrowRight as ArrowRight } from "react-icons/lu";
import BorderGlow from "./BorderGlow";
import { GridPattern } from "@/components/ui/grid-pattern";

const steps = [
  {
    icon: Mail,
    title: "Contact Us",
    desc: "Reach out and let's talk. Our team will answer your questions and show you exactly what MagniPay can do for you.",
    gradient: "from-primary to-accent",
    glowColor: "203 54 62",
  },
  {
    icon: Code2,
    title: "Easy Setup",
    desc: "No complex setup. We'll guide you through the integration step-by-step. Test everything in sandbox first.",
    gradient: "from-accent to-secondary",
    glowColor: "113 44 62",
  },
  {
    icon: CreditCard,
    title: "Start Receiving",
    desc: "Accept payments from day one—UPI, cards, wallets, bank transfers. Your first transaction can happen today.",
    gradient: "from-secondary to-primary",
    glowColor: "203 54 58",
  },
  {
    icon: TrendingUp,
    title: "Watch It Grow",
    desc: "See your business grow in real-time. Our dashboard gives you all the insights you need to succeed.",
    gradient: "from-primary to-secondary",
    glowColor: "109 44 60",
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
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))" }} />

      <div className="pointer-events-none absolute -bottom-8 -right-8 h-[88%] w-[84%] overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          x={0}
          y={0}
          squares={[
            [22, 10],
            [24, 11],
            [26, 12],
            [28, 13],
            [23, 14],
            [25, 15],
            [27, 16],
            [29, 17],
            [24, 18],
            [26, 19],
            [28, 20],
          ]}
          className="fill-primary/20 stroke-primary/45 opacity-85 dark:fill-primary/25 dark:stroke-primary/55 [mask-image:radial-gradient(620px_circle_at_bottom_right,white_6%,white_62%,transparent_96%)]"
        />
      </div>

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
              whileHover={{ y: -4 }}
              className="relative h-full group"
            >
              <BorderGlow
                edgeSensitivity={28}
                glowColor={step.glowColor}
                backgroundColor="hsl(var(--card))"
                borderRadius={18}
                glowRadius={36}
                glowIntensity={0.95}
                coneSpread={24}
                animated={false}
                colors={["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]}
                fillOpacity={0.42}
                className="h-full"
              >
                <div className="p-4 sm:p-5 lg:p-6 text-left">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg
                        group-hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] transition-all duration-400 group-hover:scale-105`}
                    >
                      <step.icon size={18} className="text-white sm:hidden" />
                      <step.icon size={22} className="text-white hidden sm:block" />
                    </div>
                    <div className="min-w-[34px] h-8 px-2 inline-flex items-center justify-center rounded-full bg-primary/12 text-primary text-xs font-bold tracking-wide">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-balance">
                    {step.desc}
                  </p>
                </div>
              </BorderGlow>

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
