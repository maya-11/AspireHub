import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfileForm from "./components/ProfileForm";
import MentorList from "./components/MentorList";
import EventList from "./components/EventList";
import NavBar from "./components/NavBar";
import "./App.css"; // Ensure your CSS is properly imported

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/mentors" element={<MentorList />} />
        <Route path="/events" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
