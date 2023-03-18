import React, { useState } from 'react'
import STATIC_FOOD_LIST from '../lib/staticFoodList';

import { AiFillHeart } from 'react-icons/ai'; 

function FoodGrid() {  
  const [changeColor, setChangeColor] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-8 mt-7 cursor-pointer shadow-md p-7">
      {
        STATIC_FOOD_LIST.map((food) => {
          return (
            <div key={food.key}>
              <img src={food.url} alt={food.title} className="rounded-md w-full h-auto"/>
              <div className="flex justify-between p-5 shadow-xl">
                <h1 className="font-tilt text-xl text-[#2b2b45]">{food.title}</h1>
                <AiFillHeart className={changeColor && `text-[#FFC700]`} onClick={() => setChangeColor(!changeColor)}/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FoodGrid