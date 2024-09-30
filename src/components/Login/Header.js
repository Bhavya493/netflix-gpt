import { signOut } from "firebase/auth";
import React, { useCallback } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log('user', user);

  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }, [navigate]);
  return (
    <div className="flex justify-between bg-black bg-opacity-90">
      <div className="bg-gradient-to-b from-black z-10">
        <img
          className="w-[110px] h-[50px]"
          src="https://wallpapercat.com/w/full/c/7/d/115480-2560x1440-desktop-hd-netflix-wallpaper-photo.jpg"
          alt="logo"
        />
      </div>
      {user && (
        <button
          className="
             text-white p-4 w-[110px] h-[50px] text-center"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
