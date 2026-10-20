import { Link } from 'react-router-dom';
import './LearnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      <div className="intro-section">
        <h1>Discover Study Hub</h1>
        <p>
          Study Hub is an independent learning guide designed to help students explore programming and web development at their own pace.
        </p>
        <p>
          Each course page includes a short topic outline and links to free documentation, so learners can choose a useful next step without needing a paid course or account.
        </p>
        <p>
          Course progress is not saved in this frontend demo, but the learning paths and references are available to explore without signing in.
        </p>
      </div>
      <Link className="button" to="/courses">Browse the courses</Link>
    </div>
  );
};

export default LearnMore;
