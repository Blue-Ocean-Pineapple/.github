import React from 'react';
<<<<<<< HEAD
// import Login from './components/login/login.jsx';
// import Register from './components/register/Register.jsx';
// import Home from './components/home/home.jsx';
// import Profile from './components/profile/Profile.jsx';
=======
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Home from './components/home/Home.jsx';
import Profile from './components/profile/Profile.jsx';
import Admin from './components/admin/admin.jsx'
>>>>>>> main
// import Admin from './components/admin/admin.jsx';
// import Customer from './components/customer/customer.jsx';
import Map from './components/map/map.jsx';
// import Staff from './components/staff/staff.jsx';
// import Student from './components/student/student.jsx';
// import Navbar from './components/home/Navbar.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import AuthContextProvider from './contexts/AuthContext';

function App(props) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
<<<<<<< HEAD
    // <div>
    //   <Map/>
    // </div>
    // <AuthContextProvider>
    // <Router>
    //   <Routes>
    //      <Route exact path="/" element={<Home />} />
    //      <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}/>
    //      <Route path="/register" element={!isAuth ? <Register setIsAuth={setIsAuth} /> : <Home />}/>
    //      <Route path="/profile" element={!isAuth ? <Profile /> : <Home />}/>
    //      {/* <Route path="/admin" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Admin />}/>
    //      <Route path="/customer" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Customer />}/>
    //      <Route path="/staff" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Staff />}/>
    //      <Route path="/student" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Student />}/>
    //      <Route path="/map" element={!isAuth ? <Login setIsAuth={setIsAuth}/> : <Map />} /> */}
    //   </Routes>
    //  </Router>
    // </AuthContextProvider>
=======
    <AuthContextProvider>
     <Router>
      <Routes>
         <Route exact path="/" element={<Home setIsAuth={setIsAuth}/>} />
         <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}/>
         <Route path="/register" element={!isAuth ? <Register setIsAuth={setIsAuth} /> : <Home />}/>
         <Route path="/profile" element={!isAuth ? <Profile /> : <Home />}/>
          <Route path="/admin" element={!isAuth ? <Admin setIsAuth={setIsAuth} /> : <Admin />}/>
         {/*<Route path="/customer" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Customer />}/>
         <Route path="/staff" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Staff />}/>
         <Route path="/student" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Student />}/>
         <Route path="/map" element={!isAuth ? <Login setIsAuth={setIsAuth}/> : <Map />} /> */}
           {/* <Customer /> */}
      </Routes>
     </Router>
    </AuthContextProvider>

>>>>>>> main
  );
}

export default App;
