import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import { useAuthContext } from './hooks/useAuthContext';

import { Home, Tutorials, Resources, Events, EconsCalendar, FAQS, Chart, Landing } from './container';
import { useLogout } from './hooks/useLogout';

function App() {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
    }, 3 * 24 * 60 * 60 * 1000);  // 3 days then logout
    return () => clearTimeout(timer);
  }, [logout]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={user ? <Home /> : <Landing />} />
        <Route path='/chart' element={user ? <Chart /> : <Landing />} />
        <Route path='/tutorials' element={user ? <Tutorials /> : <Landing />} />
        <Route path='/resources' element={user ? <Resources /> : <Landing />} />
        <Route path='/events' element={user ? <Events /> : <Landing />} />
        <Route path='/econs-calendar' element={user ? <EconsCalendar /> : <Landing />} />
        <Route path='/faqs' element={user ? <FAQS /> : <Landing />} />
        <Route path='/auth/register' element={!user ? <Landing /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
