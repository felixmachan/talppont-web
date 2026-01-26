import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stílusok importálása
import AuthContext, { AuthProvider } from "./components/AuthContext.jsx"; // AuthContext importálása
import "./fonts.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
