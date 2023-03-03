import React from 'react';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import bgPic from './assets/bg.webp';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="mx-5">
        <Navbar />
        <img src={bgPic} className="sm:w-full h-2/6 md:h-1/4 lg:h-1/4 rounded-3xl"></img>
        <Restaurants />
      </div>
    </div>
  )
}

export default App
