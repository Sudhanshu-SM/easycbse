"use client";

import "./Loader.css";

const Loader = ({ color = "#2d5a8a", size = 20, className = "" }) => {
  return (
    <div
      className={`pdf-loader ${className}`}
      style={{ "--color": color, "--size": `${size}px` }}
      role="status"
      aria-label="Loading"
    >
      {[...Array(4)].map((_, index) => (
        <div className="pdf-loader__circle" key={index}>
          <div className="pdf-loader__dot" />
          <div className="pdf-loader__outline" />
        </div>
      ))}
    </div>
  );
};

export default Loader;
