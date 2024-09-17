import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { netflixAvatar, netflixLogo } from "../utils/constants";
import { gptSearchStatus } from "../utils/gptSlice";
import { supportedLanguages } from "../utils/constants";
import { setLanguage } from "../utils/languageSlice";
import { LanguageConstants } from "../utils/LanguageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptSearchStatusValue = useSelector(
    (store) => store.gptSearch.showGptStatus
  );
  const user = useSelector((store) => store.user);
  const [profile, setProfile] = useState(false);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(gptSearchStatus());
  };

  const handleLanguageChange = () => {
    dispatch(setLanguage(document.getElementById("languageSelector").value));
  };

  const handleProfile = () => {
    setProfile(!profile);
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
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmoounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute top-0 px-8 bg-gradient-to-b from-black z-20 flex justify-between w-[100%] items-center z-10">
      <img src={netflixLogo} alt="site-logo" className="w-44 h-20" />
      <div className="flex items-center">
      {gptSearchStatusValue &&  <select onChange={handleLanguageChange} id="languageSelector">
            {supportedLanguages.map((each) => (
              <option value={each.id} className="text-xs">
                {each.name}
              </option>
            ))}
          </select>
          }
         
          
          <button
            className="text-xs bg-red-800 text-white p-2 mx-4"
            onClick={handleGptSearchClick}
          >
            {gptSearchStatusValue
              ? "Home"
              : "GPT_Search"}
          </button>
    <div >
    <img
          src={netflixAvatar}
          alt="user-icon"
          className="w-10 h-10"
          onClick={handleProfile}
        />
        

        {user && profile && (
          <>
            <div className="flex flex-col p-2 mx-2 false absolute bg-white rounded right-2 top-[60px] sm:top-[77px] p-2 shadow-md animate-openmenu">
            <div class="w-4 h-4 bg-white rotate-45 absolute -top-2 right-2"></div>
              <p className="text-sm text-black pb-2">
                Hi {user.displayName} !
              </p>

              <button
                className="text-xs bg-gray-800 text-white p-2"
                onClick={handleSignout}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
    </div>

      
        </div>
    </div>
  );
};

export default Header;
