import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './tailwind.css';
import './index.css';

import { Home, Tutorials, Resources, Events, EconsCalendar, FAQS, Chart, Landing } from './container';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/events' element={<Events />} />
        <Route path='/econs-calendar' element={<EconsCalendar />} />
        <Route path='/faqs' element={<FAQS />} />
      </Routes>
    </Router>
  );
}

export default App;
