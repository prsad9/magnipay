import { Link } from "react-router-dom";
import { LuArrowLeft as ArrowLeft, LuShield as Shield, LuDatabase as Database, LuMapPin as MapPin, LuCookie as Cookie, LuExternalLink as ExternalLink, LuLock as Lock, LuUserCheck as UserCheck, LuMail as Mail } from "react-icons/lu";
import type { IconType as LucideIcon } from "react-icons";

/* ── helpers ───────────────────────────────────── */
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
    <span>{children}</span>
  </li>
);

const InfoCard = ({ label, detail }: { label: string; detail: string }) => (
  <div className="rounded-xl border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 p-4">
    <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
    <p className="text-sm leading-relaxed">{detail}</p>
  </div>
);

/* ── section data ──────────────────────────────── */
interface Section {
  icon: LucideIcon;
  num: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    icon: Shield,
    num: "01",
    title: "General Policy",
    content: (
      <ul className="space-y-2">
        <Bullet>UtkalDigital does not sell, rent, or share your personal information with third parties for marketing purposes.</Bullet>
        <Bullet>Communication via email or SMS will only be related to services and products you have agreed to.</Bullet>
        <Bullet>UtkalDigital may share aggregated, non-personal statistics (e.g., number of users, types of services used) for analytical purposes.</Bullet>
        <Bullet>We may disclose personal information if legally required to do so in compliance with applicable laws or regulations.</Bullet>
      </ul>
    ),
  },
  {
    icon: Database,
    num: "02",
    title: "Personal Information We Collect",
    content: (
      <>
        <p className="mb-4">We collect the following types of information:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <InfoCard label="Contact Information" detail="Name, address, phone number, and email." />
          <InfoCard label="Payment Details" detail="Credit/debit card numbers, expiration dates, cardholder names, wallet transactions." />
          <InfoCard label="Service-Related Data" detail="Information related to your mobile phone, DTH service, electricity connection, etc." />
          <InfoCard label="Device & Access Information" detail="IP address, ISP details, domain/host info, browser type, and anonymous usage statistics." />
        </div>
        <p className="mt-4 text-sm">
          This information may be voluntarily submitted by you when using services or automatically
          collected to improve service quality.
        </p>
      </>
    ),
  },
  {
    icon: MapPin,
    num: "03",
    title: "Location Information",
    content: (
      <>
        <p className="mb-3">We may collect and use your real-time location data to:</p>
        <ul className="space-y-2 mb-3">
          <Bullet>Identify your geographic region for service optimization.</Bullet>
          <Bullet>Enhance security and fraud detection.</Bullet>
          <Bullet>Provide relevant services and offers based on your location.</Bullet>
        </ul>
        <p>You can manage or revoke location permissions through your device settings at any time.</p>
      </>
    ),
  },
  {
    icon: Cookie,
    num: "04",
    title: "Use of Cookies",
    content: (
      <>
        <p className="mb-3">
          Cookies are small data files stored on your browser that help personalize your web
          experience. UtkalDigital uses cookies to:
        </p>
        <ul className="space-y-2 mb-3">
          <Bullet>Remember transaction sessions and user preferences.</Bullet>
          <Bullet>Understand user activity and improve site functionality.</Bullet>
          <Bullet>Compile aggregated traffic and interaction data for analytics.</Bullet>
        </ul>
        <p>
          You can disable cookies via your browser settings. However, doing so may affect the
          functionality of some features and services.
        </p>
      </>
    ),
  },
  {
    icon: ExternalLink,
    num: "05",
    title: "Third-Party Services & Links",
    content: (
      <p>
        Our platform may contain links to third-party websites or services. These external sites have
        their own privacy policies and UtkalDigital assumes no responsibility for their content,
        practices, or data usage. We recommend reviewing their privacy policies before sharing any
        information.
      </p>
    ),
  },
  {
    icon: Lock,
    num: "06",
    title: "Data Security",
    content: (
      <>
        <p className="mb-3">
          We employ robust physical, technical, and administrative safeguards to protect your personal
          data. Measures include:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <InfoCard label="Secure Servers" detail="Secure server access for sensitive information." />
          <InfoCard label="Encryption" detail="Encrypted data transmission across all channels." />
          <InfoCard label="Access Controls" detail="Restricted access protocols for authorized personnel only." />
        </div>
        <p>
          While we strive to protect your data, no transmission over the internet is 100% secure. We
          urge you to keep your login credentials confidential.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    num: "07",
    title: "Your Consent",
    content: (
      <>
        <p className="mb-3">
          By accessing the UtkalDigital platform and voluntarily submitting your personal information,
          you consent to:
        </p>
        <ul className="space-y-2">
          <Bullet>The collection, use, and storage of your data as described in this Privacy Policy.</Bullet>
          <Bullet>The sharing of data as necessary for service delivery, legal compliance, and fraud prevention.</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: Mail,
    num: "08",
    title: "Contact Us",
    content: (
      <div className="rounded-xl border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 p-5 space-y-2 text-sm">
        <p className="font-semibold text-foreground text-base mb-3">Magnipay Technologies Private Limited</p>
        <p><strong className="text-foreground">Registered Office:</strong> No. 1456, 4343, Kasoti, Pandiri, Kendrapara, Odisha – 754211</p>
        <p><strong className="text-foreground">Email:</strong>{" "}
          <a href="mailto:info@utkaldigital.in" className="text-primary hover:underline font-medium">info@utkaldigital.in</a>
        </p>
        <p><strong className="text-foreground">Website:</strong>{" "}
          <a href="https://utkaldigital.in" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">UtkalDigital.in</a>
        </p>
      </div>
    ),
  },
];

/* ── component ─────────────────────────────────── */
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent)" }} />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(var(--secondary)), transparent)" }} />
      </div>

      <div className="container max-w-4xl pt-28 pb-16 sm:py-16 px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Shield size={12} />
            Legal
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: August 1, 2025 &nbsp;·&nbsp; Last Updated: August 1, 2025
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Magnipay Technologies Private Limited
          </p>
        </div>

        {/* Intro card */}
        <div className="neon-card p-6 sm:p-8 mb-8">
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Magnipay Technologies Private Limited, having its registered office at No. 1456, 4343,
            Kasoti, Pandiri, Kendrapara, 754211, Odisha, operates under the brand name{" "}
            <strong className="text-foreground">UtkalDigital</strong>. We value your trust and are
            committed to protecting your privacy.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            This Privacy Policy outlines how UtkalDigital collects, uses, stores, and protects your
            personal data when you access our website (
            <a href="https://utkaldigital.in" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">https://UtkalDigital.in</a>
            ) or use our mobile applications. By visiting or using any part of the UtkalDigital
            platform, you agree to the terms of this Privacy Policy. If you do not agree, please do
            not access our services.
          </p>
          <div className="rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-4 text-sm">
            <strong className="text-foreground">Note:</strong> This Privacy Policy is subject to change
            without prior notice. Please review it periodically to stay informed about updates.
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s) => (
            <section
              key={s.num}
              className="neon-card p-6 sm:p-8 group transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg
                  group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-shadow duration-300">
                  <s.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary/50 tracking-widest">{s.num}</span>
                    <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                  </div>
                  <div className="text-base text-muted-foreground leading-relaxed">
                    {s.content}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Magnipay Technologies Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
