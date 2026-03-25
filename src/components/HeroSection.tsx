import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Shield, Wifi, Battery, Signal, Check } from "lucide-react";

const bgIcons = ["₹", "🔍", "💳", "⚡", "🏦", "₹", "🔍", "💳"];

/* ----- Floating Phone Mockup ----- */
const PhoneMockup = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateY: -8 }}
    animate={{ opacity: 1, y: 0, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-20"
    style={{ perspective: "1200px" }}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[220px] sm:w-[260px] md:w-[280px] mx-auto"
    >
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[3px] border-neutral-700 dark:border-neutral-600 bg-black overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(37,99,235,0.15)]">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 bg-gradient-to-b from-neutral-900 to-neutral-900/90">
          <span className="text-[10px] text-white/70 font-medium">9:41</span>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
          <div className="flex items-center gap-1 text-white/70">
            <Signal size={10} />
            <Wifi size={10} />
            <Battery size={10} />
          </div>
        </div>

        {/* App content */}
        <div className="bg-gradient-to-b from-neutral-900 via-[#0a1628] to-[#0f1f3d] px-4 sm:px-5 pb-5 sm:pb-6 pt-3 sm:pt-4 min-h-[360px] sm:min-h-[420px]">
          {/* App header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wider">Welcome back</p>
              <p className="text-sm font-bold text-white">MagniPay</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">M</div>
          </div>

          {/* Balance card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="rounded-2xl p-4 mb-5 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
            <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-6 -translate-x-6" />
            <p className="text-[10px] text-white/70 mb-1">Total Balance</p>
            <p className="text-2xl font-bold text-white mb-3">₹2,45,890</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] text-white font-medium">
                <ArrowUpRight size={10} />
                +12.5%
              </div>
              <span className="text-[10px] text-white/60">vs last month</span>
            </div>
          </motion.div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {[
              { label: "Send", icon: "↗" },
              { label: "Receive", icon: "↙" },
              { label: "Scan", icon: "⊞" },
              { label: "Pay", icon: "₹" },
            ].map((action, i) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sm">
                  {action.icon}
                </div>
                <span className="text-[9px] text-white/60">{action.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Recent transactions */}
          <p className="text-[10px] text-white/50 uppercase tracking-wider mb-3">Recent</p>
          {[
            { name: "Grocery Store", amount: "-₹1,240", time: "2m ago", color: "bg-orange-500" },
            { name: "Salary Credit", amount: "+₹45,000", time: "1h ago", color: "bg-emerald-500" },
            { name: "Electric Bill", amount: "-₹2,100", time: "3h ago", color: "bg-blue-500" },
          ].map((tx, i) => (
            <motion.div
              key={tx.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + i * 0.12 }}
              className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg ${tx.color} flex items-center justify-center text-[10px] text-white font-bold`}>
                  {tx.name[0]}
                </div>
                <div>
                  <p className="text-xs text-white font-medium">{tx.name}</p>
                  <p className="text-[10px] text-white/40">{tx.time}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-white/80'}`}>
                {tx.amount}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Phone shadow/glow */}
      <div className="absolute -inset-2 rounded-[3rem] bg-gradient-to-b from-blue-500/20 to-purple-600/20 blur-2xl -z-10 opacity-60" />
    </motion.div>
  </motion.div>
);

/* ----- Floating Credit Card ----- */
const FloatingCreditCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 40, rotateZ: 12 }}
    animate={{ opacity: 1, x: 0, rotateZ: 8 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className="absolute -right-4 bottom-16 z-30"
  >
    <motion.div
      animate={{ y: [0, -8, 0], rotateZ: [8, 6, 8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-[200px] h-[126px] rounded-2xl p-4 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(124,58,237,0.2)]"
      style={{ background: "linear-gradient(135deg, #1e1e2e, #2d1b69, #1a1a3e)" }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/15 -translate-y-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-blue-500/10 translate-y-8 -translate-x-8" />
      
      {/* Chip */}
      <div className="w-8 h-6 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 mb-3 flex items-center justify-center">
        <div className="w-5 h-3 rounded-sm border border-amber-600/40" />
      </div>
      
      <p className="text-[11px] text-white/90 font-mono tracking-[0.2em] mb-2">•••• •••• •••• 4289</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-white/40 uppercase">Card Holder</p>
          <p className="text-[10px] text-white/80 font-medium">MAGNIPAY USER</p>
        </div>
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full bg-red-500 opacity-80" />
          <div className="w-5 h-5 rounded-full bg-amber-400 opacity-80" />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ----- Success notification ----- */
const SuccessNotification = () => (
  <motion.div
    initial={{ opacity: 0, x: -30, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 1.8 }}
    className="absolute -left-6 top-24 z-30"
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="neon-card px-4 py-3 flex items-center gap-3"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <Check size={14} className="text-emerald-500" />
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground">Payment Received</p>
        <p className="text-[10px] text-muted-foreground">₹12,500 via UPI</p>
      </div>
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Background fintech icons */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
        {bgIcons.map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl select-none"
            style={{
              top: `${10 + (i * 12) % 80}%`,
              left: `${5 + (i * 14) % 90}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[16%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08), transparent)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[16%] w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.08), transparent)" }}
      />

      <div className="container relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 capsule bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-neon-pulse" />
                Trusted by 13,000+ Merchants
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance mb-6 sm:mb-8"
              style={{ lineHeight: '1.05' }}
            >
              Keep Your Money{" "}
              <span className="text-gradient">Moving Forward</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mb-8 sm:mb-10 text-pretty leading-relaxed"
            >
              From instant payments to smart banking—everything you need, all in one place.
              No complexity. No waiting. Just payments that work.
            </motion.p>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 py-4 sm:py-6 px-4 sm:px-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-black/60 dark:to-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">₹2.4Cr+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Daily Volume</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">13K+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Active Merchants</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">99.99%</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Uptime SLA</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-cta text-sm sm:text-base inline-flex items-center gap-2 !px-7 sm:!px-10 !py-3 sm:!py-4 group">
                Contact Us
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-gradient inline-flex items-center gap-2 text-sm sm:text-base">
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Premium Phone Mockup Visual */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[460px] lg:min-h-[520px] mt-6 lg:mt-0">
            {/* Magnetic field lines - hidden on small mobile */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`field-${i}`}
                className="absolute rounded-full border border-primary/10 hidden sm:block"
                style={{
                  width: `${260 + i * 100}px`,
                  height: `${260 + i * 100}px`,
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
            ))}

            {/* Phone Mockup */}
            <PhoneMockup />

            {/* Floating Credit Card - hidden on small phones to avoid overflow */}
            <div className="hidden sm:block">
              <FloatingCreditCard />
            </div>

            {/* Success Notification - hidden on small phones to avoid overflow */}
            <div className="hidden sm:block">
              <SuccessNotification />
            </div>

            {/* Security badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -bottom-2 left-4 sm:left-8 neon-card px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 z-30"
            >
              <Shield size={14} className="text-emerald-500 sm:w-4 sm:h-4" />
              <span className="text-[10px] sm:text-xs font-semibold">PCI DSS Compliant</span>
            </motion.div>

            {/* Orbiting dot - hidden on mobile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] hidden sm:block"
              style={{ transformOrigin: "center center" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)_/_0.6)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
