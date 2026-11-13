
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, UserRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./common/Button";
import "../styles/layout/navbar.css";
import toyaLogo from "../assets/toya-logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "My Bookings", path: "/orders" },
  { label: "Wallet", path: "/wallet" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="toya-navbar">
      <div className="toya-navbar-inner">

        {/* Full TOYA Logo */}
        <Link
          to="/"
          className="toya-navbar-brand"
          onClick={closeMenu}
          aria-label="TOYA Home"
        >
          <img
            src={toyaLogo}
            alt="TOYA WaterTech Innovation"
            className="toya-navbar-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="toya-navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `toya-nav-link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="toya-navbar-actions">
          <Link
            to="/profile"
            className="toya-profile-link"
            aria-label="My profile"
          >
            <UserRound size={19} />
          </Link>

          <Link to="/location" className="toya-nav-booking">
            <Button size="small">Book Water</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="toya-mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="toya-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `toya-mobile-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/profile"
              onClick={closeMenu}
              className="toya-mobile-nav-link"
            >
              My Profile
            </Link>

            <Link
              to="/location"
              onClick={closeMenu}
              className="toya-mobile-booking"
            >
              Book Water
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
