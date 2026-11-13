
import { motion } from "framer-motion";
import {
  Droplet,
  Truck,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Button from "./common/Button";
import "../styles/components/tanker-card.css";

export default function TankerCard({
  tanker,
  onSelect,
  selected = false,
}) {
  const {
    name = "Water Tanker",
    capacity = "5000 Litres",
    price = 1500,
    supplier = "Verified Supplier",
    distance = "Nearby",
    waterType = "Fresh Water",
    image,
    available = true,
  } = tanker || {};

  return (
    <motion.article
      className={`toya-tanker-card ${selected ? "selected" : ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="toya-tanker-image">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="toya-tanker-image-placeholder">
            <Truck size={54} />
            <span>TOYA WATER DELIVERY</span>
          </div>
        )}

        {available ? (
          <span className="toya-tanker-status available">
            Available
          </span>
        ) : (
          <span className="toya-tanker-status unavailable">
            Unavailable
          </span>
        )}
      </div>

      <div className="toya-tanker-content">
        <div className="toya-tanker-heading">
          <div>
            <h3>{name}</h3>
            <p>{supplier}</p>
          </div>

          {selected && (
            <CheckCircle2 className="toya-tanker-selected-icon" />
          )}
        </div>

        <div className="toya-tanker-details">
          <div>
            <Droplet size={17} />
            <span>{capacity}</span>
          </div>

          <div>
            <MapPin size={17} />
            <span>{distance}</span>
          </div>
        </div>

        <div className="toya-tanker-water-type">
          {waterType}
        </div>

        <div className="toya-tanker-bottom">
          <div className="toya-tanker-price">
            <span>Starting from</span>
            <strong>₹{Number(price).toLocaleString("en-IN")}</strong>
          </div>

          <Button
            size="small"
            variant={selected ? "secondary" : "primary"}
            disabled={!available}
            icon={ArrowRight}
            onClick={() => onSelect?.(tanker)}
          >
            {selected ? "Selected" : "Select"}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
