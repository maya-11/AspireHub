import React, { useState } from "react";

function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    // Here, you would typically send formData to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Bio:</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Create Profile</button>
    </form>
  );
}

export default ProfileForm;
