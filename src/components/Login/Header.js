import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useCallback, useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../store/userSlice";
import { netFlixImg } from "../../utils/constant";
import { toggleGPTSearchView } from "../../store/gptSearchSlice";
import { handleTranslation } from "../../store/languageSlice";
import { lang } from "../../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, language} = useSelector((state) => state);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }

      // unsubscribe when the component unmounts (don't call useEffect when component unmounts)
      return () => unsubscribe();
    });
  }, [dispatch, navigate]);

  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }, []);

  const handleGPTSearchClick = useCallback(() => {
    dispatch(toggleGPTSearchView());
  }, [dispatch]);

  const handleLanguage = useCallback((event) => {
    dispatch(handleTranslation(event.target.value))
  }, [dispatch])

  return (
    <div className="flex justify-between bg-black">
      <div className="bg-gradient-to-b from-black z-10">
        <img className="w-[110px] h-[50px]" src={netFlixImg} alt="logo" />
      </div>
      {user && (
        <div className="flex">
          <div className="p-2">
            <select className="p-2 border border-gray-400" onChange={(e) => handleLanguage(e)}>
              <option value="en">English</option>
              <option value="kn">Kannada</option>
            </select>
          </div>
          <button className="text-white p-4" onClick={handleGPTSearchClick}>
            {lang[language.ln].gptSearch}
          </button>
          <button
            className="
             text-white p-4 w-[110px] h-[50px] text-center"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
