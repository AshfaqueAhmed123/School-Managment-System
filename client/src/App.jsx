import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import HomePage from "./pages/homepage/HomePage";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/teacherDashboard/TeacherDashboard";
import ParentDashboard from "./pages/parentDashboard/ParentDashboard";
import SigninOptions from "./pages/AuthPages/Login/SigninOptions";
import RegisterOptions from "./pages/AuthPages/SignUp/RegisterOptions";
import Memories from "./components/custom/homePage/Memories/Memories";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/memories" element={<Memories/>} />
            <Route path="/admin/*" element={<AdminDashboard/>} />
            <Route path="/student/*" element={<StudentDashboard/>} />
            <Route path="/teacher/*" element={<TeacherDashboard/>} />
            <Route path="/parent/*" element={<ParentDashboard/>} />
            <Route path="/login/*" element={<SigninOptions/>} />
            <Route path="/register/*" element={<RegisterOptions/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
