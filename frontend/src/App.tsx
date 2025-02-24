import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Auth from './pages/Auth';

// Context
import { useTheme } from './contexts/Theme/ThemeContext';

import './App.css'

function App() { 
  const {theme} = useTheme();
  return (
    <div className={`min-h-screen min-w-screen flex flex-col ${(theme==="light")?
          "bg-#F9FAFB"
          : "bg-black"}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/authentication' element={<Auth />} />
          <Route path='*' element={<Navigate to="/authentication" />} />
        </Routes>
      </BrowserRouter>
    </div>
)
}

export default App
