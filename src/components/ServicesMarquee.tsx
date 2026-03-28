import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote, Fingerprint, CreditCard, ShoppingCart, HandCoins, Send,
  Shield, Plane, Zap, Gift, RefreshCcw, ChevronLeft, ChevronRight,
} from "lucide-react";

const services = [
  { icon: Banknote, label: "Collections", desc: "Accept payments instantly", gradient: "from-blue-500 to-indigo-600", target: "cat-collections" },
  { icon: Fingerprint, label: "aadhar", desc: "Biometric payment access", gradient: "from-emerald-500 to-teal-600", target: "cat-aadhaar" },
  { icon: CreditCard, label: "Banking", desc: "Payouts & fund transfers", gradient: "from-amber-500 to-orange-600", target: "cat-banking" },
  { icon: ShoppingCart, label: "payments", desc: "Online & offline solutions", gradient: "from-indigo-500 to-blue-600", target: "cat-payment-services" },
  { icon: HandCoins, label: "cash", desc: "Smart money management", gradient: "from-orange-500 to-red-600", target: "cat-cash-management" },
  { icon: Send, label: "Money Remittance", desc: "Easy domestic transfer", gradient: "from-purple-500 to-violet-600", target: "cat-remittance" },
  { icon: Shield, label: "Insurance", desc: "Coverage & protection", gradient: "from-sky-500 to-blue-600", target: "cat-insurance" },
  { icon: Plane, label: "Travel", desc: "Ticket booking made easy", gradient: "from-violet-600 to-purple-700", target: "cat-travel" },
  { icon: Zap, label: "bills", desc: "Recharges & utilities", gradient: "from-yellow-500 to-amber-600", target: "cat-bills" },
  { icon: Gift, label: "rewards", desc: "Earn on every transaction", gradient: "from-pink-500 to-rose-600", target: "cat-rewards" },
  { icon: RefreshCcw, label: "refunds", desc: "Instant refund process", gradient: "from-teal-500 to-emerald-600", target: "cat-refunds" },
];

const ServiceCard = ({ icon: Icon, label, desc, gradient, target }: { icon: React.ComponentType<{ size: number; className: string }>; label: string; desc: string; gradient: string; target: string }) => (
  <div
    className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] group cursor-pointer select-none"
    onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "center" })}
  >
    <div className="relative aspect-square rounded-2xl border border-border/40 bg-card/60 dark:bg-card/40 backdrop-blur-sm
                    flex flex-col items-center justify-center gap-2 p-4
                    transition-all duration-300 overflow-hidden
                    hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]
                    hover:scale-[1.06] active:scale-[0.97]">
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-300 rounded-2xl`} />
      
      {/* Icon container */}
      <div className={`relative z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg
                       group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300`}>
        <Icon size={20} className="text-white sm:hidden" />
        <Icon size={22} className="text-white hidden sm:block" />
      </div>
      
      {/* Label */}
      <span className="relative z-10 text-xs sm:text-sm font-semibold text-foreground text-center leading-tight transition-colors duration-300 line-clamp-1">
        {label}
      </span>

      {/* Description */}
      <span className="relative z-10 text-[10px] sm:text-xs text-muted-foreground text-center leading-snug transition-colors duration-300 line-clamp-2">
        {desc}
      </span>
    </div>
  </div>
);

const ServicesMarquee = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Manual scroll buttons
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 350;
    const targetScroll = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
    
    setTimeout(checkScroll, 100);
  };

  useEffect(() => {
    checkScroll();

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-3">
            All-in-One Platform
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Everything You Need,{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">← Scroll to explore all features →</p>
        </motion.div>
      </div>

      {/* Interactive scrollable container */}
      <div className="relative group">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full
                     bg-primary/80 hover:bg-primary text-white backdrop-blur-sm
                     shadow-lg hover:shadow-xl transition-all duration-300
                     disabled:opacity-30 disabled:cursor-not-allowed
                     hover:scale-110 active:scale-95 ml-2 sm:ml-4"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="sm:hidden" />
          <ChevronLeft size={24} className="hidden sm:block" />
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full
                     bg-primary/80 hover:bg-primary text-white backdrop-blur-sm
                     shadow-lg hover:shadow-xl transition-all duration-300
                     disabled:opacity-30 disabled:cursor-not-allowed
                     hover:scale-110 active:scale-95 mr-2 sm:mr-4"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="sm:hidden" />
          <ChevronRight size={24} className="hidden sm:block" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-2 px-4 sm:px-8
                     [scroll-behavior:smooth]
                     [&::-webkit-scrollbar]:h-2
                     [&::-webkit-scrollbar-track]:bg-transparent
                     [&::-webkit-scrollbar-thumb]:bg-primary/30
                     [&::-webkit-scrollbar-thumb]:rounded-full
                     [&::-webkit-scrollbar-thumb]:hover:bg-primary/50"
          onWheel={(e) => {
            e.preventDefault();
            if (scrollContainerRef.current) {
              const scrollAmount = e.deltaY > 0 ? 80 : -80;
              scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
              });
              setTimeout(checkScroll, 50);
            }
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
          {/* Duplicate for seamless looping effect */}
          {services.map((s, i) => (
            <ServiceCard key={`dup-${i}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
