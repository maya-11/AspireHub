import React, { useEffect, useState } from "react";

function MentorList() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // This will eventually fetch mentors from the backend
    setMentors([
      { name: "John Doe", expertise: "AI" },
      { name: "Jane Smith", expertise: "Cybersecurity" },
    ]);
  }, []);

  return (
    <div>
      <h2>Mentors</h2>
      <ul>
        {mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} - {mentor.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
