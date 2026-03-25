import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import RefundPolicy from "./pages/RefundPolicy.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  // Always scroll to top on initial page load / reload
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    // Force scroll to top immediately + after paint to beat layout shifts
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
    const raf2 = requestAnimationFrame(() => {
      requestAnimationFrame(() => window.scrollTo(0, 0));
    });
    // Final fallback after animations settle
    const t = setTimeout(() => window.scrollTo(0, 0), 150);
    return () => { cancelAnimationFrame(raf2); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };
      setTimeout(() => tryScroll(), 50);
    } else {
      // Instant scroll (no smooth) to avoid racing with animations
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
