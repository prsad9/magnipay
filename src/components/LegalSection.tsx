import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, FileText, ScrollText } from "lucide-react";
import MagniPayLogo from "@/components/MagniPayLogo";

const legalLinks = [
  {
    icon: Shield,
    title: "Privacy Policy",
    desc: "Your data is protected",
    to: "/privacy-policy",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: ScrollText,
    title: "Terms of Service",
    desc: "Our terms & conditions",
    to: "/terms-of-service",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: FileText,
    title: "Refund Policy",
    desc: "Easy refund process",
    to: "/refund-policy",
    gradient: "from-green-500 to-emerald-600",
  },
];

const LegalSection = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <div className="flex justify-center mb-6">
            <MagniPayLogo size="sm" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Legal & <span className="text-gradient">Compliance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            We believe in transparency. Here are our legal policies and commitments to protect you.
          </p>
        </motion.div>

        {/* Legal Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {legalLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="group h-full block"
                >
                  <div className="relative h-full p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/40 bg-card/60 dark:bg-card/40 backdrop-blur-sm
                                  flex flex-col items-start gap-4
                                  transition-all duration-300 overflow-hidden
                                  hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.25)]
                                  hover:scale-[1.02] active:scale-[0.98]">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-[0.1] transition-opacity duration-300 rounded-2xl`} />

                    {/* Icon */}
                    <div className={`relative z-10 p-3 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg
                                    group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-grow">
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.desc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="relative z-10 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-14 lg:mt-16"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            MagniPay is committed to protecting your privacy and providing transparent services.
            <br className="hidden sm:block" />
            All transactions are 100% secure with bank-grade encryption.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalSection;
