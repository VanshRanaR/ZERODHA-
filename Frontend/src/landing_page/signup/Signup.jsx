import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";  // ✅ import CSS

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3002/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log("Signup Response:", data);

    if (data.success) {
      alert("Signup successful!");
      navigate("/dashboard"); // ✅ redirect
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="signup-container">
      <h1>Signup Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
