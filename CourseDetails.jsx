import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import { courses } from '../data/courses';
import './CourseDetails.css';

const CourseDetails = () => {
  const { courseSlug } = useParams();
  const course = courses.find((item) => item.slug === courseSlug);

  if (!course) {
    return (
      <section className="page-shell course-not-found">
        <span className="eyebrow">Course not found</span>
        <h1>That learning path isn’t here.</h1>
        <p>Choose another course from the Study Hub catalog.</p>
        <Link className="button" to="/courses"><FaArrowLeft aria-hidden="true" /> Browse courses</Link>
      </section>
    );
  }

  const Icon = course.Icon;

  return (
    <div className="course-detail page-shell">
      <Link className="course-detail__back text-link" to="/courses">
        <FaArrowLeft aria-hidden="true" /> All courses
      </Link>
      <header className="course-detail__hero">
        <span className="course-detail__icon" style={{ color: course.color }}>
          <Icon aria-hidden="true" />
        </span>
        <span className="eyebrow">{course.category} · {course.level}</span>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </header>

      <div className="course-detail__layout">
        <section className="course-detail__panel">
          <span className="eyebrow">Learning outline</span>
          <h2>What you’ll explore</h2>
          <p>Use these topics as a flexible starting sequence. Work through them at your own pace and revisit ideas as needed.</p>
          <ol className="topic-list">
            {course.topics.map((topic, index) => (
              <li key={topic}>
                <span className="topic-list__number">{String(index + 1).padStart(2, '0')}</span>
                <span>{topic}</span>
                <FaCheck className="topic-list__check" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <aside className="course-resources">
          <span className="eyebrow">Go deeper</span>
          <h2>Learning resources</h2>
          <p>These freely accessible references can help you continue your self-study.</p>
          <ul>
            {course.resources.map((resource) => (
              <li key={resource.url}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.label}
                  <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="course-resources__note">
            Study Hub is a learning guide, not a certification program. Resource terms and availability are set by their publishers.
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetails;
