import React from "react";
import Hero from "./Hero";
import { TbMassage } from "react-icons/tb";
import ServicePanel from "./ServicePanel";
import "./Services.css";

function Services() {
  const services = [
    {
      id: "01",
      title: "Talpmasszázs",
      lead: "A talp reflexzónáin keresztül finoman oldjuk a feszültséget és támogatjuk a teljes testi egyensúlyt.",
      bullets: [
        "Reflexzónák célzott stimulálása",
        "Stressz és fáradtság oldása",
        "Keringés támogatása, mélyebb relaxáció",
      ],
      tags: ["Előkészítés", "Reflexzónák", "Regenerálás"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "45 perc" },
          { label: "Intenzitás", value: "Közepes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik sokat állnak vagy ülnek, fáradt, feszes lábakkal.",
          "Stresszes, alvásban megterhelt időszakban lévőknek.",
          "Akik gyengéd, mégis hatásos frissülésre vágynak.",
        ],
      },
    },
    {
      id: "02",
      title: "Reflexológia",
      lead: "Holisztikus kezelés, ahol a láb, a kéz és a fül reflexzónái segítenek a szervezet harmóniájában.",
      bullets: [
        "Egyéni állapotfelmérés",
        "Célpontos területek kezelése",
        "Lelkileg is kiegyensúlyozottabb állapot",
      ],
      tags: ["Egyensúly", "Terápiás", "Fókuszált"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "30 perc" },
          { label: "Intenzitás", value: "Erőteljes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik holisztikus megközelítést keresnek.",
          "Akik rendszeres kiegyensúlyozásra vágynak.",
          "Akik finom, de célzott kezelést szeretnének.",
        ],
      },
    },
    {
      id: "03",
      title: "Flow masszázs",
      lead: "Lágy, folyamatos mozdulatokkal teremtünk áramlást és nyugalmat, hogy a test és a lélek is megpihenjen.",
      bullets: [
        "Folyamatos, ritmikus technika",
        "Izomlazítás és feszültségoldás",
        "Teljes jelenlét és lélegzet",
      ],
      tags: ["Lazítás", "Harmonizálás", "Relaxáció"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "65 perc" },
          { label: "Intenzitás", value: "Lágy" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik teljes relaxációra vágynak.",
          "Akik stresszt vagy izomfeszültséget oldanának.",
          "Akik nyugodt, lassú ritmusban szeretnének kikapcsolódni.",
        ],
      },
    },
    {
      id: "04",
      title: "Pedikűr",
      lead: "Ápolt, friss lábérzetet adó kezelés, amely rendezett körmökkel és puhább bőrrel zárul.",
      bullets: [
        "Köröm- és bőrápolás",
        "Esztétikus, rendezett végeredmény",
        "Kényelmes, kíméletes folyamat",
      ],
      tags: ["Ápolás", "Esztétika", "Kényelem"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "70 perc" },
          { label: "Intenzitás", value: "Kíméletes" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik ápolt, rendezett körmöket szeretnének.",
          "Akik kényelmes, frissítő lábápolásra vágynak.",
          "Akik tartós, esztétikus végeredményt keresnek.",
        ],
      },
    },
    {
      id: "05",
      title: "Benőtt köröm kezelése",
      lead: "Kíméletes, célzott kezelés a benőtt köröm okozta kellemetlenségek enyhítésére.",
      bullets: [
        "Fájdalomcsökkentés és tehermentesítés",
        "Köröm és környező bőr rendbetétele",
        "Tanácsok a megelőzéshez",
      ],
      tags: ["Célzott", "Tehermentesítés", "Megkönnyebbülés"],
      side: {
        cardTitle: "Tudnivalók",
        infoItems: [
          { label: "Időtartam", value: "30-45 perc" },
          { label: "Intenzitás", value: "Súlyosságtól függő" },
        ],
        noteTitle: "Kinek ajánlott",
        noteBullets: [
          "Akik benőtt köröm miatti fájdalmat tapasztalnak.",
          "Akik gyors, szakszerű enyhülést szeretnének.",
          "Akik megelőznék a probléma visszatérését.",
        ],
      },
    },
  ];

  return (
    <div className="services-page">
      <Hero
        title="Kezelések"
        body="Válassz a kezelések közül, és töltsd ki a részleteket a saját igényeid szerint."
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
          }`}
          eyebrowLabel="Kezelés"
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
