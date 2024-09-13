import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixAvatar, netflixLogo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  const handleSignout = () => {
    signOut(auth)
     .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe when component unmoounts
    return ()=> {
      unsubscribe();
    }
  }, []);


  return (
    <div className="absolute top-0 px-8 bg-gradient-to-b from-black z-20 flex justify-between w-[100%] items-center z-10">
      <img
        src={netflixLogo}
        alt="site-logo"
        className="w-44 h-20"
      />
      <div className="flex items-center">
        <img
          src={netflixAvatar}
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
