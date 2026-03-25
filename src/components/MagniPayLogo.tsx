import { motion } from "framer-motion";

const MagniPayLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const dims = { sm: 28, md: 36, lg: 52 };
  const s = dims[size];

  return (
    <motion.div
      className="inline-flex items-center gap-2 group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.svg
        width={s}
        height={s}
        viewBox="0 0 48 48"
        fill="none"
        className="shrink-0"
      >
        {/* Magnifier glass circle */}
        <motion.circle
          cx="20"
          cy="20"
          r="14"
          stroke="url(#logoGrad)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Magnifier handle */}
        <motion.line
          x1="30"
          y1="30"
          x2="42"
          y2="42"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Inner payment symbol — ₹ */}
        <motion.text
          x="20"
          y="25"
          textAnchor="middle"
          fill="hsl(217 91% 60%)"
          fontSize="14"
          fontWeight="700"
          fontFamily="League Spartan, sans-serif"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          ₹
        </motion.text>
        {/* Glow ring */}
        <motion.circle
          cx="20"
          cy="20"
          r="17"
          stroke="hsl(187 92% 53% / 0.3)"
          strokeWidth="1"
          fill="none"
          animate={{ r: [17, 19, 17], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="50%" stopColor="hsl(263 70% 58%)" />
            <stop offset="100%" stopColor="hsl(187 92% 53%)" />
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="font-display font-bold tracking-tight text-gradient"
        style={{ fontSize: size === "sm" ? "1.2rem" : size === "lg" ? "2rem" : "1.5rem" }}
      >
        MAGNIPAY
      </span>
    </motion.div>
  );
};

export default MagniPayLogo;
