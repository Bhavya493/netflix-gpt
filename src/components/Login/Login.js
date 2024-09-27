import React, { useCallback, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [validateMsg, setValidateMsg] = useState('')

  const toggleSignIn = useCallback(() => {
    setIsSignInForm((prev) => !prev);
  }, []);

  const handleUserName = useCallback((e) => {
    const {name, value} = e.target
    setFormData((prev) => {
        return {
            ...prev,
            [name]: value
        }
    })
  }, []);

  console.log('formData', formData);
//   const handleEmail = useCallback((e) => {}, [])
//   const handlePassword = useCallback((e) => {}, [])
  

  const handleBtnClick = useCallback(() => {
    const validateMessage = checkValidation(formData.email, formData.password);
    setValidateMsg(validateMessage)
  }, [formData.email, formData.password]);

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
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-20 bg-black bg-opacity-80 w-4/12 mt-32 ml-[500px]">
        <h2 className="font-bold text-3xl text-white py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={formData.username}
            className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
            onChange={(e) => handleUserName(e)}
          />
        )}
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email Address"
          className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
          onChange={(e) => handleUserName(e)}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          className="text-white p-2 m-2 w-full bg-gray-600 bg-opacity-30"
          onChange={(e) => handleUserName(e)}
        />
        <p className="text-red-600 font-bold p-2">{validateMsg}</p>
        <button className="p-2 m-2  w-full bg-red-700 rounded-lg" onClick={handleBtnClick}>
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
