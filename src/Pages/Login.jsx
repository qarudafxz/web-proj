import React from 'react'

import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

import { Link } from 'react-router-dom';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function Login() {
  return (
    <div>
      <div className="p-3 flex justify-between gap-10 shadow-md">
        <h1 className="font-tilt text-primary text-2xl cursor-pointer"><Link to="/">GaruFoods</Link></h1>
      </div>
      <div className="p-5 shadow-xl w-1/5 relative top-28 left-96">
        <h1 className="font-bold text-2xl tex-[#ff633a]">Welcome!</h1>
        <p className="text-monserrat text-sm mt-2 mb-6">Sign up or log in to continue</p>
        <div className="grid grid-flow-row gap-2.5">
          <button className="bg-[#000000] px-6 pb-4 rounded-lg text-center text-sm text-[#fff] font-semibold"><AiFillApple className="text-[#ffffff] relative top-5 text-lg"/>Continue with Apple</button>
          <button className="bg-[#fff] px-6 pb-4 rounded-lg text-center text-sm text-[#767676] font-semibold justify-center place-items-center shadow-lg"><FcGoogle className="relative top-5 text-lg"/>Continue with Google</button>
          <button className="bg-[#1877f2] px-6 pb-4 rounded-lg text-center text-sm text-[#fff] font-semibold justify-center place-items-center"><BsFacebook className="text-[#fff] relative top-5 text-lg"/>Continue with Facebook</button>
          <button className="bg-[#3d59ba] px-6 py-4 rounded-lg text-center text-sm text-[#fff] font-semibold justify-center place-items-center">Log in</button>
          <button className="border-2 border-[#3d59ba] px-6 py-4 rounded-lg text-center text-sm text-[#3d59ba] font-semibold justify-center place-items-center">Sign up</button>
        </div>
        <p className="text-sm my-5 text-[#767676]">By signing up, you agree to our <span className="text-[#3d59ba]">Terms and Conditions</span> and <span className="text-[#3d59ba]">Privacy Policy.</span></p>
      </div>
    </div>
  )
}

export default Login