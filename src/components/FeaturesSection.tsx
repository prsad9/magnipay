import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Headphones, Activity, BarChart3, Users, Zap, Lock, LayoutDashboard, Globe } from "lucide-react";

const stats = [
  { icon: BarChart3, label: "Transactions", value: 10, suffix: "M+", decimals: 0, gradient: "from-accent to-secondary" },
  { icon: Users, label: "Merchants", value: 13000, suffix: "+", decimals: 0, gradient: "from-primary to-secondary" },
  { icon: Activity, label: "Uptime", value: 99.9, suffix: "%", decimals: 1, gradient: "from-secondary to-primary" },
  { icon: Headphones, label: "Support", value: "24/7", suffix: "", gradient: "from-primary to-accent" },
];

const features = [
  { icon: Zap, title: "Payments That Work Instantly", desc: "Your customers get instant confirmation. No delays. No surprises. Just smooth transactions." },
  { icon: Lock, title: "Your Money is Safe", desc: "Military-grade security protects every transaction. You can focus on growing, we'll handle the safety." },
  { icon: Globe, title: "Works With Your Tools", desc: "Integrate in minutes, not weeks. We handle the technical stuff so you don't have to." },
  { icon: LayoutDashboard, title: "See Everything at a Glance", desc: "Your dashboard shows what matters. Real numbers, real insights. No confusion." },
];

const AnimatedCounter = ({ value, suffix, decimals = 0 }: { value: number | string; suffix: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof value === "string") return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * (value as number));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  if (typeof value === "string") return <span>{value}{suffix}</span>;

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Premium gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Why <span className="text-gradient">Thousands Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-3 sm:p-5 lg:p-6 text-center group"
            >
              <div className={`inline-flex p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} mb-2 sm:mb-3 
                group-hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.3)] transition-all duration-400`}>
                <stat.icon size={18} className="text-white sm:hidden" />
                <stat.icon size={22} className="text-white hidden sm:block" />
              </div>
              <div className="font-display text-base sm:text-lg md:text-2xl font-bold mb-1 tabular-nums text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features - Split layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Accept & Send</span> Money
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              Our platform handles the complexity of payments so you can focus on building your business.
              Secure, fast, and developer-friendly.
            </p>
            <a href="#contact" className="btn-cta text-sm inline-flex items-center gap-2">
              Start Integrating →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="neon-card p-3 sm:p-5 lg:p-6 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(var(--primary)_/_0.2)] transition-all duration-300">
                  <f.icon size={18} className="text-primary" />
                </div>
                <h4 className="font-semibold text-xs sm:text-sm mb-1.5">{f.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
