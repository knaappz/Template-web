import './Website.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';
import Portfolio from '../Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Website() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
