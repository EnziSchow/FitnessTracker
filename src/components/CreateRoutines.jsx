import React, { useState } from "react";
import axios from "axios";
import { getCurrentToken } from "../auth";

const CreateRoutines = ({ user }) => {
  const [form, setForm] = useState({
    creatorId: user.username,
    isPublic: true,
    name: "",
    goal: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        console.log("form", form),
        "https://stark-bastion-05693.herokuapp.com/api/routines",
        {
          creatorId: form.creatorId,
          isPublic: form.isPublic,
          name: form.name,
          goal: form.goal,
        },
        { headers: { Authorization: "Bearer " + getCurrentToken() } }
      );
      return res;
    } catch (error) {
      throw (error, "Error creating routine");
    }
  };

  return (
    <div>
      <h2> Create a new routine:</h2>
      <form onSubmit={handleSubmit} className="createRoutineForm">
        <label>Name:</label>
        <input name="name" value={form.name} onInput={handleInput} />
        <label>Goal:</label>
        <input name="goal" value={form.goal} onInput={handleInput} />
        <button type="submit" className="submit-btn">
          Create Routine
        </button>
      </form>
    </div>
  );
};

export default CreateRoutines;
