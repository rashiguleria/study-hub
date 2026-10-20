import { useState } from 'react';
import { FiCheck, FiPlus, FiTarget, FiTrash2 } from 'react-icons/fi';
import './StudentPages.css';
import './DailyGoals.css';

const initialGoals = [
  { id: 1, title: 'Review today’s class notes', completed: true },
  { id: 2, title: 'Practice for 30 minutes', completed: false },
  { id: 3, title: 'Read one topic from my course', completed: false }
];

const DailyGoals = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState('');
  const completedCount = goals.filter((goal) => goal.completed).length;

  const addGoal = (event) => {
    event.preventDefault();
    const title = newGoal.trim();
    if (!title) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Date.now(), title, completed: false }
    ]);
    setNewGoal('');
  };

  const toggleGoal = (goalId) => {
    setGoals((currentGoals) => currentGoals.map((goal) => (
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
    )));
  };

  const removeGoal = (goalId) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <div className="goals-page page-shell">
      <header className="page-heading student-page-heading">
        <span className="eyebrow"><FiTarget aria-hidden="true" /> Make today count</span>
        <h1>Your Daily Goals</h1>
        <p>Small, focused steps can make a big difference. Choose what you want to accomplish today.</p>
      </header>

      <section className="goals-card" aria-label="Daily goal tracker">
        <div className="goals-progress">
          <div>
            <h2>Today’s progress</h2>
            <p>{completedCount} of {goals.length} goals completed</p>
          </div>
          <span className="goals-progress__count">{goals.length ? Math.round((completedCount / goals.length) * 100) : 0}%</span>
        </div>
        <div
          className="goals-progress__track"
          role="progressbar"
          aria-label="Goals completed"
          aria-valuemin="0"
          aria-valuemax={goals.length}
          aria-valuenow={completedCount}
        >
          <span style={{ width: `${goals.length ? (completedCount / goals.length) * 100 : 0}%` }} />
        </div>

        <ul className="goals-list">
          {goals.map((goal) => (
            <li className={`goal-item${goal.completed ? ' goal-item--completed' : ''}`} key={goal.id}>
              <button
                className="goal-item__check"
                type="button"
                aria-label={`${goal.completed ? 'Mark incomplete' : 'Complete'}: ${goal.title}`}
                aria-pressed={goal.completed}
                onClick={() => toggleGoal(goal.id)}
              >
                {goal.completed && <FiCheck aria-hidden="true" />}
              </button>
              <span>{goal.title}</span>
              <button
                className="goal-item__remove"
                type="button"
                aria-label={`Remove ${goal.title}`}
                onClick={() => removeGoal(goal.id)}
              >
                <FiTrash2 aria-hidden="true" />
              </button>
            </li>
          ))}
          {goals.length === 0 && <li className="goals-empty">No goals yet. Add one to get started.</li>}
        </ul>

        <form className="goal-form" onSubmit={addGoal}>
          <label className="visually-hidden" htmlFor="new-goal">Add a daily goal</label>
          <input
            id="new-goal"
            value={newGoal}
            onChange={(event) => setNewGoal(event.target.value)}
            placeholder="Add a goal for today..."
            maxLength={100}
          />
          <button className="button" type="submit" disabled={!newGoal.trim()}>
            <FiPlus aria-hidden="true" /> Add goal
          </button>
        </form>
        <p className="goals-note">Your goals are kept in this page while it is open; they are not synced to an account.</p>
      </section>
    </div>
  );
};

export default DailyGoals;
