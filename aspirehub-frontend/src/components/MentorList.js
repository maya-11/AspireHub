import React from "react";

function MentorList() {
  // Replace with actual data fetching logic
  const mentors = [
    { id: 1, name: "Mentor 1" },
    { id: 2, name: "Mentor 2" },
    // Add more mentors as needed
  ];

  return (
    <div>
      <h1>Mentor List</h1>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id}>{mentor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
