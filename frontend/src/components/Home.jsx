import React from "react";
import { BsHeartPulseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero.jsx";
import "../Home.css";

function Home() {
  const navigate = useNavigate();
  const handlePrimaryClick = () => {
    navigate("/appointments");
  };

  return (
    <main className="home-page">
      <Hero
        title="Kezelések, amelyek tényleg feltöltenek"
        body="Nyugodt tér, személyre szabott figyelem és minőségi eszközök, hogy a tested és a lelked is könnyebb legyen."
        icon={<BsHeartPulseFill className="hero-icon" />}
        showButton={true}
        buttonText="Időpontot foglalok"
        buttonAction={handlePrimaryClick}
      />

      <section className="home-panel home-panel-accent">
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
              <span className="home-tag">Relaxáció</span>
              <span className="home-tag">Minőség</span>
              <span className="home-tag">Figyelem</span>
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
                Finom fények, természetes és minőségi anyagok.
              </p>
            </div>
            <div className="home-info-card">
              <div className="home-info-list">
                <div className="home-info-row">
                  <span className="home-info-label">Nyitvatartás</span>
                  <span className="home-info-value">H-P: 9:00-19:00</span>
                </div>
                <div className="home-info-row">
                  <span className="home-info-label">Időtartam</span>
                  <span className="home-info-value">30-90 perc</span>
                </div>
                <div className="home-info-row">
                  <span className="home-info-label">Fókusz</span>
                  <span className="home-info-value">Regeneráció + relax</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-panel home-panel-light">
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

      <section className="home-panel home-panel-accent">
        <div className="home-panel-inner">
          <div className="home-content">
            <span className="home-eyebrow">Minőség</span>
            <h2 className="home-title">
              Eszközök és módszerek, amikben hiszünk
            </h2>
            <p className="home-lead">
              A kezeléseket prémium eszközökkel és gondosan válogatott
              anyagokkal végzem, mert a részletek számítanak.
            </p>
            <ul className="home-list">
              <li>Higiénikus, steril eszközhasználat minden alkalommal.</li>
              <li>Minőségi olajok és kiegészítők, érzékeny bőrre is.</li>
              <li>
                Finomhangolt protokollok, hogy kiszámítható legyen az eredmény.
              </li>
            </ul>
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
            <div className="home-highlight">
              <h3>Miért választanak engem?</h3>
              <p>
                Mert nem futószalag, hanem figyelem. Tiszta kommunikáció, pontos
                időkezelés, és őszinte törődés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-panel home-panel-light"
        style={{ borderBottom: "0px" }}
      >
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
