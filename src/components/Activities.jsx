import React, { useState } from "react";
import axios from "axios";
import { getCurrentToken } from "../auth";

const Activities = ({ activities, user }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://stark-bastion-05693.herokuapp.com/api/activities",
        {
          name: form.name,
          description: form.description,
        },

        { headers: { Authorization: "Bearer " + getCurrentToken() } }
      );
    } catch (error) {
      throw (error, "User already exists");
    }
  };

  return (
    <div className="activity-display">
      <h2>Activities:</h2>
      {user ? (
        <>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input name="name" value={form.name} onInput={handleInput} />
            <label>Description:</label>
            <input
              name="description"
              value={form.description}
              onInput={handleInput}
            />
            <button type="submit" className="submit-btn">
              Create Activity
            </button>
          </form>
          {activities.map(({ id, name, description }) => (
            <div key={id} className="activity-card">
              <p>Name: {name}</p>
              <p>Description: {description}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          {activities.map(({ id, name, description }) => (
            <div key={id} className="activity-card">
              <p>Name: {name}</p>
              <p>Description: {description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Activities;
