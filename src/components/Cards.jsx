import React, { useState } from 'react'

function Cards() {
  const [isActive, setIsActive] = useState("all");

  const navigations = [
    {value: 'all' , text: 'All', key: '1'},
    {value: 'pizza', text: 'Pizza', key: '2'},
    {value: 'burgers', text: 'Burgers', key: '3'},
    {value: 'sushi', text: 'Sushi', key: '4'},
    {value: 'breakfast', text: 'Breakfast', key: '5'},
  ]

  return (
    <div className="w-full pl-6 flex justify-between">
      <div className="w-ful flex gap-5">
        {navigations.map((nav) => {
          return (
            <button className={`text-montserrat font-bold text-sm hover:text-gray-900 px-9 py-2 rounded-2xl ${isActive === nav.value ? "bg-[#ff633a] text-[#fff]" : "text-gray-700"}`} value={nav.value} key={nav.key} onClick={() => setIsActive(nav.value)}>{nav.text}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Cards