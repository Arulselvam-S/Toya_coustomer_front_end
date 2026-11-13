import { motion } from "framer-motion";
import "../../styles/components/section-title.css";
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <motion.div
      className={`toya-section-title toya-section-title-${align} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {eyebrow && <span className="toya-section-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}