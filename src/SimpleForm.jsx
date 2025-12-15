import React, { useState } from "react";

export default function SimpleForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  // Destructure (name, value) and update state using spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;   // destructuring
    setForm(prev => ({
      ...prev,          // spread operator
      [name]: value     // update specific field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Simple Form</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      /><br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      /><br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}
