import React, { useState } from "react";
import axios from "axios";
import { storeCurrentUser } from "../auth";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://stark-bastion-05693.herokuapp.com/api/users/login",
        {
          username: form.username,
          password: form.password,
        }
      );
      storeCurrentUser(res.data.user, res.data.token);
      console.log("resdata", res.data);
      setUser(res.data.user);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("form", form);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <label>Username: </label>
      <input name="username" value={form.username} onInput={handleInput} />
      <label> Password: </label>
      <input
        name="password"
        value={form.password}
        onInput={handleInput}
        type="password"
      />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
