
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  MapPin,
  MapPinned,
  LocateFixed,
  Search,
  CheckCircle2,
  Navigation,
  Droplets,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import {
  slideUp,
  staggerContainer,
  staggerItem,
} from "../animations/variants";

import "../styles/pages/location.css";

export default function Location() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  // Get current GPS location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");
    setSaved(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setCoordinates(location);
        setAddress("Current GPS location selected");
        setLoading(false);
      },
      (err) => {
        setLoading(false);

        const messages = {
          1: "Please allow location access in your browser.",
          2: "Your current location could not be detected.",
          3: "Location request timed out. Please try again.",
        };

        setError(
          messages[err.code] || "Unable to get your location."
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Save selected location
  const handleSave = () => {
    if (!address.trim()) {
      setError("Please select or enter your delivery location.");
      return;
    }

    const locationData = {
      address: address.trim(),
      landmark: landmark.trim(),
      coordinates,
      savedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem(
        "toya_booking_location",
        JSON.stringify(locationData)
      );

      setError("");
      setSaved(true);
    } catch {
      setError("Unable to save your location. Please try again.");
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setCoordinates(null);
    setSaved(false);
    setError("");
  };

  const handleLandmarkChange = (event) => {
    setLandmark(event.target.value);
    setSaved(false);
  };

  return (
    <main className="location-page">

      {/* BACKGROUND DECORATIONS */}
      <div className="location-bg-circle location-bg-one" />
      <div className="location-bg-circle location-bg-two" />

      {/* MAIN CONTENT */}
      <div className="location-container">

        {/* PAGE HEADING */}
        <motion.div
          className="location-heading"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <span className="location-eyebrow">
            <Droplets size={15} />
            TOYA WATER DELIVERY
          </span>

          <h1>
            Where should we
            <span> deliver your water?</span>
          </h1>

          <p>
            Select your delivery location to continue your
            water tanker booking.
          </p>
        </motion.div>

        {/* BOOKING PROGRESS */}
        <motion.div
          className="location-progress"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <div className="progress-step active">
            <span className="progress-number">1</span>
            <span>Location</span>
          </div>

          <span className="progress-line" />

          <div className="progress-step">
            <span className="progress-number">2</span>
            <span>Tanker</span>
          </div>

          <span className="progress-line" />

          <div className="progress-step">
            <span className="progress-number">3</span>
            <span>Schedule</span>
          </div>

          <span className="progress-line" />

          <div className="progress-step">
            <span className="progress-number">4</span>
            <span>Confirm</span>
          </div>
        </motion.div>

        {/* LOCATION FORM */}
        <motion.section
          className="location-card"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          {/* CARD HEADING */}
          <motion.div
            className="location-card-heading"
            variants={staggerItem}
          >
            <div className="location-heading-icon">
              <MapPin size={25} />
            </div>

            <div>
              <h2>Select Delivery Location</h2>
              <p>
                Search your address or use your current location.
              </p>
            </div>
          </motion.div>

          {/* SEARCH INPUT */}
          <motion.div
            className="location-search-wrapper"
            variants={staggerItem}
          >
            <label htmlFor="delivery-address">
              Delivery address
            </label>

            <div className="location-search-box">
              <Search size={21} />

              <input
                id="delivery-address"
                type="text"
                placeholder="Enter area, street, city or landmark"
                value={address}
                onChange={handleAddressChange}
                autoComplete="street-address"
              />

              {address && (
                <button
                  type="button"
                  className="location-clear-button"
                  onClick={() => {
                    setAddress("");
                    setCoordinates(null);
                    setSaved(false);
                    setError("");
                  }}
                  aria-label="Clear address"
                >
                  ×
                </button>
              )}
            </div>
          </motion.div>

          {/* MAP PREVIEW */}
          <motion.div
            className="location-map"
            variants={staggerItem}
          >
            <div className="map-grid" />

            <div className="map-water map-water-one" />
            <div className="map-water map-water-two" />

            <div className="map-park map-park-one" />
            <div className="map-park map-park-two" />

            <div className="map-road map-road-one" />
            <div className="map-road map-road-two" />
            <div className="map-road map-road-three" />
            <div className="map-road map-road-four" />
            <div className="map-road map-road-five" />

            <div className="map-road-label road-label-one">
              MAIN ROAD
            </div>

            <div className="map-road-label road-label-two">
              STREET
            </div>

            <div className="map-location-marker">
              <span className="map-marker-pulse" />
              <span className="map-marker-icon">
                <MapPin size={25} fill="currentColor" />
              </span>

              <span className="map-marker-label">
                {coordinates
                  ? "GPS location selected"
                  : "Your delivery location"}
              </span>
            </div>

            <div className="map-location-info">
              <Navigation size={15} />
              <span>
                {coordinates
                  ? "GPS coordinates detected"
                  : "Select your delivery point"}
              </span>
            </div>

            <button
              type="button"
              className="map-locate-button"
              onClick={getCurrentLocation}
              disabled={loading}
              aria-label="Detect current location"
            >
              <LocateFixed size={21} />
            </button>
          </motion.div>

          {/* GPS BUTTON */}
          <motion.div
            className="location-gps-section"
            variants={staggerItem}
          >
            <div className="location-or-divider">
              <span />
              <p>OR</p>
              <span />
            </div>

            <button
              type="button"
              className="location-gps-button"
              onClick={getCurrentLocation}
              disabled={loading}
            >
              <LocateFixed size={21} />

              {loading
                ? "Detecting your location..."
                : "Use Current Location"}

              {!loading && <ArrowRight size={18} />}
            </button>

            {coordinates && (
              <div className="gps-information">
                <CheckCircle2 size={17} />

                <span>
                  GPS detected: {coordinates.latitude.toFixed(5)},
                  {" "}{coordinates.longitude.toFixed(5)}
                </span>
              </div>
            )}
          </motion.div>

          {/* LANDMARK */}
          <motion.div
            className="location-landmark"
            variants={staggerItem}
          >
            <div className="landmark-icon">
              <MapPinned size={22} />
            </div>

            <div className="landmark-content">
              <label htmlFor="delivery-landmark">
                Nearby Landmark
                <span> (Optional)</span>
              </label>

              <input
                id="delivery-landmark"
                type="text"
                placeholder="Example: Bus stand, school, temple..."
                value={landmark}
                onChange={handleLandmarkChange}
              />
            </div>
          </motion.div>

          {/* ERROR MESSAGE */}
          {error && (
            <motion.div
              className="location-error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span>!</span>
              {error}
            </motion.div>
          )}

          {/* SAVE BUTTON */}
          <motion.button
            type="button"
            className={`location-save-button ${
              saved ? "location-save-success" : ""
            }`}
            onClick={handleSave}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            {saved ? (
              <>
                Location Saved
                <CheckCircle2 size={20} />
              </>
            ) : (
              <>
                Save Location & Continue
                <ArrowRight size={20} />
              </>
            )}
          </motion.button>

          {/* SUCCESS MESSAGE */}
          {saved && (
            <motion.div
              className="location-success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle2 size={19} />
              <span>
                Your delivery location has been saved successfully.
              </span>
            </motion.div>
          )}

        </motion.section>

        {/* BOTTOM TRUST INFORMATION */}
        <motion.div
          className="location-trust"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem}>
            <ShieldCheck size={19} />
            <span>Location details stay in your booking session</span>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Clock3 size={19} />
            <span>Plan your delivery at your convenience</span>
          </motion.div>
        </motion.div>

        {/* BACK HOME */}
        <button
          type="button"
          className="location-back-home"
          onClick={() => navigate("/")}
        >
          <ArrowRight size={15} />
          Back to Home
        </button>

      </div>
    </main>
  );
}
