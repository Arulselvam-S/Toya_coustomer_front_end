
import { Link } from "react-router-dom";
import { Droplet, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./common/Logo";
import "../styles/layout/footer.css";
export default function Footer() {
  return (
    <footer className="toya-footer">
      <div className="toya-footer-inner">
        <div className="toya-footer-brand">
          <Link to="/" className="toya-footer-logo">
            <Logo size="medium" />
          </Link>

          <p>
            Making water delivery simple, reliable, and convenient.
            Book your water tanker whenever you need it.
          </p>
        </div>

        <div className="toya-footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/location">Book Water</Link>
          <Link to="/orders">My Bookings</Link>
          <Link to="/wallet">Wallet</Link>
        </div>

        <div className="toya-footer-column">
          <h3>Account</h3>
          <Link to="/login">Login</Link>
          <Link to="/profile">My Profile</Link>
        </div>

        <div className="toya-footer-column toya-footer-contact">
          <h3>Contact</h3>
          <p><Mail size={16} /> support@toya.example</p>
          <p><Phone size={16} /> Contact support</p>
          <p><MapPin size={16} /> Service locations</p>
        </div>
      </div>

      <div className="toya-footer-bottom">
        <span>© {new Date().getFullYear()} TOYA. All rights reserved.</span>
        <span>Water delivery made simple.</span>
      </div>
    </footer>
  );
}
