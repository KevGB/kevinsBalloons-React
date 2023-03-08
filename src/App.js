import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/ThankYouPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <div className="App k">
      <Navigation />
      <Header  headline={"Kevin's Balloons"} tagline={"San Francisco's Globally-Demanded Balloon Artist"} display={true} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
