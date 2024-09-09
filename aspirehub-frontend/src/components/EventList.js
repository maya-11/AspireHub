import React from "react";

function EventList() {
  // Replace with actual data fetching logic
  const events = [
    { id: 1, title: "Event 1" },
    { id: 2, title: "Event 2" },
    // Add more events as needed
  ];

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
