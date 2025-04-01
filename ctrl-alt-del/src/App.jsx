import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will always be visible */}
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
    </Router>
  );
}

export default App;
