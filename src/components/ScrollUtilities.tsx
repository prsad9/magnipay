import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] sm:h-[3px] md:h-[3.5px]">
      <div
        className="h-full rounded-r-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #1B4F7A, #1F6FA9, #6BBF59)",
          boxShadow:
            progress > 0
              ? "0 0 8px rgba(31, 111, 169, 0.45), 0 0 20px rgba(107, 191, 89, 0.25)"
              : "none",
        }}
      />
    </div>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const rafRef = { current: 0 } as { current: number };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 600);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onMenu = (e: Event) => setMenuOpen((e as CustomEvent).detail);
    window.addEventListener("sidemenu", onMenu);
    return () => window.removeEventListener("sidemenu", onMenu);
  }, []);

  return (
    <AnimatePresence>
      {visible && !menuOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 lg:bottom-8 max-lg:bottom-24 p-3 rounded-full bg-gradient-to-br from-primary via-primary to-secondary 
                     text-primary-foreground shadow-[0_0_20px_rgba(31,111,169,0.34)] 
                     hover:shadow-[0_0_30px_rgba(107,191,89,0.42)] hover:scale-110
                     transition-all duration-300 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const rafRef = { current: 0 } as { current: number };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setVisible(window.scrollY > 400);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-transparent" />
          
          {/* Content */}
          <div className="relative px-4 py-5 flex gap-3 items-center justify-between">
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="text-[10px] sm:text-xs font-semibold text-secondary tracking-wider">READY TO GET STARTED?</div>
              <div className="text-xs sm:text-sm text-slate-200 truncate">Get exclusive access to MagniPay features</div>
            </div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-5 sm:px-9 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-white text-sm sm:text-lg
                         bg-gradient-to-r from-brand-blue to-brand-green hover:brightness-110
                         shadow-[0_0_25px_rgba(31,111,169,0.35)] hover:shadow-[0_0_35px_rgba(107,191,89,0.4)]
                         transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
