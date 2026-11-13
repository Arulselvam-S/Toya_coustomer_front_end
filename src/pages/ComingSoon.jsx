
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../styles/pages/coming-soon.css";

export default function ComingSoon() {
  const location = useLocation();

  const pageName = {
    "/orders": "My Bookings",
    "/wallet": "Wallet",
    "/profile": "Profile",
  }[location.pathname] || "This Feature";

  return (
    <div className="coming-soon-page">
      <motion.div
        className="coming-soon-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="coming-soon-icon">
          <Construction size={42} />
        </div>

        <span className="coming-soon-status">
          WORK IN PROGRESS
        </span>

        <h1>{pageName}</h1>

        <h2>Something Amazing Is Coming!</h2>

        <p>
          We are working hard to bring this feature to TOYA.
          This page will be available soon.
        </p>

        <div className="coming-soon-progress">
          <div />
        </div>

        <span className="coming-soon-caption">
          Stay tuned for updates!
        </span>

        <Link to="/" className="coming-soon-home">
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
