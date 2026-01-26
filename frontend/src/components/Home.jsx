import React, { useEffect, useRef } from "react";
import { BsHeartPulseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero.jsx";
import "../Home.css";

function Home() {
  const navigate = useNavigate();
  const handlePrimaryClick = () => {
    navigate("/appointments");
  };
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

  return (
    <main className="home-page" ref={revealRef}>
      <Hero
        title="Kezelések, amelyek tényleg feltöltenek"
        body="Nyugodt tér, személyre szabott figyelem és minőségi eszközök, hogy a tested és a lelked is könnyebb legyen."
        icon={<BsHeartPulseFill className="hero-icon" />}
        showButton={true}
        buttonText="Időpontot foglalok"
        buttonAction={handlePrimaryClick}
      />

      <section className="home-panel home-panel-light home-panel-no-top reveal-item">
        <div className="home-panel-inner">
          <div className="home-content">
            <span className="home-eyebrow">Szalon</span>
            <h2 className="home-title">
              TalpPont: nyugalom és tudatos gondoskodás
            </h2>
            <p className="home-lead">
              A szalon hangulata lassításra hív: letisztult, meleg terek, finom
              illatok és olyan ritmus, ahol végre jut idő rád.
            </p>
            <ul className="home-list">
              <li>Privát, csendes környezet a teljes ellazuláshoz.</li>
              <li>Tapasztalt kezek, egyéni állapotfelméréssel.</li>
              <li>
                Részletes visszajelzés, hogy tudd, mi történik a testeddel.
              </li>
            </ul>
            <div className="home-tags">
              <span className="home-tag">Lelassítás</span>
              <span className="home-tag">Minőség</span>
              <span className="home-tag">Figyelem</span>
            </div>
            <div className="home-info-card home-inline-card">
              <h3 className="home-info-title">Hasznos tudnivalók</h3>
              <div className="home-info-list">
                <div className="home-info-row">
                  <span className="home-info-label">Nyitvatartás</span>
                  <span className="home-info-value">H-P: 9:00-19:00</span>
                </div>
                <div className="home-info-row">
                  <span className="home-info-label">Helyszín</span>
                  <span className="home-info-value">Talppont műhely, Vác</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-side">
            <div className="home-image-card">
              <img
                className="home-image"
                src="https://placehold.co/680x520/png"
                alt="Szalon hangulat"
              />
              <p className="home-image-caption">
                Finom fények, természetes anyagok.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel-accent reveal-item">
        <div className="home-panel-inner home-panel-stack">
          <div className="home-content">
            <span className="home-eyebrow">Kezelések</span>
            <h2 className="home-title">
              Kiemelt irányok, amelyekben erősek vagyunk
            </h2>
            <p className="home-lead">
              A kezelések összeállítása minden esetben egyéni, de az alábbi
              irányok adják a gerincet. Azonnali könnyebbség, és hosszabb távú
              egyensúly.
            </p>
          </div>
          <div className="home-card-grid">
            <article className="home-card">
              <img
                className="home-card-image"
                src="https://placehold.co/520x360/png"
                alt="Reflexológia"
              />
              <h3>Reflexológia</h3>
              <p>
                Célzott pontok, pontos nyomás, stabil visszajelzés. A test
                reakciói alapján finomhangolt kezelés.
              </p>
              <div className="home-tags">
                <span className="home-tag">Fókuszált</span>
                <span className="home-tag">Egyensúly</span>
              </div>
            </article>
            <article className="home-card">
              <img
                className="home-card-image"
                src="https://placehold.co/520x360/png"
                alt="Talpmasszázs"
              />
              <h3>Talpmasszázs</h3>
              <p>
                Finom, ritmikus mozdulatokkal oldjuk a feszültséget, hogy a
                tested újra könnyed legyen.
              </p>
              <div className="home-tags">
                <span className="home-tag">Lazítás</span>
                <span className="home-tag">Stresszoldás</span>
              </div>
            </article>
            <article className="home-card">
              <img
                className="home-card-image"
                src="https://placehold.co/520x360/png"
                alt="Pedikűr"
              />
              <h3>Pedikűr és körömápolás</h3>
              <p>
                Precíz ápolás, higiénikus környezet, szép és egészséges lábak a
                mindennapokra.
              </p>
              <div className="home-tags">
                <span className="home-tag">Ápolt</span>
                <span className="home-tag">Kényelmes</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel-light reveal-item">
        <div className="home-panel-inner">
          <div className="home-content">
            <span className="home-eyebrow">BEMER terápia</span>
            <h2 className="home-title">
              Mikrokeringés támogatása, finom regeneráció
            </h2>
            <p className="home-lead">
              A BEMER kiegészítő kezelés célja a mikrokeringés támogatása, hogy
              a sejtek oxigén- és tápanyagellátása hatékonyabb legyen.
            </p>
            <ul className="home-list">
              <li>Rövid, kényelmes kezelési blokkok.</li>
              <li>Finom, fájdalommentes impulzusok.</li>
              <li>Jól illeszthető más kezelések mellé.</li>
            </ul>
            <div className="home-tags">
              <span className="home-tag">Kíméletes</span>
              <span className="home-tag">Regeneráció</span>
              <span className="home-tag">Kiegészítő</span>
            </div>
            <div className="home-highlight home-inline-card">
              <h3>Miért hasznos?</h3>
              <p>
                A BEMER segíthet a fáradtság csökkentésében és a regeneráció
                támogatásában, különösen megterhelő időszakokban.
              </p>
            </div>
          </div>
          <div className="home-side">
            <div className="home-image-card">
              <img
                className="home-image"
                src="https://placehold.co/680x520/png"
                alt="BEMER terápia"
              />
              <p className="home-image-caption">
                Lágy impulzusokkal támogatott mikrokeringés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel-accent reveal-item">
        <div className="home-panel-inner">
          <div className="home-content">
            <span className="home-eyebrow">Minőség</span>
            <h2 className="home-title">
              Eszközök és módszerek, amikben hiszünk
            </h2>
            <p className="home-lead">
              A kezeléseket prémium eszközökkel és gondosan válogatott
              anyagokkal végezzük, mert a részletek számítanak.
            </p>
            <ul className="home-list">
              <li>Higiénikus, steril eszközhasználat minden alkalommal.</li>
              <li>Minőségi olajok és kiegészítők, érzékeny bőrre is.</li>
              <li>
                Finomhangolt protokollok, hogy kiszámítható legyen az eredmény.
              </li>
            </ul>
            <div className="home-highlight home-inline-card">
              <h3>Miért választanak minket?</h3>
              <p>
                Mert nem futószalag, hanem figyelem. Tiszta kommunikáció, pontos
                időkezelés, és őszinte törődés.
              </p>
            </div>
          </div>
          <div className="home-side">
            <div className="home-image-card">
              <img
                className="home-image"
                src="https://placehold.co/680x520/png"
                alt="Eszközök és részletek"
              />
              <p className="home-image-caption">
                Professzionális eszközök, nyugodt fókusz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel-light home-panel-no-bottom reveal-item">
        <div className="home-panel-inner home-cta">
          <div>
            <span className="home-eyebrow">Következő lépés</span>
            <h2 className="home-title">Készen állsz egy nyugodtabb napra?</h2>
            <p className="home-lead">
              Válassz időpontot, és mi előkészítjük a teret, hogy már az első
              percben érezd a különbséget.
            </p>
          </div>
          <button
            className="home-button"
            type="button"
            onClick={handlePrimaryClick}
          >
            Időpontot foglalok
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
