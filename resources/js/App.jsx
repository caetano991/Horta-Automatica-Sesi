import './App.css'

import { useState } from 'react';

import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Horta } from './components/Horta';
import { Projects } from './components/Projects';
import { Circuits } from './components/Circuits';
import { Images } from './components/Images';
import { LearnMore } from './components/LearnMore';
import { Footer } from './components/Footer';

function App() {

  const [activeTab, setActiveTab] = useState('landingPage');

  return (
    <div className="horta-app">
      <Header
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />

      {activeTab === "landingPage" &&(
        <LandingPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "login" && (
        <Login
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "register" && (
        <Register
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "horta" && (
        <Horta
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "projects" && (
        <Projects
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "circuits" && (
        <Circuits
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "images" && (
        <Images
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      {activeTab === "learnMore" && (
        <LearnMore
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        />
      )}

      <Footer/>
    </div>
  )
}

export default App
