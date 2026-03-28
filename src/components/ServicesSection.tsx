import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode, ArrowRightLeft, Banknote,
  Smartphone, RefreshCcw, Search, Layers, X,
  Landmark, Shield, Car, Bike, Truck, Bus, TrainFront, Plane,
  Phone, Tv, Zap, Receipt, Fingerprint, Wallet, Building2,
  PackageCheck, ShoppingCart, Send, CreditCard, Globe, IndianRupee,
  HandCoins, CircleDollarSign, BadgePercent, Heart, LifeBuoy, Hotel,
  Gift, CheckCircle, Home, GraduationCap,
} from "lucide-react";

const categories = [
  {
    id: "cat-collections",
    title: "Collections",
    icon: Layers,
    gradient: "from-blue-500 to-indigo-600",
    image: "/collections.jpg",
    imageAlt: "QR code payment collection",
    imagePosition: "right",
    services: [
      { icon: Smartphone, title: "UPI Collection API", desc: "Accept UPI payments instantly with our robust API. Seamless integration for web and mobile.", greeting: "Thanks for choosing UPI payments! Enjoy 99.9% uptime, industry-leading security, and real-time notifications for every transaction.", longDesc: "Our UPI Collection API allows merchants to accept payments directly from any UPI app. With industry-leading uptime of 99.9%, advanced security protocols, and comprehensive API documentation, integration takes just hours. We support all major UPI providers and offer real-time payment notifications, automatic reconciliation, and detailed transaction reporting for your business." },
      { icon: QrCode, title: "Static QR", desc: "Generate permanent QR codes for your business. Customers scan and pay in seconds.", greeting: "Thanks for choosing QR codes! Create unlimited codes with real-time payment tracking and bulk generation at your fingertips.", longDesc: "Create unlimited static QR codes that can be printed and displayed permanently. Each QR code routes payments through your Magnipay merchant account, allowing you to accept payments from any UPI app. Features include customizable QR code designs, real-time payment tracking, bulk QR generation, and integration with your existing inventory systems." },
      { icon: Search, title: "QR Standee", desc: "Physical QR standees for retail and offline merchants. Track every transaction in real time.", greeting: "Thanks for choosing QR Standees! Increase payment conversions with durable, professional standees and real-time transaction monitoring.", longDesc: "Professional-grade QR standees designed for retail stores, restaurants, and service centers. Made from durable materials with weather-resistant finishing, these standees help increase payment conversions. Each transaction is tracked in real-time with instant notifications, and you can monitor customer payment patterns and peak hours." },
    ],
  },
  {
    id: "cat-aadhaar",
    title: "Aadhaar Enabled Payments",
    icon: Fingerprint,
    gradient: "from-emerald-500 to-teal-600",
    image: "/aadhaar-payments.png",
    imageAlt: "Biometric fingerprint authentication",
    imagePosition: "left",
    services: [
      { icon: Fingerprint, title: "Aadhaar ATM", desc: "Enable cash withdrawals using Aadhaar authentication. Bring banking to every doorstep in rural & urban India.", greeting: "Thanks for choosing Aadhaar ATM! Enable Financial inclusion with biometric verification, no card needed, and earn attractive commissions.", longDesc: "Our Aadhaar ATM service enables any merchant point to function as a cash withdrawal center using biometric verification. Customers can withdraw cash using just their Aadhaar number and fingerprint - no card needed. This brings financial inclusion to underserved areas while merchants earn attractive commissions on each transaction." },
      { icon: Wallet, title: "Micro ATM Services", desc: "Turn any business point into a micro ATM. Let customers withdraw cash with biometric verification.", greeting: "Thanks for choosing Micro ATM! Convert your outlet into a banking hub with secure connectivity and steady commission income.", longDesc: "Convert your store, kiosk, or business outlet into a micro ATM with our plug-and-play solution. Equipped with fingerprint scanners and secure connectivity, micro ATMs enable basic banking services - withdrawals, deposits, and balance inquiries. Customers trust the familiar biometric authentication, and you get steady commission income." },
      { icon: IndianRupee, title: "Balance Enquiry", desc: "Instant Aadhaar-linked bank balance checks. Empower customers with quick access to their account info.", greeting: "Thanks for choosing Balance Enquiry! Integrate with all major banks, offer free service, and boost customer loyalty.", longDesc: "Provide instant account balance information to customers without requiring them to visit a bank. Our Aadhaar-linked balance enquiry service integrates with all major banks and is completely free for end customers. Ideal for retail outlets and service centers as a value-added service that increases customer loyalty." },
    ],
  },
  {
    id: "cat-banking",
    title: "Banking",
    icon: Landmark,
    gradient: "from-amber-500 to-orange-600",
    image: "/banking.jpg",
    imageAlt: "Bank transfer and payout services",
    imagePosition: "right",
    services: [
      { icon: Banknote, title: "Payout API", desc: "Send payouts to any bank account in India. Instant IMPS, NEFT, and RTGS transfers.", greeting: "Thanks for choosing Payout API! Automate bulk payouts with account validation, real-time tracking, and detailed audit trails.", longDesc: "Automate your payout operations with our robust Payout API. Send bulk payouts to thousands of beneficiaries across India using IMPS, NEFT, or RTGS modes. Features include automatic bank account validation, duplicate prevention, detailed audit trails, and real-time status tracking. Perfect for salary disbursements, vendor payments, and refunds." },
      { icon: ArrowRightLeft, title: "IMPS / NEFT / RTGS", desc: "Multiple transfer modes for all payout needs. Choose speed vs cost based on your use case.", greeting: "Thanks for choosing our transfer modes! Optimize every transaction with automatic routing for maximum success rates.", longDesc: "Choose the transfer mode that best fits your needs. IMPS for instant same-day transfers with competitive rates, NEFT for scheduled batch processing at lower costs, and RTGS for high-value transactions. Our system automatically selects the optimal route based on amount, urgency, and bank networks to maximize success rates." },
      { icon: RefreshCcw, title: "Auto Reconciliation", desc: "Automated reconciliation for all transactions. Save hours of manual work daily.", greeting: "Thanks for choosing Auto Reconciliation! Match statements in real-time, flag discrepancies instantly, and integrate with your accounting software.", longDesc: "Eliminate manual reconciliation with our AI-powered automatic matching system. We match incoming bank statements with your transaction records in real-time, flagging discrepancies instantly. Detailed reconciliation reports are generated automatically, and you can integrate directly with your accounting software for seamless financial management." },
    ],
  },
  {
    id: "cat-payment-services",
    title: "Payment Services",
    icon: CreditCard,
    gradient: "from-indigo-500 to-blue-600",
    image: "/payment-services.jpg",
    imageAlt: "Payment terminal and POS device",
    imagePosition: "left",
    services: [
      { icon: QrCode, title: "Bharat QR", desc: "Accept payments via Bharat QR — interoperable across all banks. One QR for Visa, Mastercard, RuPay & UPI.", greeting: "Thanks for choosing Bharat QR! One unified QR code for all payment methods with NPCI and RBI endorsement.", longDesc: "Bharat QR is India's single, unified QR code standard that works across UPI, RuPay cards, and international card networks. One QR code replaces the need for multiple payment solutions. It's secure, interoperable, and endorsed by NPCI, RBI, and all major banks. Perfect for merchants wanting simplicity without compromising on reach." },
      { icon: CreditCard, title: "POS & mPOS", desc: "Digital and mobile point-of-sale solutions for merchants. Accept cards, UPI, and wallets anywhere.", greeting: "Thanks for choosing mPOS! Transform any device into a secure terminal with EMV certification and real-time inventory tracking.", longDesc: "Transform any smartphone or tablet into a secure payment terminal with our mPOS app. Accept debit cards, credit cards, UPI, and popular digital wallets. Modern EMV certification ensures security, while real-time inventory integration keeps your stock accurate. Cloud-based analytics help you understand customer behavior and optimize your sales strategy." },
      { icon: Globe, title: "Payment Gateway", desc: "Unified online payment gateway supporting cards, net banking, UPI, and wallets with instant settlement.", greeting: "Thanks for choosing our Payment Gateway! Support all payment methods with bank-grade security, fraud detection, and instant settlements.", longDesc: "Integrate our powerful payment gateway to accept all payment methods on your e-commerce platform. Support for credit/debit cards, net banking, UPI, mobile wallets, and Buy Now Pay Later options. We handle bank-grade security, fraud detection, and offer instant settlements directly to your bank account with detailed reporting." },
      { icon: Building2, title: "Merchant Account Onboarding", desc: "Quick onboarding for merchant accounts with bank and KYC integration.", greeting: "Thanks for choosing Merchant Onboarding! Get quick approvals, secure KYC flow, and faster go-live.", longDesc: "Reduce onboarding time with automated KYC verification and bank partner setup. Our merchant onboarding includes dashboard access, API keys, and documentation for easy integration." }
    ],
  },
  {
    id: "cat-cash-management",
    title: "Cash Management",
    icon: HandCoins,
    gradient: "from-orange-500 to-red-600",
    image: "/cash-management.jpg",
    imageAlt: "Cash management and reconciliation",
    imagePosition: "right",
    services: [
      { icon: HandCoins, title: "EMI Collections", desc: "End-to-end EMI and cash collections for NBFCs and lenders. Digital receipts with real-time tracking.", greeting: "Thanks for choosing EMI Collections! Streamline loan collections with automated reminders and real-time dashboards.", longDesc: "Streamline EMI and loan collection with our digital collection platform. Borrowers receive automated payment reminders and can pay through multiple channels (UPI, cards, net banking). Our system automatically reconciles payments with loan accounts, generates digital receipts, and provides lenders with real-time collection dashboards and default alerts." },
      { icon: PackageCheck, title: "E-commerce Cash Drops", desc: "Cash-on-delivery collection for e-commerce and logistics partners. Automated settlement and reporting.", greeting: "Thanks for choosing E-commerce Cash Drops! Get automatic settlement within 24 hours with full reconciliation and transparency.", longDesc: "Our COD collection solution integrates with your e-commerce and logistics operations. Delivery agents collect cash from customers and deposit directly through our app. Automatic settlement happens within 24 hours with full reconciliation. You get real-time visibility into collection status, and customers receive digital payment receipts for transparency." },
      { icon: CircleDollarSign, title: "Cash Reconciliation", desc: "Comprehensive cash management services for businesses. Reduce cash handling risk with digital reconciliation.", greeting: "Thanks for choosing Cash Reconciliation! Replace manual counting with digital tracking, multi-level approvals, and instant alerts.", longDesc: "Replace manual cash counting and reconciliation with our digital system. Track cash in hand, receipts, and deposits in real-time. Multi-level approval workflows ensure accountability, and automated reports flag discrepancies immediately. Reduce cash handling risks, improve security, and get complete financial visibility across all your outlets." },
    ],
  },
  {
    id: "cat-remittance",
    title: "Money Remittance",
    icon: Send,
    gradient: "from-purple-500 to-violet-600",
    image: "/money-remittance.jpg",
    imageAlt: "Money transfer and remittance services",
    imagePosition: "left",
    services: [
      { icon: Send, title: "Indo-Nepal Remittance", desc: "Fast and secure cross-border money transfers to Nepal. Competitive exchange rates with instant delivery.", greeting: "Thanks for choosing Indo-Nepal Remittance! Send money safely with competitive rates and 24/7 multilingual support.", longDesc: "Send money to Nepal safely and affordably. Our partnership with major Nepali banks ensures funds reach beneficiaries within minutes. Competitive exchange rates with no hidden charges, transparent tracking of every transaction, and 24/7 customer support in multiple languages. Perfect for NRIs and businesses with cross-border operations." },
      { icon: Globe, title: "Domestic Remittance", desc: "Send money to any bank account across India instantly. Low fees with real-time transfer confirmation.", greeting: "Thanks for choosing Domestic Remittance! Transfer instantly via IMPS, UPI, NEFT with beneficiary verification and notifications.", longDesc: "Transfer money between any two bank accounts in India instantly. Our platform supports IMPS, UPI, and NEFT modes with real-time status tracking. Beneficiary verification ensures funds reach the right person, and both sender and receiver get instant notifications. Volume-based discounts available for businesses with high transaction volumes." },
      { icon: Wallet, title: "Wallet Transfers", desc: "Transfer funds between wallets and bank accounts seamlessly. Instant top-ups and withdrawals 24×7.", greeting: "Thanks for choosing Wallet Transfers! Move money with zero friction, no daily limits, and full audit trails.", longDesc: "Move money between digital wallets and bank accounts with zero friction. Top up any wallet instantly while maintaining full audit trails. Withdraw from wallets to bank accounts anytime without daily limits. Our system integrates with all major e-wallet platforms, providing flexibility for customers and operational efficiency." },
    ],
  },
  {
    id: "cat-insurance",
    title: "Insurance",
    icon: Shield,
    gradient: "from-sky-500 to-blue-600",
    image: "/insurance.jpg",
    imageAlt: "Insurance protection and coverage",
    imagePosition: "right",
    services: [
      { icon: Heart, title: "Health Insurance", desc: "Comprehensive health coverage for you and your family. Cashless treatment at network hospitals nationwide.", greeting: "Thanks for choosing Health Insurance! Access 10,000+ hospitals with cashless treatment and claim settlement in 48 hours.", longDesc: "Afford quality healthcare with our comprehensive health insurance plans. Coverage for hospitalization, outpatient treatments, diagnostic tests, and preventive care. Access a network of 10,000+ hospitals nationwide for cashless treatment. Affordable premiums with flexible payment options, and claim settlement within 48 hours." },
      { icon: LifeBuoy, title: "Term Life Insurance", desc: "Affordable term life plans to protect your family's future. Get coverage up to 1 crore with easy online application.", greeting: "Thanks for choosing Term Life Insurance! Get coverage up to ₹1 crore with instant policy issuance and hassle-free claims.", longDesc: "Protect your family's financial future with affordable term life insurance. Get up to ₹1 crore coverage with flexible tenures from 10 to 40 years. Competitive premiums based on health profile, instant policy issuance after online verification, and hassle-free claims settlement within 5 days." },
      { icon: Car, title: "Car Insurance", desc: "Comprehensive car insurance coverage with instant claims. Protect your vehicle against all risks.", greeting: "Thanks for choosing Car Insurance! Get cashless repairs, 24/7 roadside assistance, and quick claim settlement.", longDesc: "Complete protection for your vehicle against thefts, accidents, natural disasters, and third-party liabilities. Comprehensive coverage includes own damage and third-party liability, cashless repairs at authorized service centers, 24/7 roadside assistance, and online claim filing for quick settlement." },
      { icon: Bike, title: "Bike Insurance", desc: "Affordable two-wheeler insurance with quick settlement. Complete protection for your motorcycle.", greeting: "Thanks for choosing Bike Insurance! Instant policy issuance with claim settlement in 10 days and authorized repair network.", longDesc: "Affordable protection for your motorcycle with customizable coverage options. Choose between third-party (legal requirement) and comprehensive plans based on your needs. Instant policy issuance, quick claim settlement within 10 days, and access to a network of authorized repair centers across India." },
    ],
  },
  {
    id: "cat-travel",
    title: "Travel",
    icon: Plane,
    gradient: "from-violet-600 to-purple-700",
    image: "/travel.jpg",
    imageAlt: "Travel booking and flight tickets",
    imagePosition: "left",
    services: [
      { icon: Bus, title: "Bus Ticket Booking", desc: "Book intercity and local bus tickets instantly. Secure payments with easy cancellation options.", greeting: "Thanks for choosing Bus Booking! Partner with 200+ operators with real-time seat selection and 24-hour refunds.", longDesc: "Book bus tickets for intercity journeys and local commutes through our platform. Partner with 200+ bus operators across India. Real-time seat selection, instant e-tickets, flexible cancellation policies, and refunds within 24 hours. Price comparison tools help you find the best deals, and loyalty rewards earn you credits on every booking." },
      { icon: TrainFront, title: "Train Ticket Booking", desc: "Reserve train tickets across all major routes. Real-time availability and instant confirmation.", greeting: "Thanks for choosing Train Booking! IRCTC integrated with instant ticket delivery and flexible cancellation.", longDesc: "Book Indian Railway tickets for all classes from Sleeper to First AC with real-time availability. Avoid queues at ticket counters with instant online booking. Instant ticket delivery via SMS and email, seat selection at time of booking, and easy cancellation with automatic refunds. Integrated with IRCTC for comprehensive coverage." },
      { icon: Plane, title: "Flight Ticket Booking", desc: "Book domestic and international flights seamlessly. Best deals with flexible payment options.", greeting: "Thanks for choosing Flight Booking! Compare all airlines with exclusive deals, flexible payments, and 24/7 support.", longDesc: "Compare and book domestic and international flights from all major airlines. Exclusive deals and discounts available through our platform. Flexible payment options including installments, instant booking confirmation, and easy rebooking/cancellation. 24/7 customer support in case of flight changes or emergencies." },
      { icon: Hotel, title: "Hotel Booking", desc: "Find and book hotels worldwide. Compare prices, read reviews, and get exclusive deals on accommodations.", greeting: "Thanks for choosing Hotel Booking! Millions of hotels with best price guarantee and free cancellation up to 48 hours.", longDesc: "Choose from millions of hotels worldwide with detailed photos, guest reviews, and ratings. Real-time availability with best price guarantee, exclusive discounts on direct bookings, and flexible cancellation policies. Free cancellation on most hotels up to 24-48 hours before check-in, and instant confirmation with digital vouchers." },
    ],
  },
  {
    id: "cat-bills",
    title: "Bill Payments & Recharges",
    icon: Zap,
    gradient: "from-yellow-500 to-amber-600",
    image: "/bill-payments.png",
    imageAlt: "Bill payments and utility recharges",
    imagePosition: "right",
    services: [
      { icon: Phone, title: "Mobile Recharge", desc: "Instant prepaid and postpaid mobile recharges. Support for all major telecom operators.", greeting: "Thanks for choosing Mobile Recharge! All operators supported with instant activation and transaction history tracking.", longDesc: "Recharge mobile phones instantly for all operators (Jio, Airtel, Vodafone, BSNL, etc.) with multiple denomination options. Choose from special plans, talktime, data bundles, and validity extensions. Instant activation without any delays, transaction history tracking, and automatic receipt generation for record-keeping." },
      { icon: Tv, title: "DTH Recharge", desc: "Recharge your DTH connection in seconds. All major DTH providers supported with instant activation.", greeting: "Thanks for choosing DTH Recharge! All major providers with instant activation and easy plan management.", longDesc: "Recharge DTH connections for all major providers (Dish TV, Tata Play, Airtel Digital, Sun Direct) in seconds. Choose from various subscription plans and offers curated by each provider. Instant activation - watch your favorite shows without interruption. Easy plan comparison and management from your account dashboard." },
      { icon: Zap, title: "Electricity Bill", desc: "Pay electricity bills quickly and securely. Covers all state electricity boards and providers.", greeting: "Thanks for choosing Electricity Bill Payment! All boards supported with instant receipt and automatic bill tracking.", longDesc: "Pay electricity bills for all state boards and private distributors instantly. Enter your consumer ID and get your bill amount automatically, pay through preferred method, and get instant receipt via SMS/email. Set up automatic bill payments, view payment history, and download digital bill receipts for your records." },
      { icon: Receipt, title: "Other Utility Bills", desc: "Pay gas, water, broadband, and other utility bills. One platform for all your bill payment needs.", greeting: "Thanks for choosing Bill Consolidation! All utilities on one platform with automatic reminders and digital receipts.", longDesc: "Consolidate all utility bill payments on one platform. Pay gas, water, broadband, landline, and municipal taxes easily. Support for most major service providers across India, instant payment confirmation, and digital receipts for all transactions. Organize bills by due date and get payment reminders to avoid late fees." },
      { icon: Home, title: "Rent Payment", desc: "Pay rent to landlords easily and on time. Digital receipts and automatic payment reminders.", greeting: "Thanks for choosing Rent Payment! Pay securely with digital receipts and set up automatic monthly payments.", longDesc: "Pay rent digitally to your landlord with complete transparency and instant digital receipts. Set up automatic monthly rent payments so you never miss a due date. Manage multiple properties if you're a landlord and receive payments directly to your bank account. Both tenants and landlords get SMS/email notifications for every transaction, and detailed payment history for record-keeping and tax purposes." },
      { icon: GraduationCap, title: "Education Fee Payment", desc: "Pay school, college, and course fees conveniently. Support for fees, hostel charges, and examination fees.", greeting: "Thanks for choosing Education Fee Payment! Pay all education expenses securely with instant digital receipts.", longDesc: "Pay all educational expenses including tuition fees, hostel charges, examination fees, and other college/school dues digitally. Works with major educational institutions across India. Students and parents get instant digital fee receipts, payment confirmation via email/SMS, and complete payment history for reference. Set up one-time or recurring payments for semester fees and never worry about missing deadlines." },
    ],
  },
];

