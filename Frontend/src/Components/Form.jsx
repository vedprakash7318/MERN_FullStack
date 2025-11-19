import React, { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    gender: "",
    qualification: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let newQualification = [...form.qualification];

      if (checked) {
        newQualification.push(value);
      }
      setForm({ ...form, qualification: newQualification });
      return;
    }

    // Normal inputs
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br /><br />

        {/* Phone */}
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <br /><br />

        {/* DOB */}
        <label>DOB:</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        <br /><br />

        {/* Gender */}
        <label>Gender:</label><br />

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender === "Male"}
          onChange={handleChange}
        /> Male <br />

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender === "Female"}
          onChange={handleChange}
        /> Female <br />

        <input
          type="radio"
          name="gender"
          value="Other"
          checked={form.gender === "Other"}
          onChange={handleChange}
        /> Other <br /><br />

        {/* Qualification */}
        <label>Qualification:</label><br />

        <input
          type="checkbox"
          value="10th"
          checked={form.qualification.includes("10th")}
          onChange={handleChange}
        /> 10th <br />

        <input
          type="checkbox"
          value="12th"
          checked={form.qualification.includes("12th")}
          onChange={handleChange}
        /> 12th <br />

        <input
          type="checkbox"
          value="Graduation"
          checked={form.qualification.includes("Graduation")}
          onChange={handleChange}
        /> Graduation <br /><br />

        {/* Message */}
        <label>Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
        ></textarea>
        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}
