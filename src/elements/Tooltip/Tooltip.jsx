import React from "react";
import "./Tooltip.css";

export default function Tooltip({ text, children }) {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
