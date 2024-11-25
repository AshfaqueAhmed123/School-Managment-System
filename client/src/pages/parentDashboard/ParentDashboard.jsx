import React from 'react'
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";


const ParentDashboard = () => {
  return (
    <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
  )
}

export default ParentDashboard