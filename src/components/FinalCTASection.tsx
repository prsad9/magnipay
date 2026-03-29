import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--glow-color)), transparent)" }}
      />
      {/* Premium gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))" }} />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
            Ready to Make Payments{" "}
            <span className="text-gradient">Simple Again?</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-4">
            Join thousands of business owners who chose simplicity over complexity.
            You'll be up and running in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-4">
            <a href="#contact" className="btn-cta text-sm sm:text-base md:text-lg !px-6 sm:!px-8 md:!px-12 !py-3 sm:!py-3.5 md:!py-4 inline-flex items-center gap-2 group animate-pulse-glow w-full sm:w-auto justify-center">
              Let's Get Started
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-gradient text-base w-full sm:w-auto text-center">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
