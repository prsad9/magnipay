import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode, ArrowRightLeft, Banknote,
  Smartphone, RefreshCcw, X, Search, Layers,
  Landmark, Shield, Car, Bike, Truck, Bus, TrainFront, Plane,
  Phone, Tv, Zap, Receipt, Fingerprint, Wallet, Building2,
  PackageCheck, ShoppingCart, Send, CreditCard, Globe, IndianRupee,
  HandCoins, CircleDollarSign, BadgePercent, Heart, LifeBuoy, Hotel,
} from "lucide-react";

const categories = [
  {
    id: "cat-collections",
    title: "Collections",
    icon: Layers,
    gradient: "from-primary to-accent",
    services: [
      { icon: Smartphone, title: "UPI Collection API", desc: "Accept UPI payments instantly with our robust API. Seamless integration for web and mobile." },
      { icon: QrCode, title: "Static QR", desc: "Generate permanent QR codes for your business. Customers scan and pay in seconds." },
      { icon: Search, title: "QR Standee", desc: "Physical QR standees for retail and offline merchants. Track every transaction in real time." },
    ],
  },
  {
    id: "cat-aadhaar",
    title: "Aadhaar Enabled Payments",
    icon: Fingerprint,
    gradient: "from-primary to-secondary",
    services: [
      { icon: Fingerprint, title: "Aadhaar ATM", desc: "Enable cash withdrawals using Aadhaar authentication. Bring banking to every doorstep in rural & urban India." },
      { icon: Wallet, title: "Micro ATM Services", desc: "Turn any business point into a micro ATM. Let customers withdraw cash with biometric verification." },
      { icon: IndianRupee, title: "Balance Enquiry", desc: "Instant Aadhaar-linked bank balance checks. Empower customers with quick access to their account info." },
    ],
  },
  {
    id: "cat-banking",
    title: "Banking",
    icon: Landmark,
    gradient: "from-accent to-secondary",
    services: [
      { icon: Banknote, title: "Payout API", desc: "Send payouts to any bank account in India. Instant IMPS, NEFT, and RTGS transfers." },
      { icon: ArrowRightLeft, title: "IMPS / NEFT / RTGS", desc: "Multiple transfer modes for all payout needs. Choose speed vs cost based on your use case." },
      { icon: RefreshCcw, title: "Auto Reconciliation", desc: "Automated reconciliation for all transactions. Save hours of manual work daily." },
    ],
  },
  {
    id: "cat-payment-services",
    title: "Payment Services",
    icon: CreditCard,
    gradient: "from-secondary to-primary",
    services: [
      { icon: QrCode, title: "Bharat QR", desc: "Accept payments via Bharat QR — interoperable across all banks. One QR for Visa, Mastercard, RuPay & UPI." },
      { icon: CreditCard, title: "POS & mPOS", desc: "Digital and mobile point-of-sale solutions for merchants. Accept cards, UPI, and wallets anywhere." },
      { icon: Globe, title: "Payment Gateway", desc: "Unified online payment gateway supporting cards, net banking, UPI, and wallets with instant settlement." },
    ],
  },
  {
    id: "cat-cash-management",
    title: "Cash Management",
    icon: Building2,
    gradient: "from-primary to-accent",
    services: [
      { icon: HandCoins, title: "EMI Collections", desc: "End-to-end EMI and cash collections for NBFCs and lenders. Digital receipts with real-time tracking." },
      { icon: PackageCheck, title: "E-commerce Cash Drops", desc: "Cash-on-delivery collection for e-commerce and logistics partners. Automated settlement and reporting." },
      { icon: CircleDollarSign, title: "Cash Management", desc: "Comprehensive cash management services for businesses. Reduce cash handling risk with digital reconciliation." },
    ],
  },
  {
    id: "cat-remittance",
    title: "Money Remittance",
    icon: Send,
    gradient: "from-accent to-secondary",
    services: [
      { icon: Send, title: "Indo-Nepal Remittance", desc: "Fast and secure cross-border money transfers to Nepal. Competitive exchange rates with instant delivery." },
      { icon: Globe, title: "Domestic Remittance", desc: "Send money to any bank account across India instantly. Low fees with real-time transfer confirmation." },
      { icon: Wallet, title: "Wallet Transfers", desc: "Transfer funds between wallets and bank accounts seamlessly. Instant top-ups and withdrawals 24×7." },
    ],
  },
  {
    id: "cat-insurance",
    title: "Insurance",
    icon: Shield,
    gradient: "from-accent to-secondary",
    services: [
      { icon: Heart, title: "Health Insurance", desc: "Comprehensive health coverage for you and your family. Cashless treatment at network hospitals nationwide." },
      { icon: LifeBuoy, title: "Term Life Insurance", desc: "Affordable term life plans to protect your family's future. Get coverage up to 1 crore with easy online application." },
      { icon: Car, title: "Car Insurance", desc: "Comprehensive car insurance coverage with instant claims. Protect your vehicle against all risks." },
      { icon: Bike, title: "Bike Insurance", desc: "Affordable two-wheeler insurance with quick settlement. Complete protection for your motorcycle." },
      { icon: Truck, title: "Other Vehicles", desc: "Insurance solutions for commercial and specialty vehicles. Customize coverage as per your needs." },
    ],
  },
  {
    id: "cat-travel",
    title: "Travel",
    icon: Plane,
    gradient: "from-primary to-secondary",
    services: [
      { icon: Bus, title: "Bus Ticket Booking", desc: "Book intercity and local bus tickets instantly. Secure payments with easy cancellation options." },
      { icon: TrainFront, title: "Train Ticket Booking", desc: "Reserve train tickets across all major routes. Real-time availability and instant confirmation." },
      { icon: Plane, title: "Flight Ticket Booking", desc: "Book domestic and international flights seamlessly. Best deals with flexible payment options." },
      { icon: Hotel, title: "Hotel Booking", desc: "Find and book hotels worldwide. Compare prices, read reviews, and get exclusive deals on accommodations." },
    ],
  },
  {
    id: "cat-bills",
    title: "Bill Payments & Recharges",
    icon: Receipt,
    gradient: "from-secondary to-accent",
    services: [
      { icon: Phone, title: "Mobile Recharge", desc: "Instant prepaid and postpaid mobile recharges. Support for all major telecom operators." },
      { icon: Tv, title: "DTH Recharge", desc: "Recharge your DTH connection in seconds. All major DTH providers supported with instant activation." },
      { icon: Zap, title: "Electricity Bill", desc: "Pay electricity bills quickly and securely. Covers all state electricity boards and providers." },
      { icon: Receipt, title: "Other Utility Bills", desc: "Pay gas, water, broadband, and other utility bills. One platform for all your bill payment needs." },
    ],
  },
];

