import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import CollapsibleExample from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const Home = lazy(() => import("./components/Home.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Prices = lazy(() => import("./components/Prices.jsx"));
const Faq = lazy(() => import("./components/Faq.jsx"));

import HomeSkeleton from "./components/skeletons/HomeSkeleton.jsx";
import PageSkeleton from "./components/skeletons/PageSkeleton.jsx";

function FallbackForRoute() {
  const { pathname } = useLocation();

  if (pathname === "/") return <HomeSkeleton />;
  // ide rakhatod: /services -> ServicesSkeleton, stb.
  return <PageSkeleton />;
}

function AppShell() {
  return (
    <div className="app-shell">
      <CollapsibleExample />
      <main className="app-main">
        <div className="page-bg">
          <Suspense fallback={<FallbackForRoute />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
