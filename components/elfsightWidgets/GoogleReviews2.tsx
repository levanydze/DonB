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
      <h4 className="textMedium textCenter">Customer Reviews</h4>
      <section>
        <div
          className="elfsight-app-3c78140d-9a86-4d6c-9c76-3e064928bfb1"
          data-elfsight-app-lazy
        ></div>
        <div className="widgetHider2"></div>
      </section>
    </div>
  );
}
