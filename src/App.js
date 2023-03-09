import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StartForm from "./pages/StartForm";
import DurationForm from "./pages/DurationForm";
import WhenForm from "./pages/WhenForm";
import WhereForm from "./pages/WhereForm";
import GuestsForm from "./pages/GuestForm";
import PersonalInfo from "./pages/PersonalInfo";
import ThankYouPage from "./pages/ThankYouPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<StartForm />} />
        <Route path="duration" element={<DurationForm />} />
        <Route path="when" element={<WhenForm />} />
        <Route path="where" element={<WhereForm />} />
        <Route path="guests" element={<GuestsForm />} />
        <Route path="info" element={<PersonalInfo />} />
        <Route path="thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