const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState<{ title: string; desc: string } | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.1), transparent)" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Our Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Comprehensive Payment <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base sm:text-lg lg:text-xl">
            From collections to payouts, we provide the complete financial infrastructure your business needs to grow.
          </p>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {categories.map((cat, catIdx) => (
            <div key={cat.title} id={cat.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div className={`p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg`}>
                  <cat.icon size={18} className="text-white sm:hidden" />
                  <cat.icon size={22} className="text-white hidden sm:block" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">{cat.title}</h3>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {cat.services.map((s, i) => (
                  <motion.button
                    key={s.title}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveModal(s)}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative p-4 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/60 to-white/40 dark:from-black/70 dark:to-neutral-900/60 backdrop-blur-xl 
                               border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                               group cursor-pointer active:scale-[0.97] transition-all duration-300
                               hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] text-left overflow-hidden
                               flex flex-col h-full"
                  >
                    <div className={`inline-flex p-3.5 rounded-xl mb-4 transition-all duration-300
                      bg-gradient-to-br ${cat.gradient} shadow-lg
                      group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] group-hover:scale-110`}>
                      <s.icon size={22} className="text-white" />
                    </div>
                    <h4 className="font-display font-semibold text-base sm:text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 flex-grow">{s.desc}</p>
                    
                    {/* Hover indicator line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 rounded-t-full group-hover:w-full transition-all duration-300" style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)" }} />
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
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
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-xl"
              onClick={() => setActiveModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, scale: 0.9, y: 30, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[92%] max-w-md p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 
                         dark:from-neutral-900/95 dark:to-neutral-800/90
                         backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted background-transition transition-colors"
              >
                <X size={18} />
              </button>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">{activeModal.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{activeModal.desc}</p>
              <a href="#contact" onClick={() => setActiveModal(null)} className="btn-cta text-sm inline-block">
                Get Started →
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;
