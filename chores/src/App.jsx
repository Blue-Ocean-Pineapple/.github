import React from 'react';
import Login from './components/login/Login.jsx';
import Home from './components/home/home.jsx';
import Admin from './components/admin/admin.jsx';
import Customer from './components/customer/customer.jsx';
import Map from './components/map/map.jsx';
import Staff from './components/staff/staff.jsx';
import Student from './components/student/student.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}/>
         <Route path="/admin" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Admin />}/>
         <Route path="/customer" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Customer />}/>
         <Route path="/staff" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Staff />}/>
         <Route path="/student" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Student />}/>
         <Route path="/map" element={!isAuth ? <Login setIsAuth={setIsAuth}/> : <Map />} />
      </Routes>
    </Router>
  );
}

export default App;
