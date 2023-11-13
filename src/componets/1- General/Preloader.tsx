import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`preloader ${loading ? "" : "hide"}`}>
      <CircleLoader
        color="#fff"
        loading={loading}
        size={80}
        speedMultiplier={1}
      />
      <div className="preloader-text">
        <div className="circle-1">Viaja,</div>
        <div className="circle-2">Disfruta,</div>
        <div className="circle-3">Vive</div>
      </div>
    </div>
  );
}
