import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const partners = [
  { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "State Bank of India", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" },
  { name: "Cashfree", logo: "/cashfree-logo.png" },
  { name: "Bank of Maharashtra", logo: "/bom-logo.png" },
  { name: "Bank of Baroda", logo: "/bob-logo.png" },
  { name: "Airtel Payments Bank", logo: "/apb-logo.png" },
  { name: "Razorpay", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
];

const PartnerCard = ({ name, logo, index = 0 }: { name: string; logo: string; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    whileHover={{ scale: 1.08, y: -4 }}
    className="flex-shrink-0 flex items-center justify-center px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-border/30 bg-card/50 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_4px_30px_rgba(37,99,235,0.15)] transition-all duration-500 ease-out select-none cursor-pointer"
    title={name}
  >
    <img
      src={logo}
      alt={name}
      className="h-10 sm:h-14 w-auto max-w-[100px] sm:max-w-[140px] object-contain transition-all duration-300"
      loading="lazy"
    />
  </motion.div>
);

const OurPartnersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    if (!scrollDiv) return;

    let scrollPos = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollDiv.scrollWidth / 2 - scrollDiv.clientWidth;

    const animate = () => {
      scrollPos += scrollSpeed;
      
      // Reset to beginning when we reach midpoint for seamless loop
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }
      
      scrollDiv.scrollLeft = scrollPos;
    };

    const interval = setInterval(animate, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Trusted Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Backed by India's leading banks and global payment networks for seamless, secure transactions.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling line */}
      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-hidden scroll-smooth"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => {
            if (scrollRef.current) scrollRef.current.style.animationPlayState = "paused";
          }}
          onMouseLeave={() => {
            if (scrollRef.current) scrollRef.current.style.animationPlayState = "running";
          }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className="mx-1.5 sm:mx-3 flex-shrink-0">
              <PartnerCard {...p} index={i % partners.length} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
