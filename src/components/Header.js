import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user , " is the user")
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute top-0 px-8 bg-gradient-to-b from-black z-10 flex justify-between w-[100%] items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="site-logo"
        className="w-44 h-20"
      />
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user-icon"
          className="w-10 h-10"
        />
        {user && (
          <div className="flex flex-col p-2 mx-2">
            <p className="text-sm text-white pb-2">Hey {user.displayName} !</p>

            <button
              className="text-xs bg-gray-800 text-white p-2"
              onClick={handleSignout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
