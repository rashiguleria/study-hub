import { Link } from 'react-router-dom';
import { FaBookOpen, FaCompass, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => (
  <div className="about-page page-shell">
    <header className="page-heading about-heading">
      <span className="eyebrow">About Study Hub</span>
      <h1>Learning should feel easier to start.</h1>
      <p>
        Study Hub is a student-friendly guide to learning technology. It brings useful topics,
        clear starting points, and links to trusted learning references into one place.
      </p>
    </header>

    <section className="about-mission">
      <div className="about-mission__art" aria-hidden="true">
        <div className="about-mission__book"><FaBookOpen /></div>
        <span className="about-mission__spark about-mission__spark--one">+</span>
        <span className="about-mission__spark about-mission__spark--two">✦</span>
        <span className="about-mission__label">Learn a little.<br />Build a lot.</span>
      </div>
      <div className="about-mission__copy">
        <span className="eyebrow">Our purpose</span>
        <h2>A practical starting point for self-learning.</h2>
        <p>
          Finding a first step can be the hardest part of learning a new skill. Study Hub organizes
          introductory paths across web development, programming, data, and developer tools, then
          points learners toward freely available documentation to continue exploring.
        </p>
        <p>
          The site is an independent educational frontend. It does not issue certifications,
          provide paid courses, or claim partnerships with the resources it links to.
        </p>
        <Link className="text-link" to="/courses">Explore the course paths <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="about-principles" aria-labelledby="principles-title">
      <div className="page-heading">
        <span className="eyebrow">How we think about learning</span>
        <h2 id="principles-title">Simple, useful, and student-first.</h2>
      </div>
      <div className="principle-grid">
        <article className="principle-card">
          <span><FaCompass aria-hidden="true" /></span>
          <h3>Clear direction</h3>
          <p>Topic outlines help turn a broad subject into approachable next steps.</p>
        </article>
        <article className="principle-card">
          <span><FaLaptopCode aria-hidden="true" /></span>
          <h3>Learn by exploring</h3>
          <p>Follow a path at your own pace and use external references to deepen your understanding.</p>
        </article>
        <article className="principle-card">
          <span><FaBookOpen aria-hidden="true" /></span>
          <h3>Honest resources</h3>
          <p>Course pages are guides, not credentials; linked materials remain with their publishers.</p>
        </article>
      </div>
    </section>

    <section className="about-cta">
      <div>
        <h2>Ready to find your next topic?</h2>
        <p>Browse the learning paths and choose a place to begin.</p>
      </div>
      <Link className="button" to="/courses">Browse courses</Link>
    </section>
  </div>
);

export default About;
