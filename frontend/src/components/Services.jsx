import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import { TbMassage } from "react-icons/tb";
import ServicePanel from "./ServicePanel";
import "./Services.css";

function Services() {
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

  const services = [
    {
      id: "01",
      title: (
        <>
          <span className="service-title-accent">Prémium</span> testkezelések –
          női vendégek részére
        </>
      ),
      lead: "Aromás, melegolajos rituálék, amelyek finoman támogatják a női regenerációt és a mély relaxációt.",
      bullets: [
        "Velvet Essence Ritual",
        "Amber Serenity Ritual",
        "Serenity Aroma Massage",
        "Amber Body Polish",
      ],
      tags: ["Új", "Aroma", "Rituálé"],
      badgeLabel: "Új",
      badgeClassName: "service-badge-new",
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "30-100 perc" },
          { label: "Intenzitás", value: "Lágy-közepes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik nőies, illóolajos élményre vágynak.",
          "Akik stresszoldó, melegolajos kezelést keresnek.",
          "Akik finom, mégis tartalmas rituálét szeretnének.",
        ],
      },
    },
    {
      id: "02",
      title: "Lábápolás",
      lead: "Esztétikai pedikűr és problémás lábak kezelése, szép és egészséges végeredménnyel.",
      bullets: [
        "Száraz, gépi pedikűr",
        "CALLUX PRO szikementes pedikűr",
        "Gyógypedikűr, körömszabályozás, benőtt köröm",
      ],
      tags: ["Ápolás", "Pedikűr", "Kényelem"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "Egyéni" },
          { label: "Intenzitás", value: "Kíméletes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik rendezett, ápolt lábakat szeretnének.",
          "Akiknek problémás körmök vagy bőrelváltozásuk van.",
          "Akik rendszeres, igényes lábápolásra vágynak.",
        ],
      },
    },
    {
      id: "03",
      title: "Svédmasszázs (FLOW)",
      lead: "Folyamatos, ritmikus masszázs a nyak, váll, hát és lábak feszességének oldására.",
      bullets: [
        "FLOW hátmasszázs 30 perc",
        "FLOW hát- vagy testmasszázs 60 perc",
        "FLOW testmasszázs 75 perc",
        "FLOW teljes testmasszázs 90 perc",
      ],
      tags: ["Flow", "Izomlazítás", "Testmasszázs"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "30-90 perc" },
          { label: "Intenzitás", value: "Közepes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik hát-nyak-váll feszültséget oldanának.",
          "Akik teljes testet átmozgató kezelést keresnek.",
          "Akik szeretik a határozott, mégis nyugtató ritmust.",
        ],
      },
    },
    {
      id: "04",
      title: "Reflexzónás kezelések",
      lead: "Talp- és arcreflexzónás kezelések a testi-lelki egyensúly finomhangolására.",
      bullets: [
        "Reflexzónás talpmasszázs 30 és 50 perc",
        "Reflexzónás arcmasszázs 40 perc",
        "Ultrahangos-ledes, szérumos kiegészítéssel",
      ],
      tags: ["Reflexzónák", "Egyensúly", "Fókuszált"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "30-50 perc" },
          { label: "Intenzitás", value: "Célzott" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik holisztikus, célzott kezelést szeretnének.",
          "Akik frissítő, mégis mély relaxációra vágynak.",
          "Akik szeretnék támogatni a szervezet harmóniáját.",
        ],
      },
    },
    {
      id: "05",
      title: "BE〽️ER terápia",
      lead: "Mikrokeringést támogató kezelés, amely segíti a regenerációt és a sejtszintű ellátást.",
      bullets: [
        "BEMER kezelés matraccal, applikátorral",
        "Fényterápiás kiegészítéssel",
        "Bérleti lehetőség 2 hétre vagy 1 hónapra",
      ],
      tags: ["BEMER", "Regeneráció", "Támogatás"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "Egyéni" },
          { label: "Intenzitás", value: "Kíméletes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik szeretnék támogatni a regenerációt.",
          "Akik kiegészítő terápiát keresnek.",
          "Akik otthoni bérleti lehetőséget is szeretnének.",
        ],
      },
    },
  ];

  return (
    <div className="services-page" ref={revealRef}>
      <Hero
        title="Kezelések"
        body="Fő kategóriák, amelyekből személyre szabott kezelés épül fel."
        icon={<TbMassage className="hero-icon" />}
      />
      {services.map((service, index) => (
        <ServicePanel
          key={service.id}
          id={service.id}
          title={service.title}
          lead={service.lead}
          bullets={service.bullets}
          tags={service.tags}
          panelClassName={`${index % 2 === 0 ? "panel-light" : "panel-accent"}${
            index % 2 !== 0 ? " blue-bg" : ""
          }${index === 1 ? " panel-topographic" : ""}${
            index === 0 ? " panel-no-top-border" : ""
          } reveal-item`}
          eyebrowLabel="Kezelés"
          badgeLabel={service.badgeLabel}
          badgeClassName={service.badgeClassName}
          cardTitle={service.side?.cardTitle}
          infoItems={service.side?.infoItems}
          noteTitle={service.side?.noteTitle}
          noteBullets={service.side?.noteBullets}
          buttonText={service.side?.buttonText}
        />
      ))}
    </div>
  );
}

export default Services;
