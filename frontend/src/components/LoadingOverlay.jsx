import React from "react";
import "./LoadingOverlay.css";
import logo from "/logo200.webp";

export default function LoadingOverlay({ show }) {
  return (
    <div className={`boot-overlay ${show ? "is-visible" : "is-hidden"}`}>
      <div className="boot-card">
        <div className="orb">
          <div className="ring" />
          <div className="ring ring2" />
          <img src={logo} alt="TalpPont" className="boot-logo" />
        </div>

        <div className="boot-text">
          <div className="boot-title">TalpPont</div>
          <div className="boot-sub">Betöltés…</div>
        </div>
      </div>
    </div>
  );
}
