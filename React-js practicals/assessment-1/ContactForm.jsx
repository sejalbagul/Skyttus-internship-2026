import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Message sent! (Demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container"><h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          {errors.name && <span>{errors.name}</span>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          {errors.email && <span>{errors.email}</span>}
          <textarea name="message" placeholder="Message" rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
          {errors.message && <span>{errors.message}</span>}
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;