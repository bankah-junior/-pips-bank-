import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import './index.css';

import { Home, Mentorship, Tutorials, Resources, Events, Blogs, FAQS } from './container';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Landing />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/mentorship' element={<Mentorship />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/faqs' element={<FAQS />} />
        <Route path='/faqs' element={<FAQS />} />
      </Routes>
    </Router>
  );
}

export default App;
