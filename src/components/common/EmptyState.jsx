
import { motion } from "framer-motion";
import { Inbox, ArrowRight } from "lucide-react";
import Button from "./Button";
import "../../styles/components/empty-state.css";

export default function EmptyState({
  icon: Icon = Inbox,
  title = "Nothing here yet",
  description = "There is no information to display right now.",
  actionLabel,
  onAction,
  className = "",
}) {
  return (
    <motion.div
      className={`toya-empty-state ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="toya-empty-icon">
        <Icon size={38} strokeWidth={1.6} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          icon={ArrowRight}
          size="medium"
        >
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
