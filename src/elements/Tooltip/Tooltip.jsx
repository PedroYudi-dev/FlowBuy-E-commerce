import React from "react";
import "./Tooltip.css";
import clsx from "clsx";

// state
import { useLocation } from "react-router-dom";

export default function Tooltip({ text, children }) {

  const location = useLocation();

  const RouterColorTooltip = clsx("tooltip-text", {
    // "tooltip-text": location.pathname === "/",
    "tooltip-text-Buyer": location.pathname.startsWith("/Buyer"),
  });

  return (
    <div className="tooltip-container">
      {children}
      <span className={RouterColorTooltip}>{text}</span>
    </div>
  );
}
