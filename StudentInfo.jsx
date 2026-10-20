import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FiUser } from 'react-icons/fi';
import './StudentPages.css';
import './StudentInfo.css';

const StudentInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: null,
    phone: '',
    classGrade: '',
    studyGoal: '',
    subjectCount: 1,
    selectedSubjects: []
  });

  const classOptions = [
    { label: 'Class 10', value: '10' },
    { label: 'Class 11', value: '11' },
    { label: 'Class 12', value: '12' },
    { label: 'Undergraduate', value: 'ug' },
    { label: 'Postgraduate', value: 'pg' }
  ];

  const goalOptions = [
    { label: 'Exam Preparation', value: 'exam' },
    { label: 'Skill Development', value: 'skill' },
    { label: 'Career Advancement', value: 'career' },
    { label: 'Personal Interest', value: 'interest' }
  ];

  const subjectsByLevel = {
    10: [
      { label: 'Mathematics', value: 'mathematics' },
      { label: 'Science', value: 'science' },
      { label: 'Social Science', value: 'social-science' },
      { label: 'English', value: 'english' }
    ],
    11: [
      { label: 'Mathematics', value: 'mathematics' },
      { label: 'Physics', value: 'physics' },
      { label: 'Chemistry', value: 'chemistry' },
      { label: 'Biology', value: 'biology' },
      { label: 'Economics', value: 'economics' },
      { label: 'Accountancy', value: 'accountancy' }
    ],
    12: [
      { label: 'Mathematics', value: 'mathematics' },
      { label: 'Physics', value: 'physics' },
      { label: 'Chemistry', value: 'chemistry' },
      { label: 'Biology', value: 'biology' },
      { label: 'Economics', value: 'economics' },
      { label: 'Accountancy', value: 'accountancy' }
    ],
    ug: [
      { label: 'Mathematics', value: 'mathematics' },
      { label: 'Physics', value: 'physics' },
      { label: 'Chemistry', value: 'chemistry' },
      { label: 'Computer Science', value: 'computer-science' },
      { label: 'Economics', value: 'economics' },
      { label: 'Psychology', value: 'psychology' }
    ],
    pg: [
      { label: 'Computer Science', value: 'computer-science' },
      { label: 'Data Science', value: 'data-science' },
      { label: 'Business Management', value: 'management' },
      { label: 'Research Methods', value: 'research-methods' }
    ]
  };
  const subjectOptions = subjectsByLevel[formData.classGrade] || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const levelIds = {
      10: 'class-10',
      11: 'class-11',
      12: 'class-12',
      ug: 'undergraduate',
      pg: 'postgraduate'
    };
    navigate('/dashboard', {
      state: {
        levelId: levelIds[formData.classGrade],
        subjectIds: formData.selectedSubjects
      }
    });
  };

  return (
    <div className="student-info-page page-shell">
      <header className="page-heading student-page-heading">
        <span className="eyebrow"><FiUser aria-hidden="true" /> Personalize your learning</span>
        <h1>Student Information Portal</h1>
        <p>Tell us about yourself to get personalized study resources</p>
      </header>

      <Card className="info-card">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Details</h2>
            <div className="form-grid">
              <div className="field">
                <label>Full Name</label>
                <InputText
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="field">
                <label>Date of Birth</label>
                <Calendar
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.value})}
                  showIcon
                  required
                />
              </div>

              <div className="field">
                <label>Phone Number</label>
                <InputText
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="+91XXXXXXXXXX"
                />
              </div>

              <div className="field">
                <label>Current Class/Grade</label>
                <Dropdown
                  options={classOptions}
                  value={formData.classGrade}
                  onChange={(e) => setFormData({...formData, classGrade: e.value, selectedSubjects: []})}
                  placeholder="Select your class"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Study Preferences</h2>
            <div className="form-grid">
              <div className="field">
                <label>Primary Study Goal</label>
                <Dropdown
                  options={goalOptions}
                  value={formData.studyGoal}
                  onChange={(e) => setFormData({...formData, studyGoal: e.value})}
                  placeholder="Select your goal"
                  required
                />
              </div>

              <div className="field">
                <label>Number of Subjects</label>
                <InputNumber
                  value={formData.subjectCount}
                  onValueChange={(e) => setFormData({...formData, subjectCount: e.value})}
                  min={1}
                  max={8}
                  showButtons
                  required
                />
              </div>

              <div className="field full-width">
                <label>Select Your Subjects ({formData.subjectCount} max)</label>
                <MultiSelect
                  options={subjectOptions}
                  value={formData.selectedSubjects}
                  onChange={(e) => setFormData({...formData, selectedSubjects: e.value})}
                  placeholder="Choose your subjects"
                  maxSelectedLabels={3}
                  selectionLimit={formData.subjectCount}
                  display="chip"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <Button 
              label="Get Study Materials" 
              type="submit" 
              icon="pi pi-book" 
              className="submit-btn"
            />
          </div>
        </form>
      </Card>

      <div className="info-footer">
        <h3>What happens next?</h3>
        <div className="benefits-grid">
          <div className="benefit-card">
            <i className="pi pi-file-pdf"></i>
            <h4>Personalized Notes</h4>
            <p>We'll provide curated study materials for your selected subjects</p>
          </div>
          <div className="benefit-card">
            <i className="pi pi-calendar"></i>
            <h4>Study Plan</h4>
            <p>Get a customized study schedule based on your goals</p>
          </div>
          <div className="benefit-card">
            <i className="pi pi-users"></i>
            <h4>Community Access</h4>
            <p>Join study groups with peers in similar classes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;