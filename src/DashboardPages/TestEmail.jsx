import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const TestEmail = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_s95d6to';
    const templateID = 'template_gxgdsgc';
    const userID = 'rX57EqPpPiECl746p';

    // Sending the email using EmailJS
    emailjs.send(serviceID, templateID, {
      to_email: toEmail,
      subject: subject,
      message: message,
    }, userID)
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        // Optionally, reset form fields after successful email sending
        setToEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={sendEmail}>
        <label>
          To Email:
          <input type="email" value={toEmail} onChange={(e) => setToEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TestEmail;
