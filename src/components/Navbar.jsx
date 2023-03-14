import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Signin from '../Pages/Signup.jsx';

const Navbar = () => {
  const addresses  = [
    { value: 'butuan', label: 'Butuan City'},
    { value: 'cagayan', label: 'Cagayan De Oro City'},
    { value: 'cebu', label: 'Cebu City'},
  ]

  return (
    <div className="w-full p-6 flex justify-between">
        <div className="flex justify-between gap-10">
          <h1 className="font-tilt text-primary text-2xl cursor-pointer"><Link to="/">GaruFoods</Link></h1>
          <Select options={addresses} className="w-40 h-auto rounded-full" placeholder="Select City"></Select>
        </div>
        <div>
          <button className="bg-primary text-white font-montserrat py-2 px-4 rounded"><Link to="/login">Sign In</Link></button>
          <button className="bg-primary text-white font-montserrat py-2 px-4 rounded bg-primButton rounded-3xl text-btnTextColor dark:md:hover:bg-cyan-700">Register</button>
        </div>
    </div>
  )
}

export default Navbar;