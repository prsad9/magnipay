import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LuSend as Send, LuPhone as Phone, LuMail as Mail, LuMessageCircle as MessageCircle, LuSparkles as Sparkles, LuCircleAlert as AlertCircle, LuCircleCheck as CheckCircle } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import BorderGlow from "./BorderGlow";

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
      const phoneRegex = /^[\d\s+()-]{10,}$/;
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

  const inputBaseClass = "w-full rounded-2xl border px-4 sm:px-5 py-3.5 text-sm sm:text-base text-foreground bg-white/90 dark:bg-white/[0.05] placeholder:text-muted-foreground/65 transition-all duration-200 focus:outline-none focus:ring-2";
  const inputDefaultClass = "border-black/10 dark:border-white/15 focus:border-black/35 dark:focus:border-white/35 focus:ring-black/10 dark:focus:ring-white/20";
  const inputErrorClass = "border-red-500/45 focus:border-red-500/55 focus:ring-red-500/20";
  const shinyCardProps = {
    edgeSensitivity: 34,
    glowColor: "220 15 82",
    backgroundColor: "hsl(var(--card))",
    borderRadius: 30,
    glowRadius: 26,
    glowIntensity: 0.26,
    coneSpread: 22,
    animated: false,
    colors: ["rgba(255,255,255,0.18)", "rgba(148,163,184,0.12)", "rgba(255,255,255,0.14)"],
    fillOpacity: 0.06,
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(0,0,0,0.08),transparent_65%)] dark:bg-[radial-gradient(120%_70%_at_50%_0%,rgba(255,255,255,0.08),transparent_65%)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/80 blur-3xl dark:bg-white/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-52 w-52 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/20 dark:bg-white/10 dark:text-white/80">
            <Sparkles size={12} />
            Contact
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s design your payments journey together.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Share your goals and our team will send a clear next step within 24 hours.
          </p>
          <a href="#contact-form" className="btn-cta mt-9 inline-block px-10 py-4 text-base sm:px-14 sm:text-lg">
            Start Conversation
          </a>
        </motion.div>

        <div id="contact-form" className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <BorderGlow {...shinyCardProps} className="h-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-[30px] p-5 sm:space-y-6 sm:p-8 lg:p-10"
              >
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                  >
                    <CheckCircle size={18} className="shrink-0" />
                    <span>Thanks, we will reach out soon.</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600 dark:text-red-300"
                  >
                    <AlertCircle size={18} className="shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (validationErrors.name) setValidationErrors({ ...validationErrors, name: "" });
                    }}
                    className={`${inputBaseClass} ${validationErrors.name ? inputErrorClass : inputDefaultClass}`}
                    placeholder="Your full name"
                    disabled={loading}
                  />
                  {validationErrors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{validationErrors.name}</p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (validationErrors.email) setValidationErrors({ ...validationErrors, email: "" });
                      }}
                      className={`${inputBaseClass} ${validationErrors.email ? inputErrorClass : inputDefaultClass}`}
                      placeholder="you@company.com"
                      disabled={loading}
                    />
                    {validationErrors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{validationErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (validationErrors.phone) setValidationErrors({ ...validationErrors, phone: "" });
                      }}
                      className={`${inputBaseClass} ${validationErrors.phone ? inputErrorClass : inputDefaultClass}`}
                      placeholder="+91 98765 43210"
                      disabled={loading}
                    />
                    {validationErrors.phone && (
                      <p className="mt-1.5 text-xs text-red-500">{validationErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (validationErrors.message) setValidationErrors({ ...validationErrors, message: "" });
                    }}
                    className={`${inputBaseClass} ${validationErrors.message ? inputErrorClass : inputDefaultClass} resize-none`}
                    placeholder="Tell us about your business needs"
                    disabled={loading}
                  />
                  {validationErrors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{validationErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary-glow flex w-full items-center justify-center gap-2 py-3.5 text-base transition-all duration-200 sm:py-4 sm:text-lg ${loading ? "cursor-not-allowed opacity-70" : ""}`}
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Let&apos;s Connect
                    </>
                  )}
                </button>
              </form>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <BorderGlow {...shinyCardProps}>
              <div className="rounded-[30px] p-5 sm:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">Get in touch</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Choose the channel that feels best for you. We keep responses clear, fast, and human.
                </p>

                <div className="mt-6 space-y-3.5">
                  <a
                    href="tel:+916727359737"
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.04] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] dark:border-white/15 dark:bg-white/[0.06] dark:shadow-none">
                      <Phone size={18} className="text-foreground/90" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+91 6727-359737</p>
                    </div>
                  </a>

                  <a
                    href="mailto:magnipayleadgeneration@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.04] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] dark:border-white/15 dark:bg-white/[0.06] dark:shadow-none">
                      <Mail size={18} className="text-foreground/90" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">magnipayleadgeneration@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/916727359737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.04] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] dark:border-white/15 dark:bg-white/[0.06] dark:shadow-none">
                      <MessageCircle size={18} className="text-foreground/90" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">Start a quick chat</p>
                    </div>
                  </a>
                </div>
              </div>
            </BorderGlow>

            <BorderGlow {...shinyCardProps}>
              <div className="rounded-[30px] p-5 sm:p-8">
                <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg">Office</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Magnipay Technologies Private Limited
                  <br />
                  No. 1456, 4343, Kasoti, Pandiri,
                  <br />
                  Kendrapara, Odisha - 754211
                </p>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
