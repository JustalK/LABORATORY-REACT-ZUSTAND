import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
}
