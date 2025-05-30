import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgentProfile from './AgentProfile';
import Header from './Header';
import Homepage from './Homepage';
import Chatbot from './Chatbot';
import EducationResources from './EducationResource'
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/AgentProfile' element={<AgentProfile />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Resources' element={<EducationResources />} />
        <Route path='/Chatbot' element={<Chatbot />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;