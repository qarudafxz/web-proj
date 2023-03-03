import React, { useState } from 'react'
import { GoSettings } from 'react-icons/go'
import Cards from './Restaurants';

const Restaurants = () => {
  const [foodName, setFoodName] = useState(null);

  const getFoodName = () => {
    setFoodName(e.target.value);
  }
  return (
    <div>
      <div>
        <div className="w-full p-8 flex justify-between">
          <h1 className="font-tilt text-3xl text-headColor">Restaurants</h1>
          <form>
            <div className="flex-row relative">
              <input type="text" placeholder="Search by name  🔎" className="text-montserrat rounded-xl p-1 pl-5 text-lg outline-none placeholder-slate-500 bg-slate-400"></input>
              <GoSettings className="absolute top-2 right-2 text-2xl text-gray-800 w-5 h-5 cursor-pointer"></GoSettings>  
            </div>
          </form>
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default Restaurants