import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (formData.get('password') !== formData.get('confirm-password')) {
      setNotice('The passwords do not match. Please check them and try again.');
      return;
    }
    setNotice('Account creation is not connected in this frontend project. Your details were not sent or saved.');
  };

  return (
    <div className="auth-page page-shell">
      <section className="auth-card">
        <div className="auth-card__heading">
          <span className="eyebrow">Start learning</span>
          <h1>Create your account</h1>
          <p>Registration is shown as a frontend interface only.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="register-name">Name</label>
          <input id="register-name" name="name" type="text" autoComplete="name" required maxLength={80} />
          <label htmlFor="register-email">Email address</label>
          <input id="register-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="register-password">Password</label>
          <input id="register-password" name="password" type="password" autoComplete="new-password" minLength={8} required />
          <label htmlFor="confirm-password">Confirm password</label>
          <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" minLength={8} required />
          <button className="button" type="submit">Create account</button>
        </form>
        {notice && <p className="auth-notice" role="status">{notice}</p>}
        <p className="auth-card__switch">Already have an account? <Link to="/login">Log in</Link></p>
        <Link className="auth-card__guest" to="/courses">Continue exploring courses</Link>
      </section>
    </div>
  );
};

export default Register;
