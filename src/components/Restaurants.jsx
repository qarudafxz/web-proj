import React, { useState } from 'react'
import { GoSettings } from 'react-icons/go'

// import { fetchFood } from '../api/fetchFood';


const Restaurants = () => {
  const [foodName, setFoodName] = useState(null);

  const getFoodName = e => {
    e.preventDefault();
    setFoodName(e.target.querySelector('#food-name').value);
    
    //check if foodname is null
    if(!foodName) {
      setFoodName(null);
      return;
    }
  }

  // useEffect(() => {
  //   fetchFood(foodName);
  // },[foodName]);

  // console.log(foodName);
  
  return (
    <div>
      <div>
        <div className="w-full p-8 flex justify-between">
          <h1 className="font-tilt text-3xl text-headColor">Restaurants</h1>
          <form onSubmit={getFoodName}>
            <div className="flex-row relative gap-5">
              <input type="text" placeholder="Search by name  🔎" className="text-montserrat rounded-xl p-1 pl-5 pr-16 text-lg outline-none bg-[#f7f6fb]" id="food-name"></input>
              <GoSettings className="absolute top-2 right-2 text-2xl text-gray-800 w-5 h-5 cursor-pointer"></GoSettings>  
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Restaurants