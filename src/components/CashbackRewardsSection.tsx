import { motion } from "framer-motion";
import { CircleDollarSign, Gift, Zap, TrendingUp } from "lucide-react";

const rewards = [
  {
    icon: CircleDollarSign,
    title: "Cashback on Transactions",
    desc: "Earn up to 2% cashback on every transaction made through Magnipay. Watch your rewards grow with every payment.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Gift,
    title: "Referral Rewards",
    desc: "Invite friends and family to earn generous commissions. Get rewards both for referrals and when they make their first transaction.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Zap,
    title: "Instant Bonus Rewards",
    desc: "Get instant rewards on your first payment. Activate your account and claim your welcome bonus today.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: TrendingUp,
    title: "Business Incentives",
    desc: "Higher rewards tier as your business grows. Scale your earnings with exclusive merchant benefits and volume bonuses.",
    gradient: "from-blue-500 to-cyan-600",
  },
];

const CashbackRewardsSection = () => {
  return (
    <section id="rewards" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Premium gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #84CC16, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
          style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--secondary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10">
        {/* Hero Text */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Zap size={12} className="text-primary" />
            <span className="text-sm font-medium text-primary">Rewards Program</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Earn <span className="text-gradient">Cashback</span> with Magnipay
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Get rewarded for every transaction. Unlock exclusive benefits and bonuses as you grow with us.
          </p>
        </motion.div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {rewards.map((reward, i) => (
            <motion.div
              key={i}
              className="neon-card p-5 sm:p-8 lg:p-10 group"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reward.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <reward.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">{reward.title}</h3>
              <p className="text-sm text-muted-foreground">{reward.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CashbackRewardsSection;
