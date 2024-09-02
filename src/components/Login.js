import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true); 

  const toggleSigninForm = ()=> {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
          className=""
        />
        <form className="p-12 bg-[rgba(0,0,0,0.7)] absolute top-2 mx-auto w-3/12 my-36 right-0 left-0 text-white m-4">
          <h2 className="text-center text-3xl font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up" }</h2>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 m-2 w-full bg-gray-700 rounded-lg" />}
          <input type="text" placeholder="Email Address" className="p-4 m-2 w-full bg-gray-700 rounded-lg" />
          <input type="password" placeholder="Password" className="p-4 m-2 w-full bg-gray-700 rounded-lg" />
          <button className="py-4 m-2 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up" }</button>
          <p className="py-4 m-2 cursor-pointer" onClick={toggleSigninForm}>{isSignInForm ? "Are you new to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
