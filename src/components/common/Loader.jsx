import { LoaderCircle } from "lucide-react";
import "../../styles/components/loader.css";
export default function Loader({
  size = "medium",
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <div className={`toya-loader-wrapper ${fullScreen ? "toya-loader-fullscreen" : ""}`}>
      <div className={`toya-loader toya-loader-${size}`}>
        <LoaderCircle className="toya-loader-icon" />
      </div>

      {text && <p className="toya-loader-text">{text}</p>}
    </div>
  );
}