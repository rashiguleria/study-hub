import { Link } from 'react-router-dom';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <div className="get-started-container">
      <div className="shapes-bg">
        <div className="circle"></div>
        <div className="triangle"></div>
        <div className="star"></div>
      </div>

      <div className="animated-book">
        <div className="book">
          <div className="page page1"></div>
          <div className="page page2"></div>
          <div className="page page3"></div>
        </div>
      </div>

      <div className="text-content">
        <h1>Let’s Begin Your Learning Adventure 📖</h1>
        <p>
          Welcome to <strong>Study Hub</strong> – a friendly place to begin learning web development and programming, one topic at a time.
        </p>
        <p>
          Explore organized learning paths, follow a subject outline, and continue with freely available documentation and references.
        </p>
        <p>
          Study Hub is a frontend learning guide. Choose a course to find a starting point and keep exploring at your own pace.
        </p>
        <Link className="button" to="/courses">Explore learning paths</Link>
      </div>
    </div>
  );
};

export default GetStarted;
