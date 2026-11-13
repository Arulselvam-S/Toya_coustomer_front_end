import { useState } from "react";
import TankerCard from "../components/TankerCard";

const tankers = [
  {
    id: 1,
    name: "Mini Water Tanker",
    capacity: "2000 Litres",
    price: 800,
    supplier: "ABC Water Suppliers",
    distance: "2.5 km",
    waterType: "Fresh Water",
    available: true,
  },
  {
    id: 2,
    name: "Standard Water Tanker",
    capacity: "5000 Litres",
    price: 1500,
    supplier: "XYZ Water Services",
    distance: "4 km",
    waterType: "Fresh Water",
    available: true,
  },
];

export default function TankerSelection() {
  const [selectedTanker, setSelectedTanker] = useState(null);

  return (
    <div className="toya-tanker-grid">
      {tankers.map((tanker) => (
        <TankerCard
          key={tanker.id}
          tanker={tanker}
          selected={selectedTanker?.id === tanker.id}
          onSelect={setSelectedTanker}
        />
      ))}
    </div>
  );
}