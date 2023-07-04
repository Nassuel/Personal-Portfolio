import './App.css'
import Header from './components/header'
import Landing from './components/landing'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { NoMatch } from './components/NoMatch'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Landing />}></Route>
          <Route path="about" element={<Landing />}></Route>
          <Route path="resume" element={<Landing />}></Route>
          <Route path="portfolio" element={<Landing />}></Route>
          <Route path="contact" element={<Landing />}></Route>
          <Route path="*" element={<NoMatch />} /> {/* Redirects back to home */}
        </Route>
      </Routes>
    </Router>
  )
}

function Layout() {
  return (
    <div className="relative min-h-screen w-screen grid grid-cols-1">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-0 left-20 -bottom-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="relative opacity-0">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App;
