import React, { useCallback, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validateMsg, setValidateMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = useCallback(() => {
    setIsSignInForm((prev) => !prev);
  }, []);

  const handleUserName = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  // Currently createUserWithEmailAndPassword and signInWithEmailAndPassword APIs does not
  // have user name details in it. So to show the user name we use updateProfile API

  const handleBtnClick = useCallback(() => {
    const validateMessage = checkValidation(formData.email, formData.password);
    setValidateMsg(validateMessage);

    if (validateMessage) return; // if email and password is invalid, return

    // if email and password is valid, create a new user
    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: formData.username,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            // Bug : When the user signs up, displayName and photoURL is null.Other details are updated in onAuthStateChanged API
            // so we need to dispatch addUser action again in updateProfile API
            .then(() => {
              // Profile updated!
              // Using auth because it has updated user data
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          return user;
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;
          console.log("errorCode", errorCode + " " + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signed in user", user);
          navigate("/browse");
          return user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode", errorCode + " " + errorMessage);
        });
    }
  }, [
    dispatch,
    formData.email,
    formData.password,
    formData.username,
    isSignInForm,
    navigate,
  ]);

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-20 bg-black bg-opacity-80 w-4/12 mt-32 ml-[500px]"
      >
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
        <button
          className="p-2 m-2  w-full bg-red-700 rounded-lg"
          onClick={handleBtnClick}
        >
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
