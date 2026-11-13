
import { Droplet } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/components/logo.css";
export default function Logo({
  size = "medium",
  showText = true,
  className = "",
}) {
  return (
    <motion.div
      className={`toya-logo toya-logo-${size} ${className}`}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
    >
      <Droplet
        className="toya-logo-icon"
        fill="currentColor"
        strokeWidth={1.8}
      />

      {showText && (
        <span className="toya-logo-text">TOYA</span>
      )}
    </motion.div>
  );
}
