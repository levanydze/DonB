"use client";
import React, { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container2">
      <h4 className="textMedium textCenter">VAD VÅRA KUNDER SÄGER</h4>
      <section>
        <div
          className="elfsight-app-07cf9a40-aaef-4514-bcb7-a371f9c7292f"
          data-elfsight-app-lazy
        ></div>
        <div className="widgetHider"></div>
      </section>
    </div>
  );
}
