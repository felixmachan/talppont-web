import React, { useState } from "react";
import Hero from "./Hero";
import { TbHelpCircle } from "react-icons/tb";
import "./Faq.css";

function Faq() {
  const [openId, setOpenId] = useState(null);
  const sections = [
    {
      id: "foglalas",
      title: "Időpontfoglalás",
      items: [
        {
          question: "Hogyan tudok időpontot foglalni?",
          answer:
            "Az Időpontfoglalás oldalon válassz dátumot és időpontot, majd töltsd ki az adataidat.",
        },
        {
          question: "Foglalhatok bejelentkezés nélkül?",
          answer:
            "Igen, vendégként is foglalhatsz. A név, email és telefonszám megadása szükséges.",
        },
        {
          question: "Mennyi idővel előre érdemes foglalni?",
          answer:
            "Ha biztos időpontot szeretnél, érdemes 1-2 héttel előre tervezni.",
        },
      ],
    },
    {
      id: "lemondas",
      title: "Lemondás és fizetés",
      items: [
        {
          question: "Mi történik 24 órán belüli lemondásnál?",
          answer:
            "24 órán belüli lemondásnál a foglalás árának 50%-a fizetendő.",
        },
        {
          question: "Módosíthatom az időpontot?",
          answer:
            "Igen, kérlek jelezd időben, és segítünk új időpontot találni.",
        },
        {
          question: "Milyen fizetési lehetőségek vannak?",
          answer:
            "Készpénz és előre egyeztetett egyéb megoldás is lehetséges.",
        },
      ],
    },
    {
      id: "kezelesek",
      title: "Kezelések és BEMER",
      items: [
        {
          question: "Mit érdemes tudni a BEMER terápiáról?",
          answer:
            "Kíméletes, mikrokeringést támogató kezelés, amely jól illeszthető más kezelések mellé.",
        },
        {
          question: "Melyik kezelés a legjobb stresszoldásra?",
          answer:
            "A flow/svédmasszázs és a prémium aroma rituálék mély relaxációt adnak.",
        },
        {
          question: "Van érzékeny bőrre is megoldás?",
          answer:
            "Igen, több kezeléshez választható kíméletes olaj vagy illóolaj kombináció.",
        },
      ],
    },
    {
      id: "labapolas",
      title: "Lábápolás és pedikűr",
      items: [
        {
          question: "Mi a különbség az esztétikai és gyógypedikűr között?",
          answer:
            "Az esztétikai pedikűr a szépségre fókuszál, a gyógypedikűr pedig problémás körmökre és bőrre.",
        },
        {
          question: "Mit tartalmaz a CALLUX PRO pedikűr?",
          answer:
            "Szikementes, vegán termékekkel végzett kezelés, gyümölcssavas hámlasztással.",
        },
        {
          question: "Benőtt köröm esetén mit tegyek?",
          answer:
            "Kíméletes kezelésre be tudsz jelentkezni, és kapsz megelőzési tanácsokat is.",
        },
      ],
    },
    {
      id: "egyeb",
      title: "Egyéb kérdések",
      items: [
        {
          question: "Mit vigyek magammal a kezelésre?",
          answer:
            "Kényelmes ruházat elég, a többit mi biztosítjuk.",
        },
        {
          question: "Hol található a szalon?",
          answer:
            "A Kapcsolat oldalon megtalálod a címet és a térképet.",
        },
        {
          question: "Ajándékutalvány is elérhető?",
          answer:
            "Igen, igény szerint bármilyen összegben kérhető ajándékutalvány.",
        },
      ],
    },
  ];


  return (
    <div className="faq-page">
      <Hero
        title="GY.I.K."
        body="Rövid, érthető válaszok a leggyakoribb kérdésekre."
        icon={<TbHelpCircle className="hero-icon" />}
      />

      {sections.map((section, index) => (
        <section
          className={`faq-panel ${index % 2 === 0 ? "faq-light" : "faq-accent"}${
            index === 0 ? " faq-no-top-border" : ""
          }${index === sections.length - 1 ? " faq-no-bottom-border" : ""}`}
          key={section.id}
        >
          <div className="faq-panel-inner">
            <div className="faq-section-header">
              <h2 className="faq-section-title">{section.title}</h2>
              <p className="faq-section-subtitle">
                Összegyűjtöttük a leggyakrabban felmerülő kérdéseket.
              </p>
            </div>
            <div className="faq-grid">
              {section.items.map((item, itemIndex) => {
                const itemId = `${section.id}-${itemIndex}`;
                const isOpen = openId === itemId;
                return (
                  <article
                    className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
                    key={item.question}
                  >
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenId((prev) => (prev === itemId ? null : itemId))
                      }
                    >
                      <span>{item.question}</span>
                      <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div
                      className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Faq;
