import { motion } from "framer-motion";
import { LuTrendingUp as TrendingUp, LuSmartphone as Smartphone, LuQrCode as QrCode, LuShieldCheck as ShieldCheck, LuArrowRight as ArrowRight, LuCheck as Check, LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

const showcases = [
  {
    badge: "For Businesses",
    title: "Grow Your Business",
    titleHighlight: "Faster",
    description:
      "Accept payments instantly via UPI, QR codes, and payment links. Our merchants see 40% faster checkouts and higher conversion rates with seamless digital payments.",
    features: ["Instant UPI settlements", "Dynamic QR codes", "Real-time analytics"],
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    imageAlt: "Business owner using digital payment terminal",
    reverse: false,
    floatingCard: { label: "Revenue Up", value: "+42%", color: "green" },
  },
  {
    badge: "Digital Payments",
    title: "Seamless Payments,",
    titleHighlight: "Anywhere",
    description:
      "From bustling city stores to rural shops — enable your customers to pay digitally with just a scan. No expensive hardware needed, just your smartphone and MagniPay.",
    features: ["Works on any smartphone", "Offline mode support", "Multi-language support"],
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600&h=400&fit=crop&q=80",
    imageAlt: "Customer making digital payment with smartphone",
    reverse: true,
    floatingCard: { label: "Transactions", value: "10M+", color: "blue" },
  },
  {
    badge: "Secure & Trusted",
    title: "Bank-Grade Security,",
    titleHighlight: "Zero Worry",
    description:
      "Every transaction is protected with AES-256 encryption and monitored 24/7. Bank-grade security ensures your money and data stay safe at all times.",
    features: ["End-to-end encryption", "24/7 fraud monitoring", "ISO 27001 Certified"],
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80",
    imageAlt: "Secure digital payment infrastructure",
    reverse: false,
    floatingCard: { label: "Uptime", value: "99.99%", color: "green" },
  },
];

const ImageShowcase = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <QrCode size={12} />
            Why MagniPay
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-5">
            Powering Payments{" "}
            <span className="text-gradient">Across India</span>
          </h2>
          <p className="text-muted-foreground/90 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            From small shops to large enterprises, our payment solutions help businesses
            accept, manage, and grow their revenue effortlessly.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {showcases.map((item, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center`}
          >
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? 30 : -30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`${item.reverse ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  <item.icon size={12} />
                  {item.badge}
                </div>
                <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-5">
                  {item.title}{" "}
                  <span className="text-gradient">{item.titleHighlight}</span>
                </h3>
                <p className="text-foreground/75 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-7 max-w-xl">
                  {item.description}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary/80 mb-3">
                  Core Benefits
                </p>
                <ul className="space-y-3.5 mb-8">
                  {item.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-sm sm:text-base">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground/80 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group text-base"
                >
                  Get Started
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </motion.div>

              {/* Image with floating elements */}
              <motion.div
                initial={{ opacity: 0, x: item.reverse ? -30 : 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`${item.reverse ? "lg:order-1" : "lg:order-2"} flex justify-center`}
              >
                <div className="relative group w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[480px]">
                  {/* Gradient glow behind image */}
                  <div className="absolute -inset-5 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl opacity-45 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Floating stat card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className={`absolute ${item.reverse ? 'right-1 sm:-right-5 md:-right-10' : 'left-1 sm:-left-5 md:-left-10'} -bottom-4 sm:-bottom-6 md:-bottom-8 z-10`}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="neon-card px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 rounded-2xl"
                    >
                      <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                        item.floatingCard.color === 'green' ? 'bg-accent/15' : 'bg-primary/15'
                      }`}>
                        <ArrowUpRight size={16} className={`sm:w-5 sm:h-5 ${
                          item.floatingCard.color === 'green' ? 'text-accent' : 'text-primary'
                        }`} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg md:text-xl font-extrabold leading-none text-foreground">{item.floatingCard.value}</p>
                        <p className="text-[10px] sm:text-xs font-medium text-muted-foreground mt-1">{item.floatingCard.label}</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating check badge on the other side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className={`absolute ${item.reverse ? 'left-1 sm:-left-4 md:-left-8' : 'right-1 sm:-right-4 md:-right-8'} top-2 sm:top-4 md:top-6 z-10`}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="neon-card px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 rounded-xl"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/15 flex items-center justify-center">
                        <Check size={12} className="text-accent sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-foreground">Verified</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
