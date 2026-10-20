import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice('Authentication is not connected in this frontend project. Your details were not sent or saved.');
  };

  return (
    <div className="auth-page page-shell">
      <section className="auth-card">
        <div className="auth-card__heading">
          <span className="eyebrow">Welcome back</span>
          <h1>Log in to Study Hub</h1>
          <p>Sign-in is shown as a frontend interface only.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email address</label>
          <input id="login-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="login-password">Password</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" required />
          <button className="button" type="submit">Log in</button>
        </form>
        {notice && <p className="auth-notice" role="status">{notice}</p>}
        <p className="auth-card__switch">New to Study Hub? <Link to="/register">Create an account</Link></p>
        <Link className="auth-card__guest" to="/courses">Continue exploring courses</Link>
      </section>
    </div>
  );
};

export default Login;
