import { Link } from "react-router-dom";
import {
  ArrowLeft, FileText, Scale, Shield, UserCheck, Globe, RefreshCw, KeyRound,
  Receipt, Ban, XCircle, Eye, IndianRupee, Server, Store, BookOpen, Gavel,
  Wifi, Database, AlertTriangle, TrendingDown, Landmark, Power, CreditCard,
  RotateCcw, ShieldAlert, Wallet, Package, Copyright, ShieldOff, Unlink,
  Megaphone, Mail, MessageSquare, ScrollText, MinusCircle, Clock, BookCheck,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ── bullet helper ─────────────────────────────── */
const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary" />
    <span>{children}</span>
  </li>
);

/* ── sub‑card helper (for grouped items) ───────── */
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
  group?: string;
}

const sections: Section[] = [
  /* ─── Part A: General Terms ─── */
  {
    icon: FileText,
    num: "—",
    title: "Preamble",
    group: "General Terms & Conditions",
    content: (
      <>
        <p className="mb-3">
          This document is an electronic record in accordance with the provisions of the Information
          Technology Act, 2000 and the rules thereunder, including the Information Technology
          (Intermediaries Guidelines) Rules, 2011, as amended. It does not require any physical or
          digital signatures.
        </p>
        <p>
          This document constitutes the Terms of Use and governs your access to and usage of the
          website www.utkaldigital.in, its sub-domains, and any associated mobile applications
          (hereinafter referred to as the "Platform"), which are owned and operated by Magnipay
          Technologies Private Limited ("Company", "we", "us", or "our").
        </p>
      </>
    ),
  },
  {
    icon: Scale,
    num: "01",
    title: "Legal Acceptance",
    content: (
      <>
        <p className="mb-3">
          By accessing or using the Platform, you agree to comply with and be bound by these Terms &
          Conditions. If you do not agree to be legally bound by all the provisions herein, please do
          not use or access the Platform.
        </p>
        <p>
          These Terms apply to all users of the Platform, including but not limited to merchants,
          partners, and end-users. If you are using the Platform on behalf of an organization or
          employer, you represent and warrant that you are authorized to accept these Terms on their
          behalf.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    num: "02",
    title: "Ownership & Intellectual Property",
    content: (
      <p>
        The Platform contains proprietary materials including but not limited to logos, trademarks,
        images, content, designs, and software, which are owned by Magnipay Technologies Private
        Limited and protected by applicable intellectual property laws. You agree not to copy,
        reproduce, distribute, or create derivative works from any content without prior written
        permission.
      </p>
    ),
  },
  {
    icon: UserCheck,
    num: "03",
    title: "User Eligibility",
    content: (
      <>
        <p className="mb-3">Use of the Platform is permitted only to:</p>
        <ul className="space-y-2">
          <Bullet>Individuals who are at least 18 years of age, and</Bullet>
          <Bullet>Entities that can form legally binding contracts under applicable law.</Bullet>
        </ul>
        <p className="mt-3">If you do not meet these criteria, you are not eligible to use this Platform.</p>
      </>
    ),
  },
  {
    icon: Globe,
    num: "04",
    title: "Territorial Limitation",
    content: (
      <>
        <p className="mb-3">
          The Platform, services, and tools are intended solely for use within India. Users accessing
          the Platform from outside India do so at their own risk and are responsible for compliance
          with local laws.
        </p>
        <p>We reserve the right to restrict access to the Platform or specific services at our sole discretion.</p>
      </>
    ),
  },
  {
    icon: RefreshCw,
    num: "05",
    title: "Acceptance of Changes",
    content: (
      <p>
        We reserve the right to modify or update these Terms at any time without prior notice.
        Continued use of the Platform after such updates constitutes your acceptance of the revised
        terms. It is your responsibility to review these Terms periodically.
      </p>
    ),
  },
  {
    icon: KeyRound,
    num: "06",
    title: "Registration & Account Security",
    content: (
      <>
        <p className="font-semibold text-foreground mb-3">User Responsibilities:</p>
        <p className="mb-3">By registering on the Platform, you agree to:</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <InfoCard label="a. Accurate Information" detail="Provide accurate and complete information including your name, business details, PAN, Aadhaar, GSTIN (if applicable), email, and mobile number." />
          <InfoCard label="b. Credential Security" detail="Keep your login credentials secure and not share them with others." />
          <InfoCard label="c. Up-to-Date Records" detail="Ensure your information is kept up-to-date at all times." />
          <InfoCard label="d. Account Responsibility" detail="Be solely responsible for all activities under your account, whether authorized by you or not." />
        </div>
        <p className="text-sm font-medium text-foreground">Use of another user's account or impersonation is strictly prohibited.</p>
      </>
    ),
  },
  {
    icon: Receipt,
    num: "07",
    title: "GST Declaration",
    content: (
      <>
        <p className="mb-3 font-semibold text-foreground">If you are not registered under GST, you agree and declare:</p>
        <div className="space-y-3 mb-4">
          {[
            "I do hereby state that I am not required to register under the Goods and Services Tax Act, 2017, as my turnover is below the taxable threshold.",
            "I confirm that if in the future I become liable or choose to register under GST, I will promptly submit the required documents.",
            "I understand that false declarations may attract legal action, for which I take full responsibility.",
            "I authorize this electronic submission to act as a valid declaration of my non‑registration under the GST Act.",
          ].map((t, i) => (
            <blockquote key={i} className="border-l-2 border-primary/30 pl-4 italic text-sm">{`"${t}"`}</blockquote>
          ))}
        </div>
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/5 dark:bg-amber-400/5 p-4 text-sm">
          <strong className="text-foreground">Note:</strong> If you are a registered dealer, you must update your KYC details
          with our Accounts Department. Contact No.: <a href="tel:+916727359737" className="text-primary hover:underline font-medium">+91-6727-359737</a>
        </div>
      </>
    ),
  },
  {
    icon: Ban,
    num: "08",
    title: "Unauthorized Access",
    content: (
      <p>
        You may not access or attempt to access any part of the Platform that is password-protected,
        unless you are duly authorized. You must use only your assigned login credentials.
      </p>
    ),
  },
  {
    icon: XCircle,
    num: "09",
    title: "Termination of Use",
    content: (
      <p>
        We reserve the right to suspend or terminate your access to the Platform at any time, without
        prior notice, for any reason, including violation of these Terms.
      </p>
    ),
  },

  /* ─── Part B: Platform Usage, Privacy, Liability & Compliance ─── */
  {
    icon: Eye,
    num: "10",
    title: "Privacy",
    group: "Platform Usage, Privacy, Liability & Compliance",
    content: (
      <>
        <p className="mb-3">
          All personal data you provide during registration or use of the Platform is governed by our
          Privacy Policy. By using the Platform, you consent to our collection, use, disclosure, and
          protection of your data in accordance with the Privacy Policy.
        </p>
        <p className="mb-3">We may disclose your personal data to third parties when legally required to:</p>
        <ul className="space-y-2">
          <Bullet>Comply with applicable laws, regulations, legal processes, or governmental requests.</Bullet>
          <Bullet>Enforce these Terms & Conditions.</Bullet>
          <Bullet>Protect the rights, safety, or property of the Company, users, and the public.</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: IndianRupee,
    num: "11",
    title: "Rates, Services, and Tariffs",
    content: (
      <p>
        Your use of the Platform is governed by the applicable service rates, tariffs, and transaction
        terms in effect at the time of service provision, as detailed on our website/mobile application.
        These are subject to change without notice.
      </p>
    ),
  },
  {
    icon: Server,
    num: "12",
    title: "Service Access and Availability",
    content: (
      <ul className="space-y-2">
        <Bullet>While we endeavor to maintain error-free and uninterrupted services, we do not guarantee that the Platform will always be available or free of bugs, interruptions, or technical faults.</Bullet>
        <Bullet>Access may be restricted, suspended, or terminated at any time for maintenance, upgrades, or security reasons.</Bullet>
        <Bullet>We do not warrant the Platform is free of viruses, malware, or harmful components.</Bullet>
      </ul>
    ),
  },
  {
    icon: Store,
    num: "13",
    title: "Merchant Responsibilities",
    content: (
      <ul className="space-y-2">
        <Bullet>Merchants must not collect or handle cash on behalf of the Company unless explicitly authorized.</Bullet>
        <Bullet>Merchants must preload their accounts with sufficient funds to access services.</Bullet>
        <Bullet>Any cash-based settlement performed without Company authorization is solely the responsibility of the Merchant.</Bullet>
      </ul>
    ),
  },
  {
    icon: BookOpen,
    num: "14",
    title: "Content and Platform Use",
    content: (
      <>
        <p className="mb-3">
          You are granted a limited, non-exclusive, revocable, non-transferable license to access and
          use the Platform for your personal/business use.
        </p>
        <p className="mb-3 font-semibold text-foreground">You must not:</p>
        <ul className="space-y-2">
          <Bullet>Exploit the Platform or its content for commercial purposes without prior written consent.</Bullet>
          <Bullet>Upload or publish any content that violates copyrights, patents, or intellectual property rights.</Bullet>
          <Bullet>Upload content that is defamatory, obscene, indecent, or otherwise illegal.</Bullet>
          <Bullet>Upload content that contains viruses, harmful code, or malicious software.</Bullet>
          <Bullet>Engage in harassment, abuse, or any criminal activity.</Bullet>
        </ul>
        <p className="mt-3">We reserve the right to block, edit, or remove content that violates these Terms.</p>
      </>
    ),
  },
  {
    icon: Gavel,
    num: "15",
    title: "IT Act, 2000 Compliance",
    content: (
      <>
        <p className="mb-3">Users are strictly prohibited from uploading, sharing, or hosting content that:</p>
        <ul className="space-y-2">
          <Bullet>Infringes upon another's intellectual property rights.</Bullet>
          <Bullet>Is grossly offensive, defamatory, pornographic, or unlawful.</Bullet>
          <Bullet>Harms minors in any way.</Bullet>
          <Bullet>Threatens India's unity, integrity, or sovereignty.</Bullet>
          <Bullet>Contains software viruses or harmful code.</Bullet>
        </ul>
        <p className="mt-3">
          Violation may lead to termination of access and legal action under the IT Act and other
          applicable laws.
        </p>
      </>
    ),
  },
  {
    icon: Wifi,
    num: "16",
    title: "Technical Processing & Global Internet Considerations",
    content: (
      <>
        <p className="mb-3">Due to the technical nature of the Internet, you agree that:</p>
        <ul className="space-y-2">
          <Bullet>Data transmission may involve multiple networks and devices.</Bullet>
          <Bullet>Interruptions, latency, or changes may occur due to third-party infrastructure or network requirements.</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: Database,
    num: "17",
    title: "Data Protection & Security",
    content: (
      <p>
        We are not liable for loss, corruption, or unauthorized access to personal or payment data
        due to factors beyond our control. Use of the Platform implies acceptance of these risks.
      </p>
    ),
  },
  {
    icon: AlertTriangle,
    num: "18",
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p className="mb-3">The Platform is provided on an "as is" and "as available" basis. We expressly disclaim:</p>
        <ul className="space-y-2">
          <Bullet>All warranties (express or implied) of accuracy, performance, merchantability, or fitness for a particular purpose.</Bullet>
          <Bullet>Liability for content accuracy, third-party content, or links to other websites.</Bullet>
        </ul>
        <p className="mt-3">We do not guarantee uninterrupted or error-free service.</p>
      </>
    ),
  },
  {
    icon: TrendingDown,
    num: "19",
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-3">To the fullest extent permitted by law, the Company shall not be liable for:</p>
        <ul className="space-y-2">
          <Bullet>Any direct, indirect, incidental, punitive, or consequential damages.</Bullet>
          <Bullet>Loss of profits, data, or business opportunities.</Bullet>
          <Bullet>Unauthorized access to user data.</Bullet>
          <Bullet>Content or conduct of other users or third-party service providers.</Bullet>
          <Bullet>Delays, system failures, or force majeure events (e.g., natural disasters, war, government orders).</Bullet>
        </ul>
        <p className="mt-3">
          Total liability shall not exceed the service charges paid for the specific transaction giving
          rise to the claim.
        </p>
      </>
    ),
  },
  {
    icon: Landmark,
    num: "20",
    title: "Use of Financial Services",
    content: (
      <ul className="space-y-2">
        <Bullet>Upon registering, users may access Financial Services offered by third-party institutions including banks, NBFCs, and authorized payment providers.</Bullet>
        <Bullet>The Company is not the provider of such financial services.</Bullet>
        <Bullet>The Company makes no warranty or endorsement of any third-party financial services or products.</Bullet>
        <Bullet>Users must agree to and comply with additional terms of service imposed by the respective financial service providers.</Bullet>
      </ul>
    ),
  },
  {
    icon: Power,
    num: "21",
    title: "Suspension or Termination",
    content: (
      <>
        <p className="mb-3">We reserve the right to:</p>
        <ul className="space-y-2">
          <Bullet>Refuse service,</Bullet>
          <Bullet>Suspend or terminate user accounts,</Bullet>
          <Bullet>Block or remove content that violates these Terms or applicable laws.</Bullet>
        </ul>
      </>
    ),
  },

  /* ─── Part C: Cancellation, Refund & Payment ─── */
  {
    icon: RotateCcw,
    num: "22",
    title: "Cancellation and Refund Policy",
    group: "Cancellation, Refund & Payment Terms",
    content: (
      <div className="grid sm:grid-cols-2 gap-3">
        <InfoCard label="No Refund on User Cancellations" detail="No refunds will be processed if you cancel a bus ticket, for any reason." />
        <InfoCard label="Third-Party Cancellations" detail="If a bus or flight is cancelled due to unforeseen circumstances, any refund or rescheduling will depend on the airline or bus operator. UtkalDigital has no control over this." />
        <InfoCard label="Reserve Withholding on Cancellation" detail="If a booking is cancelled, UtkalDigital may withhold the cancellation amount from the Retailer's/Master Distributor's wallet or settlement amount to cover related fees, fines, or penalties." />
        <InfoCard label="Refund Credit Validity" detail="Refunds, if issued, will be credited to your wallet and must be used within one year." />
      </div>
    ),
  },
  {
    icon: CreditCard,
    num: "23",
    title: "Online Payment Agreement Terms",
    content: (
      <>
        <p className="mb-3 font-semibold text-foreground">Definitions:</p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong className="text-foreground">Facility Provider:</strong> Payment gateway UtkalDigital partners with.</Bullet>
          <Bullet><strong className="text-foreground">Merchant:</strong> Any Retailer, Distributor, or Super Distributor using UtkalDigital's services.</Bullet>
        </ul>
        <p className="mb-3 font-semibold text-foreground">Merchant Responsibilities:</p>
        <ul className="space-y-2">
          <Bullet>Use the payment gateway only for lawful purposes.</Bullet>
          <Bullet>Do not misuse customer data; use it only for completing transactions.</Bullet>
          <Bullet>Always comply with applicable laws and guidelines.</Bullet>
          <Bullet>UtkalDigital is not liable for service disputes or inaccuracies; the Merchant is solely responsible.</Bullet>
          <Bullet>Merchants must help UtkalDigital resolve cardholder complaints related to bill payments.</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: ShieldAlert,
    num: "24",
    title: "Chargebacks",
    content: (
      <div className="grid sm:grid-cols-2 gap-3">
        <InfoCard label="Notification" detail="Merchants will be notified of any chargeback." />
        <InfoCard label="Evidence Submission" detail="Merchants must submit proof within 5 days if they want to dispute a chargeback." />
        <InfoCard label="Chargeback Reversal" detail="If insufficient proof is submitted, or the provider is unsatisfied, the chargeback amount will be reversed to the cardholder." />
        <InfoCard label="Fund Withholding" detail="UtkalDigital can hold chargeback amounts in reserve or settlement amounts." />
        <InfoCard label="Liability" detail="If UtkalDigital cannot recover chargeback funds from the merchant, the merchant must repay immediately." />
        <InfoCard label="Withholding Period" detail="UtkalDigital may withhold a portion of settlement funds for up to 120 days for chargeback resolution." />
      </div>
    ),
  },
  {
    icon: ShieldOff,
    num: "25",
    title: "Indemnification",
    content: (
      <>
        <p className="mb-3">Merchants agree to indemnify UtkalDigital and its partners against:</p>
        <ul className="space-y-2">
          <Bullet>Security breaches due to negligence.</Bullet>
          <Bullet>Fraudulent transactions.</Bullet>
          <Bullet>Non-compliance with legal or tax requirements.</Bullet>
          <Bullet>Customer complaints or disputes.</Bullet>
          <Bullet>Intellectual property violations.</Bullet>
        </ul>
        <p className="mt-3">UtkalDigital can directly debit such indemnity costs from the merchant's wallet or settlement account.</p>
      </>
    ),
  },
  {
    icon: Wallet,
    num: "26",
    title: "Wallet Loading Clause",
    content: (
      <ul className="space-y-2">
        <Bullet>Merchants can load the wallet using cards, net banking, or UPI.</Bullet>
        <Bullet>Merchants are fully responsible for verifying the identity of cardholders.</Bullet>
        <Bullet>Merchants must resolve disputes arising from these transactions.</Bullet>
      </ul>
    ),
  },

  /* ─── Part D: Additional Provisions ─── */
  {
    icon: Package,
    num: "27",
    title: "Product & Service Availability",
    group: "Additional Provisions",
    content: (
      <ul className="space-y-2">
        <Bullet>The website/app may be accessible globally but does not guarantee availability of products/services in any specific country or jurisdiction.</Bullet>
        <Bullet>Use of the site/app cannot establish personal jurisdiction in regions where the business is not officially operating.</Bullet>
      </ul>
    ),
  },
  {
    icon: Copyright,
    num: "28",
    title: "Intellectual Property Rights",
    content: (
      <>
        <ul className="space-y-2 mb-4">
          <Bullet>All content (design, code, text, logos, software) is protected under international IP laws.</Bullet>
          <Bullet>Copyrights belong to Champion Software Technologies Limited or its licensors.</Bullet>
          <Bullet>Users may not modify, distribute, or use the material for commercial purposes without written permission.</Bullet>
          <Bullet>A policy is in place to terminate accounts that infringe on copyrights.</Bullet>
        </ul>
        <p className="mb-3 font-semibold text-foreground">To report IP infringement, users must submit:</p>
        <ul className="space-y-2">
          <Bullet>Signature of the copyright owner</Bullet>
          <Bullet>Description and location of the infringement</Bullet>
          <Bullet>Contact details</Bullet>
          <Bullet>Good faith belief statement</Bullet>
          <Bullet>Perjury statement</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: ShieldOff,
    num: "29",
    title: "User Indemnification",
    content: (
      <p>
        Users agree to indemnify UtkalDigital and its affiliates against claims arising from misuse,
        violations, or third-party actions using the user's account.
      </p>
    ),
  },
  {
    icon: XCircle,
    num: "30",
    title: "Termination",
    content: (
      <>
        <p className="mb-3">UtkalDigital may terminate access:</p>
        <ul className="space-y-2">
          <Bullet>Without prior notice.</Bullet>
          <Bullet>If users provide false info, breach terms, spam, impersonate, or misuse the platform.</Bullet>
          <Bullet>Can restrict features/services per user type or group.</Bullet>
        </ul>
      </>
    ),
  },
  {
    icon: Unlink,
    num: "31",
    title: "Third-Party Links",
    content: (
      <ul className="space-y-2">
        <Bullet>Linked sites are not under UtkalDigital's control.</Bullet>
        <Bullet>Not responsible for third-party content or user experience.</Bullet>
        <Bullet>Users must comply with the third-party site's policies.</Bullet>
      </ul>
    ),
  },
  {
    icon: Megaphone,
    num: "32",
    title: "Advertiser Terms",
    content: (
      <ul className="space-y-2">
        <Bullet>Advertisers are fully responsible for ad placement and user interactions.</Bullet>
        <Bullet>IP and rights of site content remain with UtkalDigital.</Bullet>
        <Bullet>UtkalDigital is not liable for any loss caused to users through ads.</Bullet>
      </ul>
    ),
  },
  {
    icon: Mail,
    num: "33",
    title: "Notices",
    content: (
      <>
        <p className="mb-3">
          Notices to UtkalDigital must be in writing to:{" "}
          <strong className="text-foreground">Champion Software Technologies Limited, 1456, 4343, Kasoti, Pandiri, Kendrapara, 754211, Odisha.</strong>
        </p>
        <p>Notices to users may be via email, courier, or post to last known contact details.</p>
      </>
    ),
  },
  {
    icon: MessageSquare,
    num: "34",
    title: "Feedback",
    content: (
      <p>
        Reviews are user-generated and not pre-moderated. If offended, users may write to{" "}
        <a href="mailto:info@utkaldigital.in" className="text-primary hover:underline font-medium">info@utkaldigital.in</a>{" "}
        for removal consideration.
      </p>
    ),
  },
  {
    icon: ScrollText,
    num: "35",
    title: "Governing Law",
    content: (
      <p>
        These Terms are governed by Indian law. Jurisdiction lies with the Courts of Odisha.
      </p>
    ),
  },
  {
    icon: MinusCircle,
    num: "36",
    title: "Non-Waiver & Severability",
    content: (
      <ul className="space-y-2">
        <Bullet>A failure to enforce terms doesn't waive rights.</Bullet>
        <Bullet>If any clause is invalidated by law, other parts remain enforceable.</Bullet>
      </ul>
    ),
  },
  {
    icon: Clock,
    num: "37",
    title: "Statute of Limitations",
    content: (
      <p>
        Claims must be raised within 1 month of cause; otherwise, they are permanently barred.
      </p>
    ),
  },
  {
    icon: BookCheck,
    num: "38",
    title: "Entire Agreement",
    content: (
      <p>
        These Terms override any other agreements with Champion Software Technologies Limited
        regarding the website/app.
      </p>
    ),
  },
  {
    icon: Phone,
    num: "39",
    title: "Contact Information",
    content: (
      <div className="rounded-xl border border-border/60 dark:border-white/10 bg-muted/30 dark:bg-white/5 p-5 space-y-2 text-sm">
        <p className="font-semibold text-foreground text-base mb-3">Magnipay Technologies Private Limited</p>
        <p><strong className="text-foreground">Registered Office:</strong> No. 1456, 4343, Kasoti, Pandiri, Kendrapara, Odisha – 754211</p>
        <p><strong className="text-foreground">Phone:</strong>{" "}
          <a href="tel:+916727359737" className="text-primary hover:underline">+91-6727-359737</a>
        </p>
        <p><strong className="text-foreground">Website:</strong>{" "}
          <a href="https://www.utkaldigital.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.utkaldigital.in</a>
        </p>
      </div>
    ),
  },
];

/* ── component ─────────────────────────────────── */
const TermsOfService = () => {
  let currentGroup = "";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
        />
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
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Scale size={12} />
            Legal
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Effective Date: August 1, 2025 &nbsp;·&nbsp; Last Updated: August 1, 2025
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Magnipay Technologies Private Limited
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s) => {
            const showGroupHeader = s.group && s.group !== currentGroup;
            if (s.group) currentGroup = s.group;

            return (
              <div key={s.num + s.title}>
                {showGroupHeader && (
                  <div className="pt-8 pb-4 first:pt-0">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">{s.group}</h3>
                    <div className="mt-2 h-px w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                )}
                <section className="neon-card p-6 sm:p-8 group transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-shadow duration-300">
                      <s.icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        {s.num !== "—" && (
                          <span className="text-xs font-bold text-primary/50 tracking-widest">{s.num}</span>
                        )}
                        <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                      </div>
                      <div className="text-base text-muted-foreground leading-relaxed">
                        {s.content}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
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

export default TermsOfService;
