import React, { useCallback, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = useCallback(() => {
    setIsSignInForm((prev) => !prev);
  }, []);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full"
          src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png"
          alt="bg-image"
        />
      </div>
      <form className="absolute p-20 bg-black bg-opacity-80 w-4/12 mt-32 ml-[500px]">
        <h2 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
        />
        <button className="p-2 m-2  w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "Are you new to Netflix? Sign up now"
            : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
