
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Droplet,
  Droplets,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Truck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  Search,
} from "lucide-react";

import heroImage from "../assets/toya-water-tanker.png";

import {
  slideUp,
  slideLeft,
  staggerContainer,
  staggerItem,
  waterDropAnimation,
  floatingAnimation,
} from "../animations/variants";

import "../styles/pages/home.css";
import toyaDropLogo from "../assets/logo.jpeg";
const features = [
  {
    icon: Search,
    title: "Explore Tankers",
    description:
      "Discover tanker options suitable for your water delivery requirement.",
  },
  {
    icon: ShieldCheck,
    title: "Compare Options",
    description:
      "Review available tanker and supplier options before choosing.",
  },
  {
    icon: MapPin,
    title: "Area-Based Search",
    description:
      "Find delivery options based on your selected location.",
  },
];

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "Choose Location",
    description: "Enter where you need the water delivered.",
  },
  {
    icon: Gauge,
    number: "02",
    title: "Choose Tanker",
    description: "Select a tanker based on your required capacity.",
  },
  {
    icon: CalendarDays,
    number: "03",
    title: "Schedule Delivery",
    description: "Choose your preferred delivery date and time.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Confirm Booking",
    description: "Review your details and confirm your request.",
  },
];

const tankerTypes = [
  {
    icon: Truck,
    title: "Find the Right Capacity",
    description:
      "Choose a tanker according to the amount of water you need.",
    tag: "CAPACITY",
  },
  {
    icon: MapPin,
    title: "Find Options Near You",
    description:
      "Explore tanker options for your delivery location.",
    tag: "LOCATION",
  },
  {
    icon: Clock3,
    title: "Choose Your Delivery Time",
    description:
      "Plan your water delivery around your schedule.",
    tag: "SCHEDULING",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="home-page">


      {/* HERO SECTION */}
      <section className="home-hero" id="home">

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid-pattern" />

        <motion.div
          className="hero-water-particle particle-one"
          {...waterDropAnimation}
        >
          <Droplet fill="currentColor" />
        </motion.div>

        <motion.div
          className="hero-water-particle particle-two"
          animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Droplets />
        </motion.div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <motion.div
            className="hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={slideUp}>
              <span className="badge-pulse" />
              SMART WATER TANKER BOOKING
            </motion.div>

            <motion.h1 variants={slideUp}>
              Water Delivery,
              <br />
              <span>Made Effortless.</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              variants={slideUp}
            >
              Find the right water tanker for your needs.
              Explore available options, choose your capacity,
              schedule delivery and book with TOYA.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={slideUp}
            >
              <Link
                to="/location"
                className="btn btn-primary hero-cta"
              >
                Find a Water Tanker
                <ArrowRight size={19} />
              </Link>

              <a
                href="#how-it-works"
                className="hero-secondary-link"
              >
                How it works
                <ChevronRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="hero-trust-row"
              variants={slideUp}
            >
              <div className="trust-icon">
                <ShieldCheck size={19} />
              </div>

              <span>Simple booking</span>
              <span className="trust-divider" />
              <span>Flexible scheduling</span>
            </motion.div>
          </motion.div>

          {/* RIGHT TRUCK IMAGE */}
          <motion.div
            className="hero-image-container"
            variants={slideLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-image-glow" />

            <motion.div
              className="hero-image-orbit orbit-one"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="hero-image-orbit orbit-two"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
  className="hero-floating-drop"
  {...floatingAnimation}
>
  <img
    src={toyaDropLogo}
    alt="TOYA logo"
    className="hero-floating-logo"
  />
</motion.div>

            <motion.img
              src={heroImage}
              alt="TOYA blue and white water tanker truck"
              className="hero-truck-image"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="hero-image-caption"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="caption-icon">
                <Truck size={21} />
              </span>

              <span>
                <strong>Your Tanker. Your Schedule.</strong>
                <small>Book water delivery with TOYA</small>
              </span>

              <CheckCircle2
                className="caption-check"
                size={20}
              />
            </motion.div>

          </motion.div>
        </div>

        {/* BOTTOM WAVE */}
        <div className="hero-wave">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,65 C240,120 480,10 720,55 C960,105 1200,10 1440,60 L1440,120 L0,120 Z"
              fill="#f5faff"
            />
          </svg>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="how-container">

          <Reveal className="how-heading">
            <div>
              <span className="section-eyebrow">
                A SIMPLE JOURNEY
              </span>
              <h2>How TOYA Works</h2>
              <p>
                Four simple steps to arrange your water tanker.
              </p>
            </div>

            <Link to="/location" className="view-more-link">
              Start Booking <ArrowRight size={17} />
            </Link>
          </Reveal>

          <motion.div
            className="steps-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="step-card"
                  variants={staggerItem}
                  key={step.number}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="step-top-row">
                    <span className="step-number">
                      {step.number}
                    </span>

                    <span className="step-icon-wrapper">
                      <Icon size={27} />
                    </span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== steps.length - 1 && (
                    <ChevronRight
                      className="step-arrow"
                      size={22}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* TANKER OPTIONS */}
      <section
        className="tanker-options-section"
        id="tanker-options"
      >
        <div className="tanker-options-container">

          <Reveal className="tanker-options-heading">
            <span className="section-eyebrow">
              BUILT AROUND YOUR NEED
            </span>

            <h2>
              Find a Tanker That Fits Your Requirement
            </h2>

            <p>
              Start with your delivery location and explore
              tanker options that match your requirement.
            </p>
          </Reveal>

          <motion.div
            className="tanker-options-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {tankerTypes.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="tanker-option-card"
                  variants={staggerItem}
                  key={item.title}
                  whileHover={{ y: -9 }}
                >
                  <span className="option-tag">
                    {item.tag}
                  </span>

                  <div className="option-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link to="/location" className="option-link">
                    Explore booking <ArrowRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">
        <div className="features-container">

          <Reveal className="features-heading">
            <span className="section-eyebrow">
              WHY CHOOSE TOYA?
            </span>

            <h2>A Smarter Way to Book Water Tankers</h2>

            <p>
              A convenient booking experience designed around
              your water delivery needs.
            </p>
          </Reveal>

          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="feature-card"
                  variants={staggerItem}
                  key={feature.title}
                  whileHover={{ y: -9, scale: 1.015 }}
                >
                  <div className="feature-card-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <span className="feature-card-decoration" />
                </motion.article>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final-cta">

        <motion.div
          className="final-cta-decoration"
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <Reveal className="final-cta-content">
          <span className="section-eyebrow">
            YOUR WATER DELIVERY STARTS HERE
          </span>

          <h2>Ready to Find Your Water Tanker?</h2>

          <p>
            Enter your location and start your TOYA booking journey.
          </p>

          <Link
            to="/location"
            className="btn btn-primary final-cta-button"
          >
            Book Your Tanker <ArrowRight size={19} />
          </Link>
        </Reveal>

      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">

          <Link to="/" className="toya-logo footer-logo">
            <Droplet size={29} fill="currentColor" />
            TOYA
          </Link>

          <p>Water delivery, made effortless.</p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#tanker-options">Tanker Options</a>
            <Link to="/login">Sign In</Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} TOYA. All rights reserved.
          </span>
          <span>Making water delivery simpler.</span>
        </div>
      </footer>

    </main>
  );
}
