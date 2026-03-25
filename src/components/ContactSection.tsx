import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle, Sparkles, AlertCircle, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.warn("EmailJS public key is not configured. Please set VITE_EMAILJS_PUBLIC_KEY in .env.local");
      return;
    }
    emailjs.init(publicKey);
  }, []);

  // Validation function
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(form.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    // Phone validation (optional but if provided, must be valid)
    if (form.phone.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(form.phone.trim())) {
        errors.phone = "Please enter a valid phone number";
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setError("Email service is not properly configured. Please contact support.");
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone || "Not provided",
        message: form.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL,
      });

      // Success
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setValidationErrors({});

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(errorMessage);
      
      // Clear error message after 6 seconds
      setTimeout(() => setError(null), 6000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(217 91% 60% / 0.06), transparent)",
        }}
      />
      {/* Premium gradient accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }} />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={12} />
            Let's Talk
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Have <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-base sm:text-lg lg:text-xl leading-relaxed">
            Our team is here to help. Say hello, and we'll get you answers within 24 hours.
          </p>
          <a href="#contact-form" className="btn-cta text-base sm:text-lg lg:text-xl px-10 sm:px-16 py-4 sm:py-5 inline-block animate-pulse-glow">
            Let's Chat
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-start" id="contact-form">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="neon-card p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="bg-emerald-500/10 text-emerald-500 rounded-xl p-4 text-sm font-semibold flex items-center gap-3 border border-emerald-500/20"
              >
                <CheckCircle size={18} className="flex-shrink-0" />
                <span>✓ Got it! We'll be in touch soon.</span>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="bg-red-500/10 text-red-500 rounded-xl p-4 text-sm font-semibold flex items-center gap-3 border border-red-500/20"
              >
                <AlertCircle size={18} className="flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (validationErrors.name) setValidationErrors({ ...validationErrors, name: "" });
                }}
                className={`w-full rounded-xl border bg-muted/30 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground
                           focus:outline-none focus:ring-2 focus:border transition-all duration-200 placeholder:text-muted-foreground/50
                           ${validationErrors.name ? "border-red-500/50 focus:ring-red-500/40 focus:border-red-500/40" : "border-border focus:ring-primary/40 focus:border-primary/40"}`}
                placeholder="Your full name"
                disabled={loading}
              />
              {validationErrors.name && (
                <p className="text-red-500 text-xs mt-1.5">{validationErrors.name}</p>
              )}
            </div>

            {/* Email and Phone Fields */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" });
                  }}
                  className={`w-full rounded-xl border bg-muted/30 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground
                             focus:outline-none focus:ring-2 focus:border transition-all duration-200 placeholder:text-muted-foreground/50
                             ${validationErrors.email ? "border-red-500/50 focus:ring-red-500/40 focus:border-red-500/40" : "border-border focus:ring-primary/40 focus:border-primary/40"}`}
                  placeholder="you@company.com"
                  disabled={loading}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1.5">{validationErrors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                  }}
                  className={`w-full rounded-xl border bg-muted/30 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-foreground
                             focus:outline-none focus:ring-2 focus:border transition-all duration-200 placeholder:text-muted-foreground/50
                             ${validationErrors.phone ? "border-red-500/50 focus:ring-red-500/40 focus:border-red-500/40" : "border-border focus:ring-primary/40 focus:border-primary/40"}`}
                  placeholder="+91 98765 43210"
                  disabled={loading}
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-xs mt-1.5">{validationErrors.phone}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (validationErrors.message) setValidationErrors({ ...validationErrors, message: "" });
                }}
                className={`w-full rounded-xl border bg-muted/30 px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base resize-none text-foreground
                           focus:outline-none focus:ring-2 focus:border transition-all duration-200 placeholder:text-muted-foreground/50
                           ${validationErrors.message ? "border-red-500/50 focus:ring-red-500/40 focus:border-red-500/40" : "border-border focus:ring-primary/40 focus:border-primary/40"}`}
                placeholder="Tell us about your business needs…"
                disabled={loading}
              />
              {validationErrors.message && (
                <p className="text-red-500 text-xs mt-1.5">{validationErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`btn-primary-glow w-full flex items-center justify-center gap-2 text-base sm:text-lg py-3.5 sm:py-4 transition-all duration-200
                         ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Let's Connect
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="neon-card p-5 sm:p-8">
              <h3 className="font-display font-bold text-lg sm:text-xl mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a href="tel:+916727359737" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:shadow-[0_0_20px_hsl(217_91%_60%_/_0.3)] transition-all duration-300">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">+91 6727-359737</span>
                </a>
                <a href="mailto:info@utkaldigital.in" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-primary group-hover:shadow-[0_0_20px_hsl(263_70%_58%_/_0.3)] transition-all duration-300">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">info@utkaldigital.in</span>
                </a>
                <a href="https://wa.me/916727359737" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary group-hover:shadow-[0_0_20px_hsl(187_92%_53%_/_0.3)] transition-all duration-300">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="neon-card p-5 sm:p-8">
              <h3 className="font-display font-bold text-base sm:text-lg mb-3">Office</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Magnipay Technologies Private Limited<br />
                No. 1456, 4343, Kasoti, Pandiri,<br />
                Kendrapara, Odisha – 754211
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
