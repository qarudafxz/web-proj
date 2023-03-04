import React from 'react';

import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Cards from './components/Cards';

import bgPic from './assets/bg.webp';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="mx-5">
        <Navbar />
        <img src={bgPic} className="sm:w-full h-2/6 md:h-1/4 lg:h-1/3 rounded-3xl"></img>
        <Restaurants />
        <Cards />
      </div>
    </div>
  )
}

export default App
