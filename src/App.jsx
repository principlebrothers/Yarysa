import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Login';
import Error from './pages/Error';
// import Blogs from './components/blogs/Blogs';
import BlogPage from './pages/BlogPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboard-hospital" element={<LoginPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
