import React from "react";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Home from "./components/home/Home.jsx";
import Profile from "./components/profile/Profile.jsx";
import Admin from "./components/admin/Admin.jsx";
import Customer from "./components/customer/Customer.jsx";
import Map from "./components/map/Map.jsx";
import Staff from "./components/staff/Staff.jsx";
import Student from "./components/student/Student.jsx";
import { Navbar } from './components/home/Navbar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthContextProvider from "./contexts/AuthContext";

function App(props) {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  console.log("is Auth console", isAuth);
  const roles = ['Student','Client', 'Staff', 'Admin'];
  const [role, setRole] = useState(['Student','Client', 'Staff', 'Admin']);
  console.log('role in App :', role);

  return (
    <AuthContextProvider>
      <Router>
      <Navbar setIsAuth={setIsAuth} role={role}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/student" element={<Student />} />
          <Route
            path="/login"
            element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Home />}
          />
          <Route
            path="/register"
            element={!isAuth ? <Register setIsAuth={setIsAuth} /> : <Home />}
          />
          <Route path="/profile" element={!isAuth ? <Profile role={role} setRole={setRole} roles={roles}/> : <Home />} />
          <Route path="/admin" element={role === "Admin" ?  <Admin /> : <Home />}/>
          <Route path="/customer" element={role === "Client" ?  <Customer />  : <Home />}/>
          <Route path="/staff" element={role === "Staff" ?  <Staff /> : <Home />}/>
          <Route path="/student" element={role === "Student" ?  <Student /> : <Home /> }/>
          <Route path="/map" element={ <Map />} />
        </Routes>
      </Router>
      {/* <Admin /> */}
      {/* <Customer />
     <Student />
    {/* <Map /> */}
    {/* <Staff /> */}
    </AuthContextProvider>

  );
}

export default App;
