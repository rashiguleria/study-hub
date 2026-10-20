import { useState } from 'react';
import { FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice('Your message passed the form checks, but this frontend demo has no delivery service connected. Nothing was sent or stored.');
  };

  return (
    <div className="contact-page page-shell">
      <header className="page-heading contact-heading">
        <span className="eyebrow">Contact Study Hub</span>
        <h1>We’d like to hear from you.</h1>
        <p>Share a question or feedback about the learning paths and resources.</p>
      </header>

      <div className="contact-layout">
        <aside className="contact-aside">
          <span className="contact-aside__icon"><FaRegCommentDots aria-hidden="true" /></span>
          <h2>Send a note</h2>
          <p>This project is a frontend demo and does not publish a contact email or phone number.</p>
          <div className="contact-aside__note">
            <FaEnvelope aria-hidden="true" />
            <span>Messages are not delivered until a form service is connected.</span>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={80} />

          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={6} required minLength={10} maxLength={2000} />

          <button className="button" type="submit">Check message</button>
          {notice && <p className="form-notice" role="status">{notice}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
