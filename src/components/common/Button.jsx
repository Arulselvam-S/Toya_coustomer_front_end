
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import "../../styles/components/button.css";
export default function Button({
  children,
  variant = "primary",
  size = "medium",
  icon: Icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  onClick,
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      className={`
        toya-button
        toya-button-${variant}
        toya-button-${size}
        ${fullWidth ? "toya-button-full" : ""}
        ${className}
      `}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { y: -2 } : undefined}
      whileTap={!isDisabled ? { scale: 0.97 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {loading ? (
        <LoaderCircle className="button-loader" size={19} />
      ) : (
        <>
          {Icon && <Icon size={19} />}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
}
