import React from "react";
import Hero from "./Hero";
import { TbReceipt } from "react-icons/tb";
import "./Prices.css";

function Prices() {
  const sections = [
    {
      id: "kezelesek",
      title: "Kezelések",
      description: "A legnépszerűbb kezelések árai és időtartamai.",
      items: [
        { name: "Talpmasszázs", meta: "45 perc", price: "6990 Ft" },
        { name: "Reflexológia", meta: "30 perc", price: "4990 Ft" },
        { name: "Flow masszázs", meta: "65 perc", price: "7990 Ft" },
      ],
    },
    {
      id: "labapolas",
      title: "Lábápolás",
      description: "Ápoló kezelések a rendezett, könnyed lábérzetért.",
      items: [
        { name: "Pedikűr", meta: "70 perc", price: "8000 Ft" },
        {
          name: "Benőtt köröm kezelése",
          meta: "30-45 perc",
          price: "6500 Ft",
        },
      ],
    },
    {
      id: "kiegeszitok",
      title: "Kiegészítő tételek",
      description: "Kényelmi és kiegészítő szolgáltatások, igény szerint.",
      items: [
        { name: "Állapotfelmérés", meta: "15 perc", price: "1500 Ft" },
        { name: "Konzultáció", meta: "20 perc", price: "2500 Ft" },
        { name: "Kiszállás (városon belül)", price: "2000 Ft" },
        { name: "Kiszállás (városon kívül)", price: "Egyedi" },
        { name: "Ajándékutalvány", price: "Tetszőleges összeg" },
        { name: "Bérletkedvezmény (5 alkalom)", price: "10% kedvezmény" },
      ],
    },
  ];

  return (
    <div className="prices-page">
      <Hero
        title="Árak"
        body="Átlátható árlista a kezelésekről és kiegészítő tételekről."
        icon={<TbReceipt className="hero-icon" />}
      />

      {sections.map((section, index) => (
        <section
          className={`price-section ${index % 2 === 0 ? "price-light" : "price-accent wave-background"}${
            index === 0 ? " price-no-top-border" : ""
          }`}
          key={section.id}
        >
          <div className="price-section-inner">
            <div className="price-section-header">
              <h2 className="price-section-title">{section.title}</h2>
              <p className="price-section-description">{section.description}</p>
            </div>
            <div className="price-grid">
              {section.items.map((item) => (
                <div className="price-card" key={`${section.id}-${item.name}`}>
                  <div className="price-card-main">
                    <span className="price-item-title">{item.name}</span>
                    {item.meta && (
                      <span className="price-item-meta">{item.meta}</span>
                    )}
                  </div>
                  <span className="price-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="price-warning-section">
        <div className="price-warning-inner">
          <p className="price-warning-title">Fontos tudnivaló</p>
          <p className="price-warning-body">
            Amennyiben az időpont 24 órán belül kerül lemondásra, a foglalás
            árának 50%-át szükséges befizetni.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Prices;
