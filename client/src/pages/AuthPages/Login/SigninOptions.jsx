import React from 'react'
import {Router,Routes,Route} from "react-router-dom"
import StudentSignInPage from './StudentSignInPage'
import Options from './Options'
import TeacherSignInPage from './TeacherSignInPage'
import ParentSignInPage from './ParentSignInPage'
import AdminSignInPage from './AdminSignInPage'

const SigninOptions = () => {
  return (
    <>
    <switch>
      <Routes>
        <Route path='/' element={<Options/>}></Route>
        <Route path='/student' element={<StudentSignInPage/>} ></Route>
        <Route path='/teacher' element={<TeacherSignInPage/>}></Route>
        <Route path='/parent' element={<ParentSignInPage/>}></Route>
        <Route path='/admin' element={<AdminSignInPage/>}></Route>
        <Route path='*' element={"Page not found"}></Route>
      </Routes>
    </switch>
    </>
  )
}

export default SigninOptions