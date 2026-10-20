import { useState } from 'react';
import { FiArrowRight, FiCheckCircle, FiRefreshCw, FiShuffle } from 'react-icons/fi';
import { quizLevels, quizQuestionBank } from './quizBank';
import './StudentPages.css';
import './QuizZone.css';

const QuizZone = () => {
  const [selectedLevelId, setSelectedLevelId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [checkedAnswer, setCheckedAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const level = quizLevels.find((item) => item.id === selectedLevelId);
  const subjects = level?.subjects || [];
  const subject = subjects.find((item) => item.id === selectedSubjectId);
  const questions = subject ? quizQuestionBank[subject.id] : [];
  const question = questions?.[questionIndex];

  const selectLevel = (event) => {
    setSelectedLevelId(event.target.value);
    setSelectedSubjectId('');
  };

  const startQuiz = (event) => {
    event.preventDefault();
    if (!level || !subject || !questions?.length) return;
    setQuestionIndex(0);
    setSelectedOption(null);
    setCheckedAnswer(false);
    setScore(0);
    setFinished(false);
    setStarted(true);
  };

  const checkAnswer = () => {
    if (selectedOption === null || checkedAnswer || !question) return;
    if (selectedOption === question.answer) setScore((currentScore) => currentScore + 1);
    setCheckedAnswer(true);
  };

  const continueQuiz = () => {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedOption(null);
    setCheckedAnswer(false);
  };

  const restartQuiz = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setCheckedAnswer(false);
    setScore(0);
    setFinished(false);
    setStarted(true);
  };

  const chooseAnotherQuiz = () => {
    setStarted(false);
    setQuestionIndex(0);
    setSelectedOption(null);
    setCheckedAnswer(false);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="quiz-page page-shell">
      <header className="page-heading student-page-heading">
        <span className="eyebrow"><FiCheckCircle aria-hidden="true" /> Practice and progress</span>
        <h1>Quiz Zone</h1>
        <p>Choose your study level and subject first, then take a short practice quiz.</p>
      </header>

      {!started ? (
        <section className="quiz-card quiz-setup">
          <div className="quiz-setup__intro">
            <span className="quiz-setup__icon"><FiShuffle aria-hidden="true" /></span>
            <div>
              <h2>Choose a quiz</h2>
              <p>Pick a level and subject to get a quiz made for your studies.</p>
            </div>
          </div>
          <form className="quiz-setup__form" onSubmit={startQuiz}>
            <label>
              <span>Study level</span>
              <select required value={selectedLevelId} onChange={selectLevel}>
                <option value="" disabled>Select your level</option>
                <optgroup label="School">
                  {quizLevels.filter((item) => item.id.startsWith('class')).map((item) => (
                    <option value={item.id} key={item.id}>{item.label}</option>
                  ))}
                </optgroup>
                <optgroup label="College">
                  {quizLevels.filter((item) => !item.id.startsWith('class')).map((item) => (
                    <option value={item.id} key={item.id}>{item.label}</option>
                  ))}
                </optgroup>
              </select>
            </label>
            <label>
              <span>Subject</span>
              <select
                required
                value={selectedSubjectId}
                onChange={(event) => setSelectedSubjectId(event.target.value)}
                disabled={!level}
              >
                <option value="" disabled>{level ? 'Select a subject' : 'Choose a level first'}</option>
                {subjects.map((item) => (
                  <option value={item.id} key={item.id}>{item.name}</option>
                ))}
              </select>
            </label>
            <div className="quiz-setup__footer">
              <p>{subject ? `A ${questions.length}-question ${subject.name} quiz for ${level.label}.` : 'Each quiz has three questions with instant feedback.'}</p>
              <button className="button" type="submit" disabled={!level || !subject}>
                Start quiz <FiArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <section className="quiz-card" aria-label={`${level.label} ${subject.name} quiz`}>
          {!finished ? (
            <>
              <div className="quiz-card__meta">
                <span>{level.label} · {subject.name}</span>
                <span>Question {questionIndex + 1} of {questions.length}</span>
              </div>
              <div
                className="quiz-progress"
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuemin="1"
                aria-valuemax={questions.length}
                aria-valuenow={questionIndex + 1}
              >
                <span style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }} />
              </div>
              <h2 className="quiz-question">{question.prompt}</h2>
              <div className="quiz-options">
                {question.options.map((option, index) => {
                  const isCorrect = checkedAnswer && index === question.answer;
                  const isIncorrect = checkedAnswer && selectedOption === index && !isCorrect;
                  let className = 'quiz-option';
                  if (selectedOption === index) className += ' quiz-option--selected';
                  if (isCorrect) className += ' quiz-option--correct';
                  if (isIncorrect) className += ' quiz-option--incorrect';

                  return (
                    <button
                      className={className}
                      type="button"
                      key={option}
                      aria-pressed={selectedOption === index}
                      disabled={checkedAnswer}
                      onClick={() => setSelectedOption(index)}
                    >
                      <span className="quiz-option__letter">{String.fromCharCode(65 + index)}</span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>
              {checkedAnswer && (
                <p className={`quiz-feedback${selectedOption === question.answer ? ' quiz-feedback--correct' : ''}`} role="status">
                  {selectedOption === question.answer ? 'Correct! Nice work.' : 'Not quite. The highlighted option is correct.'}
                </p>
              )}
              <div className="quiz-actions">
                {!checkedAnswer ? (
                  <button className="button" type="button" disabled={selectedOption === null} onClick={checkAnswer}>
                    Check answer
                  </button>
                ) : (
                  <button className="button" type="button" onClick={continueQuiz}>
                    {questionIndex === questions.length - 1 ? 'See results' : 'Next question'}
                    <FiArrowRight aria-hidden="true" />
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="quiz-results" role="status">
              <span className="quiz-results__icon"><FiCheckCircle aria-hidden="true" /></span>
              <p className="eyebrow">Quiz complete</p>
              <h2>You scored {score} out of {questions.length}</h2>
              <p>{score === questions.length ? 'Perfect score! You have this down.' : 'Keep practicing and you’ll get even better.'}</p>
              <div className="quiz-results__actions">
                <button className="button button--secondary" type="button" onClick={chooseAnotherQuiz}>Choose another quiz</button>
                <button className="button" type="button" onClick={restartQuiz}>
                  <FiRefreshCw aria-hidden="true" /> Try again
                </button>
              </div>
            </div>
          )}
        </section>
      )}
      <p className="quiz-note">Your answers and scores stay in this browser session and are not shared.</p>
    </div>
  );
};

export default QuizZone;
