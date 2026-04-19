import { motion } from "framer-motion";
import { LuArrowRight as ArrowRight } from "react-icons/lu";

const FinalCTASection = () => {
  const handleExploreServices = () => {
    const servicesSection = document.getElementById("services");

    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== "#services") {
        window.history.replaceState(null, "", "#services");
      }
      return;
    }

    window.location.hash = "services";
  };

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
            <a
              href="#contact"
              className="btn-cta group inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-semibold sm:h-14 sm:w-[248px] sm:text-base"
            >
              Let's Get Started
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={handleExploreServices}
              className="cta-uiverse-button h-12 w-full text-sm sm:h-14 sm:w-[248px] sm:text-base"
            >
              <span className="cta-uiverse-button__icon-wrapper" aria-hidden="true">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cta-uiverse-button__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cta-uiverse-button__icon-svg cta-uiverse-button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
