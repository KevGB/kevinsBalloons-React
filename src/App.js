import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
