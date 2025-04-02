import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MoodTracker from './pages/Mood_Tracker';
import Journal from './pages/Journal';
import Blogs from './pages/Blogs';
import Analysis from './pages/Analysis';
import Rewards from './pages/Rewards';
import { useLayoutEffect } from 'react';
import Footer from './components/Footer';

function AppContent() {
  const location = useLocation();

  // Page-specific background colors
  const pageBackgrounds = {
    "/": "#ffffff",
    "/about": "#EDF6F9",
    "/contact": "#F1DDD2",
    "/mood-tracker": "#83C5BE ",
    "/journal": "#FFF5E1",
    "/blogs": "#FAF3E0",
    "/analysis": "#EAE2B7",
    "/rewards": "#F7CAC9",
  };

  useLayoutEffect(() => {
    document.body.style.backgroundColor = pageBackgrounds[location.pathname] || "white";
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


