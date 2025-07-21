import React, { useState } from "react";
import styles from "@/styles/contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then(data => console.log(data))
    .catch((error)=> console.log(error))
    setFormData({ name: "", email: "", phone: "", desc: "" });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
        </div>

        {/* Phone Field */}
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            className={styles.input}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Description Field */}
        <div className={styles.formGroup}>
          <label htmlFor="desc" className={styles.label}>
            How Can We Help You?
          </label>
          <textarea
            className={styles.textarea}
            id="desc"
            name="desc"
            rows="4"
            value={formData.desc}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;