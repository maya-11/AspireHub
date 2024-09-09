import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/mentors">Mentors</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
