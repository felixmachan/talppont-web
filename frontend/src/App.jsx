import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import CollapsibleExample from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

// Lazy load the page components
const Home = lazy(() => import("./components/Home.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Prices = lazy(() => import("./components/Prices.jsx"));
const Faq = lazy(() => import("./components/Faq.jsx"));
const Login = lazy(() => import("./components/Login.jsx"));
const Register = lazy(() => import("./components/Register.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const ConfirmEmail = lazy(() => import("./components/ConfirmEmail.jsx"));
const ResetPassword = lazy(() => import("./components/ResetPassword.jsx"));
const ForgotPassword = lazy(() => import("./components/ForgotPassword.jsx"));
const DatePickerComponent = lazy(() => import("./components/DatePickerComponent.jsx"));


function App() {
  return (
    <div className="root">
      <Router>
        <AuthProvider>
          <CollapsibleExample />
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Betöltés...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/appointments" element={<DatePickerComponent />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/faq" element={<Faq />} />
              {/*<Route path="/login" element={<Login />} /> */}
              {/* <Route path="/register" element={<Register />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/*<Route path="/confirm/:token" element={<ConfirmEmail />} /> */}
              {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
              {/*<Route path="/forgot-password" element={<ForgotPassword />} /> */}
            </Routes>
          </Suspense>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
