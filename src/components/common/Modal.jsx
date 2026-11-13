import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import "../../styles/components/modal.css";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  closeOnOverlay = true,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="toya-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => {
            if (closeOnOverlay && event.target === event.currentTarget) {
              onClose?.();
            }
          }}
        >
          <motion.div
            className={`toya-modal toya-modal-${size}`}
            role="dialog"
            aria-modal="true"
            aria-label={title || "Dialog"}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="toya-modal-header">
              <h2>{title}</h2>

              <button
                type="button"
                className="toya-modal-close"
                onClick={onClose}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="toya-modal-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}