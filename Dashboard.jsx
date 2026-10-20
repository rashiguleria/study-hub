import { useEffect, useMemo, useState } from 'react';
import { FiBookmark, FiBookOpen, FiExternalLink, FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { studyLevels, studyMaterials } from './studyMaterials';
import './StudentPages.css';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const initialLevelId = location.state?.levelId;
  const initialLevel = studyLevels.find((level) => level.id === initialLevelId) || studyLevels[0];
  const initialSubjectIds = location.state?.subjectIds || [];
  const initialSubjectId = initialLevel.subjects.find((subject) => initialSubjectIds.includes(subject.id))?.id || 'all';
  const [selectedLevel, setSelectedLevel] = useState(initialLevel.id);
  const [selectedSubject, setSelectedSubject] = useState(initialSubjectId);
  const [activeView, setActiveView] = useState('materials');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('studyHubBookmarkedIds') || '[]');
    } catch (error) {
      console.error('Could not read saved study bookmarks.', error);
      return [];
    }
  });
  const [recentIds, setRecentIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('studyHubRecentIds') || '[]');
    } catch (error) {
      console.error('Could not read recently viewed study materials.', error);
      return [];
    }
  });

  const currentLevel = studyLevels.find((level) => level.id === selectedLevel) || studyLevels[0];

  useEffect(() => {
    try {
      localStorage.setItem('studyHubBookmarkedIds', JSON.stringify(bookmarkedIds));
    } catch (error) {
      console.error('Could not save study bookmarks.', error);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('studyHubRecentIds', JSON.stringify(recentIds));
    } catch (error) {
      console.error('Could not save recently viewed study materials.', error);
    }
  }, [recentIds]);

  const visibleMaterials = useMemo(() => {
    const materials = activeView === 'bookmarks'
      ? studyMaterials.filter((material) => bookmarkedIds.includes(material.id))
      : studyMaterials.filter((material) => material.levelId === selectedLevel);
    const query = searchQuery.trim().toLowerCase();

    return materials.filter((material) => {
      const matchesSubject = selectedSubject === 'all' || material.subjectId === selectedSubject;
      const matchesSearch = !query || [
        material.topic,
        material.subjectName,
        material.levelLabel,
        material.source
      ].some((text) => text.toLowerCase().includes(query));
      return matchesSubject && matchesSearch;
    });
  }, [activeView, bookmarkedIds, searchQuery, selectedLevel, selectedSubject]);

  const recentMaterials = recentIds
    .map((id) => studyMaterials.find((material) => material.id === id))
    .filter(Boolean)
    .slice(0, 3);

  const changeLevel = (event) => {
    setSelectedLevel(event.target.value);
    setSelectedSubject('all');
    setActiveView('materials');
  };

  const toggleBookmark = (materialId) => {
    setBookmarkedIds((ids) => (
      ids.includes(materialId)
        ? ids.filter((id) => id !== materialId)
        : [...ids, materialId]
    ));
  };

  const openMaterial = (material) => {
    setRecentIds((ids) => [material.id, ...ids.filter((id) => id !== material.id)].slice(0, 6));
    window.open(material.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="dashboard-page page-shell">
      <header className="page-heading student-page-heading">
        <span className="eyebrow"><FiBookOpen aria-hidden="true" /> Your learning library</span>
        <h1>Study Dashboard</h1>
        <p>Browse organized study materials by school class or college level and subject.</p>
      </header>

      <section className="dashboard-panel" aria-label="Study materials">
        <div className="dashboard-toolbar">
          <div className="dashboard-view-tabs" role="group" aria-label="Study library view">
            <button
              className={activeView === 'materials' ? 'dashboard-view-tab is-active' : 'dashboard-view-tab'}
              type="button"
              aria-pressed={activeView === 'materials'}
              onClick={() => setActiveView('materials')}
            >
              All materials
            </button>
            <button
              className={activeView === 'bookmarks' ? 'dashboard-view-tab is-active' : 'dashboard-view-tab'}
              type="button"
              aria-pressed={activeView === 'bookmarks'}
              onClick={() => {
                setActiveView('bookmarks');
                setSelectedSubject('all');
              }}
            >
              <FiBookmark aria-hidden="true" /> Saved
              <span className="dashboard-saved-count">{bookmarkedIds.length}</span>
            </button>
          </div>

          <label className="dashboard-search">
            <FiSearch aria-hidden="true" />
            <span className="visually-hidden">Search study materials</span>
            <input
              type="search"
              placeholder="Search topics or subjects"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>
        </div>

        {activeView === 'materials' && (
          <div className="dashboard-filters">
            <label>
              <span>Study level</span>
              <select value={selectedLevel} onChange={changeLevel}>
                <optgroup label="School">
                  {studyLevels.filter((level) => level.group === 'School').map((level) => (
                    <option value={level.id} key={level.id}>{level.label}</option>
                  ))}
                </optgroup>
                <optgroup label="College">
                  {studyLevels.filter((level) => level.group === 'College').map((level) => (
                    <option value={level.id} key={level.id}>{level.label}</option>
                  ))}
                </optgroup>
              </select>
            </label>
            <label>
              <span>Subject</span>
              <select value={selectedSubject} onChange={(event) => setSelectedSubject(event.target.value)}>
                <option value="all">All subjects</option>
                {currentLevel.subjects.map((subject) => (
                  <option value={subject.id} key={subject.id}>{subject.name}</option>
                ))}
              </select>
            </label>
            <p className="dashboard-result-count">
              {visibleMaterials.length} {visibleMaterials.length === 1 ? 'topic' : 'topics'} available
            </p>
          </div>
        )}

        <div className="dashboard-material-grid">
          {visibleMaterials.map((material) => {
            const isBookmarked = bookmarkedIds.includes(material.id);
            return (
              <article className="dashboard-material-card" key={material.id}>
                <div className="dashboard-material-card__top">
                  <span className="dashboard-material-card__icon"><FiBookOpen aria-hidden="true" /></span>
                  <button
                    className={`dashboard-bookmark${isBookmarked ? ' is-saved' : ''}`}
                    type="button"
                    aria-label={`${isBookmarked ? 'Remove bookmark for' : 'Bookmark'} ${material.topic}`}
                    aria-pressed={isBookmarked}
                    onClick={() => toggleBookmark(material.id)}
                  >
                    <FiBookmark aria-hidden="true" />
                  </button>
                </div>
                <p className="dashboard-material-card__subject">{material.subjectName} <span>·</span> {material.levelLabel}</p>
                <h2>{material.topic}</h2>
                <p className="dashboard-material-card__source">Free learning resource from {material.source}</p>
                <button className="dashboard-open-link" type="button" onClick={() => openMaterial(material)}>
                  Open study resource <FiExternalLink aria-hidden="true" />
                </button>
              </article>
            );
          })}
          {visibleMaterials.length === 0 && (
            <div className="dashboard-empty">
              <FiBookOpen aria-hidden="true" />
              <h2>{activeView === 'bookmarks' ? 'No saved materials yet' : 'No topics match your search'}</h2>
              <p>
                {activeView === 'bookmarks'
                  ? 'Use the bookmark icon on a study card to save it here.'
                  : 'Try another subject or search for a different topic.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {activeView === 'materials' && recentMaterials.length > 0 && (
        <section className="dashboard-recent">
          <h2>Recently opened</h2>
          <div className="dashboard-recent__list">
            {recentMaterials.map((material) => (
              <button key={material.id} type="button" onClick={() => openMaterial(material)}>
                <FiBookOpen aria-hidden="true" />
                <span>{material.topic}<small>{material.subjectName} · {material.levelLabel}</small></span>
                <FiExternalLink aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>
      )}
      <p className="dashboard-disclaimer">Study Hub links to free external references; materials are provided by their respective publishers.</p>
    </div>
  );
};

export default Dashboard;
