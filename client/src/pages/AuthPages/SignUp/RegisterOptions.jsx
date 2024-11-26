import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Options from "./Options";


import AdminRegisterPage from "./AdminRegisterPage";
import TeacherRegisterPage from "./TeacherRegisterPage";
import ParentRegisterPage from "./ParentRegisterPage";
import StudentRegisterPage from "./StudentRegisterPage";


const RegisterOptions = () => {
  return (
    <>
      <switch>
        <Routes>
          <Route path="/" element={<Options />}></Route>
          <Route path="/student" element={<StudentRegisterPage/>} ></Route>
          <Route path="/teacher" element={<TeacherRegisterPage/>} ></Route>
          <Route path="/parent" element={<ParentRegisterPage/>} ></Route>
          <Route path="/admin" element={<AdminRegisterPage/>} ></Route>
          <Route path="*"></Route>
        </Routes>
      </switch>
    </>
  );
};

export default RegisterOptions;
