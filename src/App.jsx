import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/workexperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';  
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <WorkExperience />
                <Projects />
                <ContactMe />
              </>
            }
          />

          <Route path="/Hero" element={<Hero />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<WorkExperience />} />
          <Route
            path="/projects/:platform/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/Contact" element={<ContactMe />} />
          <Route
            path="*"
            element={
              <>
                <Hero />
                <Skills />
                <WorkExperience />
                <Projects />
                <ContactMe />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
