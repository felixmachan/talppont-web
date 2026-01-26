import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import { TbReceipt } from "react-icons/tb";
import "./Prices.css";

function Prices() {
  const revealRef = useRef(null);

  useEffect(() => {
    const root = revealRef.current;
    if (!root) return;
    const items = root.querySelectorAll(".reveal-item");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("reveal-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "premium",
      title: "Prémium testkezelések – női vendégek részére",
      description: "Illóolajos, aromás rituálék időtartam és ár szerint.",
      items: [
        { name: "Velvet Essence Ritual", meta: "60 perc", price: "9900 Ft" },
        { name: "Velvet Essence Ritual", meta: "75 perc", price: "11.900 Ft" },
        { name: "Velvet Essence Ritual", meta: "90 perc", price: "13.900 Ft" },
        { name: "Amber Serenity Ritual", meta: "100 perc", price: "15.500 Ft" },
        { name: "Serenity Aroma Massage", meta: "60 perc", price: "9900 Ft" },
        { name: "Serenity Aroma Massage", meta: "75 perc", price: "11.900 Ft" },
        { name: "Amber Body Polish", meta: "30 perc", price: "5500 Ft" },
      ],
    },
    {
      id: "sved",
      title: "Svédmasszázs kezelések (FLOW)",
      description: "Hát, nyak, váll és teljes test fókuszú kezelések.",
      items: [
        { name: "FLOW hátmasszázs", meta: "30 perc", price: "4900 Ft" },
        {
          name: "FLOW hát- vagy testmasszázs",
          meta: "60 perc",
          price: "8500 Ft",
        },
        { name: "FLOW testmasszázs", meta: "75 perc", price: "10.500 Ft" },
        {
          name: "FLOW teljes testmasszázs",
          meta: "90 perc",
          price: "12.500 Ft",
        },
      ],
    },
    {
      id: "reflex",
      title: "Reflexzónás kezelések",
      description: "Talp- és arcmasszázs kezelések, kiegészítő relaxációval.",
      items: [
        { name: "Reflexzónás talpmasszázs", meta: "30 perc", price: "4900 Ft" },
        { name: "Reflexzónás talpmasszázs", meta: "50 perc", price: "7500 Ft" },
        {
          name: "Reflexzónás arcmasszázs",
          meta: "40 perc, ultrahangos-ledes, bio szérum, PUREDERM fátyolmaszk, ajándék kézmasszázs",
          price: "5900 Ft",
        },
      ],
    },
    {
      id: "labapolas",
      title: "Lábápolás",
      description: "Esztétikai és gyógypedikűr kezelések, részletes árakkal.",
      items: [
        {
          name: "Száraz, gépi pedikűr",
          meta: "esztétikai",
          price: "8500 Ft-tól",
        },
        {
          name: "Mini pedikűr kezelések",
          meta: "rendszeres vendégeknek",
          price: "3000-6000 Ft",
        },
        {
          name: "CALLUX PRO szikementes pedikűr",
          meta: "vegán termékek, gyümölcssavas hámlasztás",
          price: "9000 Ft-tól",
        },
        {
          name: "Körömszabályozás",
          meta: "gyógypedikűr, 1 ujj",
          price: "5000-7000 Ft",
        },
        {
          name: "Benőtt köröm kezelés",
          meta: "1 ujj",
          price: "4000 Ft",
        },
        { name: "Tyúkszemeltávolítás", price: "4000 Ft-tól" },
        { name: "Tape technika", meta: "1 ujj", price: "1000 Ft" },
        { name: "Lakkozás CND Vinylux körömlakkal", price: "2000 Ft" },
      ],
    },
    {
      id: "bemer",
      title: "BEMER terápia",
      description: "Egyedi igényre szabva, valamint bérleti lehetőségek.",
      items: [
        {
          name: "BEMER kezelés",
          meta: "matrac, applikátor, fényterápia",
          price: "2500-3900 Ft",
        },
        { name: "BEMER bérleti díj", meta: "1 hónap", price: "90.000 Ft" },
        { name: "BEMER bérleti díj", meta: "2 hét", price: "50.000 Ft" },
      ],
    },
  ];

  return (
    <div className="prices-page" ref={revealRef}>
      <Hero
        title="Árak"
        body="Átlátható árlista kategóriák szerint, pontos kezelési árakkal."
        icon={<TbReceipt className="hero-icon" />}
      />

      {sections.map((section, index) => (
        <section
          className={`price-section reveal-item ${index % 2 === 0 ? "price-light" : "price-accent wave-background"}${
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
                <div
                  className="price-card"
                  key={`${section.id}-${item.name}-${item.meta || ""}`}
                >
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

      <section className="price-warning-section reveal-item">
        <div className="price-warning-inner">
          <p className="price-warning-title">Fontos tudnivalók</p>
          <ul>
            <li style={{ marginBottom: "10px" }}>
              <p className="price-warning-body">
                Amennyiben az időpont 24 órán belül kerül lemondásra, a foglalás
                árának 50%-át szükséges befizetni.
              </p>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <p className="price-warning-body">
                Fenntartom a jogot az árak személyre szabott módosítására.
              </p>
            </li>
            <li style={{ marginBottom: "10px" }}>
              <p className="price-warning-body">
                Az árak forintban értendők és tartalmazzák az ÁFA-t.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Prices;
