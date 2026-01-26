import React from "react";
import "./skeleton.css";

export default function PageSkeleton() {
  return (
    <div className="page-skeleton">
      <div className="sk sk-line sk-h2 sk-pulse" />
      <div className="sk sk-line sk-p sk-pulse" style={{ marginTop: 16 }} />
      <div className="sk sk-line sk-p sk-pulse" />
      <div className="sk sk-line sk-p sk-pulse" />
      <div className="sk sk-line sk-p sk-pulse" />
      <div className="sk sk-line sk-p sk-pulse" />
    </div>
  );
}
