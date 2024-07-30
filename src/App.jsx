import './App.css'
import Website from './components/Website/Website'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Helsinki from './components/ProjectPages/Helsinki'
import Ziola from './components/ProjectPages/Ziola';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Website/>} />
          <Route path="/helsinki" element={<Helsinki />} />
          <Route path="/ziola" element={<Ziola />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
