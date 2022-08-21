import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Experience_00001 from './components/Zustand/Experience_00001';
import Experience_00002 from './components/Zustand/Experience_00002';
import Experience_00003 from './components/Zustand/Experience_00003';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Experience_00001</Link>
            </li>
            <li>
              <Link to="/experience_00002">Experience_00002</Link>
            </li>
            <li>
              <Link to="/experience_00003">Experience_00003</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Experience_00001 />} />
          <Route path="/experience_00002" element={<Experience_00002 />} />
          <Route path="/experience_00003" element={<Experience_00003 />} />
        </Routes>
      </div>
    </Router>
  );
}
