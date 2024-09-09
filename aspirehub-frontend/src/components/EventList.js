import React, { useEffect, useState } from "react";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // This will eventually fetch events from the backend
    setEvents([
      { title: "Tech Conference 2024", date: "Jan 15, 2024" },
      { title: "AI Workshop", date: "Feb 10, 2024" },
    ]);
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
