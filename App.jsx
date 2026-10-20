import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Dashboard from './Users/Dashboard';
import DiscussionForum from './Users/DiscussionForum';
import GetStarted from './Users/GetStarted';
import LearnMore from './Users/LearnMore';
import StudentInfo from './Users/StudentInfo';
import DailyGoals from './Users/DailyGoals';
import QuizZone from './Users/QuizZone';
import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => (
  <PrimeReactProvider>
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseSlug" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/forum" element={<DiscussionForum />} />
            <Route path="/daily-goals" element={<DailyGoals />} />
            <Route path="/quiz-zone" element={<QuizZone />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/DiscussionForum" element={<Navigate to="/forum" replace />} />
            <Route path="/GetStarted" element={<Navigate to="/get-started" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </PrimeReactProvider>
);

export default App;