import type { LucideIcon } from "lucide-react";

type ModalState = {
  icon: LucideIcon;
  title: string;
  greeting: string;
  longDesc: string;
} | null;

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState<ModalState>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [activeModal]);

  const baseMotion = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: isMobile ? 0.1 : 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.1), transparent)" }}
      />

      <div className="container relative z-10">
        <motion.div
          {...baseMotion}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Our Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Payment <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty text-sm sm:text-base lg:text-lg">
            Complete payment infrastructure for every business need.
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {categories.map((cat, catIdx) => {
            // For all sections with images
            return (
              <div key={cat.title} id={cat.id} className="contain-content">
                <div className={`grid gap-6 sm:gap-8 lg:gap-10 items-center ${cat.image ? "lg:grid-cols-2" : ""}`}>
                  {/* Image on Left */}
                  {cat.image && cat.imagePosition === "left" && (
                    <motion.div
                      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: isMobile ? 0.15 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 border border-white/20 dark:border-white/10 shadow-lg contain-paint"
                    >
                      <img
                        src={cat.image}
                        alt={cat.imageAlt}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 will-change-transform"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  )}

                  {/* Services List */}
                  <div>
                    <motion.div
                      initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: isMobile ? 0.1 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5"
                    >
                      <div className={`p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${cat.gradient} shadow-lg`}>
                        <cat.icon size={16} className="text-white sm:hidden" />
                        <cat.icon size={20} className="text-white hidden sm:block" />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold">{cat.title}</h3>
                    </motion.div>
                    <div className="space-y-2 sm:space-y-3">
                      {cat.services.map((s, i) => (
                        <motion.button
                          key={s.title}
                          className="neon-card p-3 sm:p-4 group text-left w-full flex items-start gap-3 hover:border-primary/60 transition-all duration-200 cursor-pointer"
                          onClick={() => setActiveModal({ icon: s.icon, title: s.title, greeting: s.greeting, longDesc: s.longDesc })}
                          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: isMobile ? 0.1 : 0.6, delay: isMobile ? 0 : i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          type="button"
                        >
                          {/* Icon */}
                          <div className={`rounded-lg bg-gradient-to-br ${cat.gradient} transform group-hover:scale-110 transition-transform duration-200 flex-shrink-0 p-2 will-change-transform`}>
                            <s.icon size={16} className="text-white" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-semibold mb-0.5 line-clamp-1">{s.title}</h4>
                            <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2">{s.desc}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Image on Right */}
                  {cat.image && cat.imagePosition === "right" && (
                    <motion.div
                      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: isMobile ? 0.15 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-96 border border-white/20 dark:border-white/10 shadow-lg contain-paint"
                    >
                      <img
                        src={cat.image}
                        alt={cat.imageAlt}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 will-change-transform"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-xl"
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(8px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.currentTarget === e.target && setActiveModal(null)}
            >
              <div className="max-h-[90vh] overflow-y-auto w-full max-w-3xl p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl 
                              bg-gradient-to-br from-[#E5E7EB] to-[#F3F4F6] 
                              dark:from-neutral-900/98 dark:to-neutral-800/95
                              backdrop-blur-xl border border-[#D1D5DB] dark:border-white/20 
                              shadow-[0_25px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                              relative"
              >
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  type="button"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {activeModal.greeting && (
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-600">
                    {activeModal.greeting}
                  </h2>
                )}

                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-accent mb-6">
                  <activeModal.icon size={32} className="text-white" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{activeModal.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10">{activeModal.longDesc}</p>
                <a href="#contact" onClick={() => setActiveModal(null)} className="btn-cta text-base inline-block px-8 py-3">
                  Get Service →
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
