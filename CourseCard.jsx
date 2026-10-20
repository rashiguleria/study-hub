import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const Icon = course.Icon;

  return (
    <Link className="course-card" to={`/courses/${course.slug}`}>
      <div className="course-card__top">
        <span className="course-card__icon" style={{ color: course.color }}>
          <Icon aria-hidden="true" />
        </span>
        <span className="course-card__level">{course.level}</span>
      </div>
      <span className="course-card__category">{course.category}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <span className="course-card__action">
        Explore course <FaArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
};

export default CourseCard;
