import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import HomePage from "./pages/homepage/HomePage";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/admin/*" element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
