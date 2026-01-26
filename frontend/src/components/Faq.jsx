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
            "Időpontot foglalni egyelőre telefonon vagy Messengeren keresztül tudsz. Az elérhetőségeimet megtalálod az Elérhetőségek oldalon.",
        },
        {
          question: "Van lehetőség a weboldalon időpontot foglalni?",
          answer:
            "Ez a funkció jelenleg még nem elérhető, de terveim szerint a jövőben erre is lesz lehetőség.",
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
            "Igen, kérlek jelezd időben, és segítek új időpontot találni.",
        },
        {
          question: "Milyen fizetési lehetőségek vannak?",
          answer: "Készpénz és előre egyeztetett egyéb megoldás is lehetséges.",
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
            "Gyere el az erre a problémára megoldást kínáló kezelésre, és kapsz megelőzési tanácsokat is.",
        },
      ],
    },
    {
      id: "egyeb",
      title: "Egyéb kérdések",
      items: [
        {
          question: "Mit vigyek magammal a kezelésre?",
          answer: "Kényelmes ruházat elég, a többit én biztosítom.",
        },
        {
          question: "Hol található a szalon?",
          answer: "A Kapcsolat oldalon megtalálod a címet és a térképet.",
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
        title="Gyakran Ismételt Kérdések"
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
