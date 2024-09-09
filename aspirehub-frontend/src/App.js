import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfileForm} />
        <Route path="/mentors" component={MentorList} />
        <Route path="/events" component={EventList} />
      </Switch>
    </Router>
  );
}

export default App;
