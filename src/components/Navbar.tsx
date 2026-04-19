import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu as Menu, LuX as X, LuMoon as Moon, LuSun as Sun, LuInfo as Info, LuPenLine as PenLine, LuHandshake as Handshake, LuChevronRight as ChevronRight } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import MagniPayLogo from "./MagniPayLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const sideMenuLinks = [
  { label: "About", href: "/about", icon: Info },
  { label: "Blog", href: "/blog", icon: PenLine },
  { label: "Become a Partner", href: "#contact", icon: Handshake },
];

const NavAnchor = ({ href, onClick, className, children }: { href: string; onClick?: () => void; className?: string; children: React.ReactNode }) => {
  const location = useLocation();
  if (href.startsWith("/")) {
    return <Link to={href} onClick={onClick} className={className}>{children}</Link>;
  }
  // On non-home pages, hash links should navigate to home page first
  if (href.startsWith("#") && location.pathname !== "/") {
    return <Link to={`/${href}`} onClick={onClick} className={className}>{children}</Link>;
  }
  return <a href={href} onClick={onClick} className={className}>{children}</a>;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("sidemenu", { detail: sideMenuOpen }));
  }, [sideMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
        style={scrolled ? { boxShadow: "0 0 30px rgba(37, 99, 235, 0.06)" } : {}}
      >
        <div className="container flex items-center justify-between">
          <a href="/" onClick={handleLogoClick}>
            <MagniPayLogo size="sm" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavAnchor
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </NavAnchor>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2.5 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 active:scale-95"
              aria-label="Toggle theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.div>
            </button>
            <NavAnchor href="#contact" className="btn-cta text-sm !px-6 !py-2.5">
              Let's Talk
            </NavAnchor>
            <button
              onClick={() => setSideMenuOpen(true)}
              className="p-2.5 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 active:scale-95"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(true)} className="p-2" aria-label="Menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-xs bg-white dark:bg-black border-l border-border p-6"
            >
              <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 p-2" aria-label="Close">
                <X size={20} />
              </button>
              <div className="mt-12 flex flex-col gap-4">
                {navLinks.map((l) => (
                  <NavAnchor
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </NavAnchor>
                ))}
                <hr className="border-border my-2" />
                {sideMenuLinks.map((l) => (
                  <NavAnchor
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 text-lg font-medium py-2 hover:text-primary transition-colors"
                  >
                    <l.icon size={18} className="text-primary/60" />
                    {l.label}
                  </NavAnchor>
                ))}
                <hr className="border-border my-2" />
                <NavAnchor href="#contact" onClick={() => setMobileOpen(false)} className="btn-cta text-center">
                  Let's Talk
                </NavAnchor>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Side menu drawer (desktop + mobile) */}
      <AnimatePresence>
        {sideMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              onClick={() => setSideMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white dark:bg-black border-l border-border/50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Menu</span>
                <button
                  onClick={() => setSideMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 p-6 space-y-1">
                {sideMenuLinks.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavAnchor
                      href={l.href}
                      onClick={() => setSideMenuOpen(false)}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        <l.icon size={18} className="text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{l.label}</span>
                      <ChevronRight size={16} className="ml-auto text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </NavAnchor>
                  </motion.div>
                ))}
              </div>

              {/* Bottom branding */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <MagniPayLogo size="sm" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Magnipay Technologies Pvt. Ltd. — Powering seamless digital payments across India.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
