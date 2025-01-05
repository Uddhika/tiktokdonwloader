import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './ui/MainPage';
import AboutUs from './ui/aboutus/AboutUs';
import Terms from './ui/termsandcondition/Terms';
import Disclaimer from './ui/disclaimer/Disclaimer';
import Privacy from './ui/privacypolicy/Privacy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
