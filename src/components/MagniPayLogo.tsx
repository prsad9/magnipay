import { motion } from "framer-motion";

const MagniPayLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-9 w-auto",
    md: "h-11 w-auto",
    lg: "h-14 w-auto",
  };

  return (
    <motion.div
      className="inline-flex items-center cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.img
        src="/logopay.svg"
        alt="MagniPay"
        className={`${sizeClasses[size]} shrink-0`}
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        draggable={false}
      />
    </motion.div>
  );
};

export default MagniPayLogo;
