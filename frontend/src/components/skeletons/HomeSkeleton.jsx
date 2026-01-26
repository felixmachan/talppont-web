import React from "react";
import "./skeleton.css";

export default function HomeSkeleton() {
  return (
    <div className="home-page">
      {/* HERO */}
      <div className="hero-wrapper">
        <div className="container-fluid hero w-100 px-4 py-3 mb-0 text-center">
          <div
            className="sk sk-circle sk-pulse"
            style={{ width: 72, height: 72, margin: "16px auto" }}
          />
          <div
            className="sk sk-line sk-title sk-pulse"
            style={{ margin: "18px auto 0" }}
          />
          <div
            className="sk sk-line sk-lead sk-pulse"
            style={{ margin: "18px auto 0" }}
          />
          <div
            className="sk sk-line sk-lead sk-pulse"
            style={{ margin: "10px auto 0" }}
          />
          <div
            className="sk sk-btn sk-pulse"
            style={{ margin: "26px auto 8px" }}
          />
        </div>
      </div>

      {/* PANEL 1 (kép + szöveg) */}
      <section className="home-panel home-panel-accent">
        <div className="home-panel-inner">
          <div className="home-content">
            <div className="sk sk-chip sk-pulse" />
            <div
              className="sk sk-line sk-h2 sk-pulse"
              style={{ marginTop: 10 }}
            />
            <div
              className="sk sk-line sk-p sk-pulse"
              style={{ marginTop: 14 }}
            />
            <div className="sk sk-line sk-p sk-pulse" />
            <div className="sk sk-line sk-p sk-pulse" />
            <div className="sk sk-line sk-p sk-pulse" />
          </div>
          <div className="home-side">
            <div className="home-image-card">
              <div className="sk sk-img sk-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* PANEL 2 (info card) */}
      <section className="home-panel home-panel-light home-panel-no-top">
        <div className="home-panel-inner">
          <div className="home-content">
            <div className="sk sk-chip sk-pulse" />
            <div
              className="sk sk-line sk-h2 sk-pulse"
              style={{ marginTop: 10 }}
            />
            <div
              className="sk sk-line sk-p sk-pulse"
              style={{ marginTop: 14 }}
            />
            <div className="sk sk-line sk-p sk-pulse" />
            <div className="sk sk-line sk-p sk-pulse" />

            <div
              className="home-info-card home-inline-card"
              style={{ marginTop: 18 }}
            >
              <div
                className="sk sk-line sk-h3 sk-pulse"
                style={{ marginBottom: 14 }}
              />
              <div className="sk sk-row sk-pulse" />
              <div className="sk sk-row sk-pulse" />
              <div className="sk sk-row sk-pulse" />
            </div>
          </div>

          <div className="home-side">
            <div className="home-image-card">
              <div className="sk sk-img sk-pulse" />
              <div
                className="sk sk-line sk-caption sk-pulse"
                style={{ marginTop: 12 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARD GRID */}
      <section className="home-panel home-panel-accent">
        <div className="home-panel-inner home-panel-stack">
          <div className="home-content">
            <div className="sk sk-chip sk-pulse" />
            <div
              className="sk sk-line sk-h2 sk-pulse"
              style={{ marginTop: 10 }}
            />
            <div
              className="sk sk-line sk-p sk-pulse"
              style={{ marginTop: 14 }}
            />
            <div className="sk sk-line sk-p sk-pulse" />
          </div>

          <div className="home-card-grid">
            {[0, 1, 2].map((i) => (
              <article className="home-card" key={i}>
                <div className="sk sk-cardimg sk-pulse" />
                <div
                  className="sk sk-line sk-h3 sk-pulse"
                  style={{ marginTop: 14 }}
                />
                <div
                  className="sk sk-line sk-p sk-pulse"
                  style={{ marginTop: 12 }}
                />
                <div className="sk sk-line sk-p sk-pulse" />
                <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                  <div className="sk sk-tag sk-pulse" />
                  <div className="sk sk-tag sk-pulse" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-panel home-panel-light home-panel-no-bottom">
        <div className="home-panel-inner home-cta">
          <div style={{ width: "100%" }}>
            <div className="sk sk-chip sk-pulse" />
            <div
              className="sk sk-line sk-h2 sk-pulse"
              style={{ marginTop: 10 }}
            />
            <div
              className="sk sk-line sk-p sk-pulse"
              style={{ marginTop: 14 }}
            />
            <div className="sk sk-line sk-p sk-pulse" />
          </div>
          <div
            className="sk sk-btn sk-pulse"
            style={{ width: 220, height: 52, borderRadius: 14 }}
          />
        </div>
      </section>
    </div>
  );
}
