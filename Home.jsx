import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck, FaRegLightbulb } from 'react-icons/fa';
import CourseCard from '../Components/CourseCard';
import { courseCategories, courses } from '../data/courses';
import './Home.css';

const Home = () => (
  <div className="home-page">
    <section className="home-hero">
      <div className="home-hero__inner page-shell">
        <div className="home-hero__copy">
          <span className="eyebrow"><FaRegLightbulb aria-hidden="true" /> A little progress every day</span>
          <h1>Learn at your pace.<br /><span>Build what’s next.</span></h1>
          <p>
            Study Hub brings beginner-friendly guides and technology learning paths together,
            so you can explore new skills and keep moving forward.
          </p>
          <div className="home-hero__actions">
            <Link className="button" to="/courses">Explore courses <FaArrowRight aria-hidden="true" /></Link>
            <Link className="button button--secondary" to="/about">About Study Hub</Link>
          </div>
          <div className="home-hero__note">
            <span className="home-hero__check"><FaCheck aria-hidden="true" /></span>
            Self-paced learning, with links to trusted documentation
          </div>
        </div>
        <div className="home-hero__visual">
          <img src="/banners/banner1.jpg" alt="A stack of books ready for a study session" />
          <div className="home-hero__visual-shade" />
        </div>
      </div>
    </section>

    <section className="home-categories page-shell" aria-labelledby="categories-heading">
      <div className="section-intro">
        <div>
          <span className="eyebrow">Choose a direction</span>
          <h2 id="categories-heading">Explore by category</h2>
        </div>
        <Link className="text-link" to="/courses">View every course <FaArrowRight aria-hidden="true" /></Link>
      </div>
      <div className="category-list">
        {courseCategories.map((category) => (
          <Link
            className="category-chip"
            key={category}
            to={`/courses?category=${encodeURIComponent(category)}`}
          >
            <span className="category-chip__icon"><FaArrowRight aria-hidden="true" /></span>
            {category}
          </Link>
        ))}
      </div>
    </section>

    <section className="home-featured">
      <div className="page-shell">
        <div className="section-intro">
          <div>
            <span className="eyebrow">Start learning</span>
            <h2>Popular starting points</h2>
            <p>Explore core skills for building on the web and beyond.</p>
          </div>
          <Link className="text-link" to="/courses">Browse all {courses.length} paths <FaArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="course-grid">
          {courses.slice(0, 4).map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </div>
    </section>

    <section className="home-how page-shell">
      <div className="home-how__intro">
        <span className="eyebrow">A clear way to begin</span>
        <h2>Make learning feel manageable.</h2>
        <p>Pick a subject, follow a simple topic outline, and use the linked references to go deeper whenever you’re ready.</p>
        <Link className="button button--secondary" to="/courses">Find a learning path</Link>
      </div>
      <div className="home-how__steps">
        <article className="learning-step">
          <span>01</span>
          <div><h3>Choose a topic</h3><p>Browse approachable paths across web development, programming, and developer tools.</p></div>
        </article>
        <article className="learning-step">
          <span>02</span>
          <div><h3>Learn in small steps</h3><p>Use each outline to decide what to study next, at a pace that works for you.</p></div>
        </article>
        <article className="learning-step">
          <span>03</span>
          <div><h3>Keep exploring</h3><p>Continue with freely available documentation and references from each course page.</p></div>
        </article>
      </div>
    </section>
  </div>
);

export default Home;
