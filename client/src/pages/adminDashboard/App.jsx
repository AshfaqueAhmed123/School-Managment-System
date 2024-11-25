import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Teachers from "./components/AllTeachers/Teachers";
import Students from "./components/AllStudents/Students";
import Classes from "./components/AllClasses/Classes";
import NonAcademicStaff from "./components/Non-Academic-Staff/NonAcademicStaff";
import Fee from "./components/TutionFee/Fee";
import  Settings from "./components/settings/Settings";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      {/* <Router> */}
        <switch>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/students" element={<Students />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/NonAcademicStaff" element={<NonAcademicStaff />} />
            <Route path="/fee" element={<Fee/>} />
            <Route path="/settings" element={<Settings/>}/> 
            <Route path="*" element={<PageNotFound/>} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      {/* </Router> */}
      </switch>
    </>
  );
}

export default App;
