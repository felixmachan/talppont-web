import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../dick.css"; // ha van sajat stilusod
import "../DayPicker.css"; // ha van sajat DayPicker stilusod
import Hero from "./Hero.jsx";
import { MdMoreTime } from "react-icons/md";

function DatePickerComponent() {
  const mockMode = true;
  const mockSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "11:30",
    "13:00",
    "14:00",
    "15:00",
    "16:30",
    "17:30",
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [user, setUser] = useState(null); // bejelentkezett user
  const [error, setError] = useState(""); // hibakezeleshez
  const [success, setSuccess] = useState("");

  const [note, setNote] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Lekerjuk a user adatokat
  useEffect(() => {
    if (mockMode) return;
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          console.warn("Token ervenytelen vagy lejart:", res.status);
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (err) {
        console.error("Nem sikerult lekerdezni a usert:", err);
      }
    };

    fetchUser();
  }, [mockMode]);

  // Datum formazas magyarosan
  const formatDate = (date) => {
    return date
      ? new Intl.DateTimeFormat("hu-HU", {
          month: "long",
          day: "numeric",
        }).format(date)
      : "Válassz egy dátumot";
  };

  // Foglalhato idopontok lekerdezese
  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate) {
        setAvailableSlots([]);
        setSelectedSlot(null);
        return;
      }
      if (mockMode) {
        setAvailableSlots(mockSlots);
        return;
      }
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const response = await fetch(
        `/api/available-slots?date=${formattedDate}`,
      );
      const data = await response.json();
      setAvailableSlots(data);
    };

    fetchSlots();
  }, [selectedDate, mockMode]);

  // Slotok szetbontasa delelott/delutan
  const morningSlots = availableSlots.filter(
    (t) => parseInt(t.split(":")[0]) < 12,
  );
  const afternoonSlots = availableSlots.filter(
    (t) => parseInt(t.split(":")[0]) >= 12,
  );

  // Foglalas vegpont hivasa
  const handleBooking = async () => {
    setError("");
    setSuccess("");

    if (!selectedDate || !selectedSlot) {
      setError("Valassz ki egy datumot es idopontot!");
      return;
    }

    if (!user && (!name.trim() || !email.trim() || !phone.trim())) {
      setError("Kerlek, toltsd ki a nevet, emailt es telefonszamot!");
      return;
    }

    if (mockMode) {
      setSuccess("Az idopont lefoglalva (demo).");
      setSelectedSlot(null);
      setNote("");
      setName("");
      setEmail("");
      setPhone("");
      return;
    }

    const payload = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedSlot,
      note,
      ...(user
        ? {}
        : { name: name.trim(), email: email.trim(), phone: phone.trim() }),
    };

    try {
      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setError("");
        setSelectedSlot(null);
        setNote("");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setError(data.error || "Hiba tortent a foglalas soran.");
      }
    } catch (err) {
      console.error("Hiba a foglalasnal:", err);
      setError("Halozati hiba tortent.");
    }
  };

  return (
    <div>
      <Hero
        title="Időpontfoglalás"
        body="Válaszd ki a számodra legmegfelelőbb időpontot!"
        icon={<MdMoreTime className="hero-icon" />}
      />
      <div className="datepicker-container">
        <div className="booking-layout">
          <div className="booking-top-row">
            <div className="booking-card booking-calendar">
              <div className="daypicker-wrapper">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={{ before: new Date() }}
                  locale="hu"
                />
              </div>
            </div>

            <div className="booking-card booking-times">
              <h5 style={{ marginBottom: "30px" }}>
                {formatDate(selectedDate)}
              </h5>

              {availableSlots.length === 0 ? (
                <p>Nincs elérhető időpont erre a napra.</p>
              ) : (
                <>
                  {morningSlots.length > 0 && (
                    <div className="slot-section mb-2">
                      <h6>Délelőtt</h6>
                      <div className="slot-grid mb-3">
                        {morningSlots.map((slot, idx) => (
                          <div
                            key={idx}
                            className={`slot-card ${
                              selectedSlot === slot ? "selected" : ""
                            }`}
                            onClick={() =>
                              setSelectedSlot((prev) =>
                                prev === slot ? null : slot,
                              )
                            }
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {afternoonSlots.length > 0 && (
                    <div className="slot-section">
                      <h6>Délután</h6>
                      <div className="slot-grid">
                        {afternoonSlots.map((slot, idx) => (
                          <div
                            key={idx}
                            className={`slot-card ${
                              selectedSlot === slot ? "selected" : ""
                            }`}
                            onClick={() =>
                              setSelectedSlot((prev) =>
                                prev === slot ? null : slot,
                              )
                            }
                          >
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {selectedSlot && (
            <div className="booking-form booking-card mt-4">
              <h6 className="booking-summary-title">Foglalás összefoglaló</h6>
              <div className="booking-meta">
                <span className="booking-pill">
                  Dátum: {formatDate(selectedDate)}
                </span>
                <span className="booking-pill">Időpont: {selectedSlot}</span>
              </div>

              <div className="booking-fields">
                {!user && (
                  <>
                    <div className="mb-2">
                      <label>Név</label>
                      <input
                        type="text"
                        className="form-control booking-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Kovács Pista"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control booking-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="pista.kovacs@example.com"
                      />
                    </div>
                    <div className="mb-2">
                      <label>Telefonszám</label>
                      <input
                        type="tel"
                        className="form-control booking-input"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+36 30 123 4567"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="booking-note">
                <label>Megjegyzés</label>
                <textarea
                  className="form-control booking-textarea"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <button className="btn btn-primary" onClick={handleBooking}>
                Foglalás vendégként
              </button>

              {error && (
                <div
                  className="alert alert-danger text-center mt-3"
                  role="alert"
                  style={{ width: "30%" }}
                >
                  {error}
                </div>
              )}

              {success && (
                <div
                  className="alert alert-success text-center mt-3"
                  role="alert"
                  style={{ width: "30%" }}
                >
                  {success}
                </div>
              )}

              {!user && (
                <div className="mt-3">
                  <small>
                    Már van fiókod? <a href="/login">Jelentkezz be</a> vagy{" "}
                    <a href="/register">regisztrálj</a>.
                  </small>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DatePickerComponent;
