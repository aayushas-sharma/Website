import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactUs } from './contact-us';
import { Footer } from './footer';
import { Header } from './header';
import { Home } from './home';
import { Infrastructure } from './infrastructure';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;



