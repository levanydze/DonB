"use client";
import React, { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore = "";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container1">
      <section>
        <div>
          <div
            className="elfsight-app-a25fd412-ebf0-424b-a0d5-2162bace3fe4"
            data-elfsight-app-lazy
          ></div>
        </div>
        <div className="widgetHider3"></div>
      </section>
    </div>
  );
}
