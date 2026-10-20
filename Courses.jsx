import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import CourseCard from '../Components/CourseCard';
import { courseCategories, courses } from '../data/courses';
import './Courses.css';

const Courses = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const activeCategory = courseCategories.includes(categoryParam) ? categoryParam : 'All courses';
  const categories = ['All courses', ...courseCategories];

  const filteredCourses = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return courses.filter((course) => {
      const matchesCategory = activeCategory === 'All courses' || course.category === activeCategory;
      const searchableText = [course.title, course.category, course.description, ...course.topics]
        .join(' ')
        .toLowerCase();
      return matchesCategory && searchableText.includes(normalizedQuery);
    });
  }, [activeCategory, query]);

  const selectCategory = (category) => {
    setSearchParams(category === 'All courses' ? {} : { category });
  };

  return (
    <div className="courses-page page-shell">
      <header className="page-heading courses-heading">
        <span className="eyebrow">Learn something new</span>
        <h1>Explore learning paths</h1>
        <p>Choose a technology, follow a topic outline, and continue with free documentation and references.</p>
      </header>

      <div className="courses-toolbar">
        <div className="course-search">
          <FaSearch aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search courses or topics"
            aria-label="Search courses or topics"
          />
        </div>
        <span className="course-count" aria-live="polite">
          {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
        </span>
      </div>

      <div className="course-filters" role="group" aria-label="Filter courses by category">
        {categories.map((category) => (
          <button
            className={`course-filter${category === activeCategory ? ' course-filter--active' : ''}`}
            key={category}
            type="button"
            aria-pressed={category === activeCategory}
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredCourses.length > 0 ? (
        <div className="course-grid courses-grid">
          {filteredCourses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      ) : (
        <div className="courses-empty">
          <h2>No matching courses yet</h2>
          <p>Try another search term or choose a different category.</p>
          <button className="text-link" type="button" onClick={() => { setQuery(''); selectCategory('All courses'); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
