import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message;
    // validate the form data
    if (isSignInForm) {
      message = checkValidData(email.current.value, password.current.value);
    } else {
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }

    if (message) {
      setErrMessage(message);
      return;
    }

    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + errorMessage);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="background"
          className=""
        />
        <form
          className="p-12 bg-[rgba(0,0,0,0.7)] absolute top-2 mx-auto w-3/12 my-36 right-0 left-0 text-white m-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-center text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 w-full bg-gray-700 rounded-lg"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 m-2 w-full bg-gray-700 rounded-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 m-2 w-full bg-gray-700 rounded-lg"
            ref={password}
          />
          <p className="text-red-500 m-2 py-2 tetx-lg">{errMessage}</p>
          <button
            className="py-4 m-2 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 m-2 cursor-pointer" onClick={toggleSigninForm}>
            {isSignInForm
              ? "Are you new to Netflix? Sign Up Now"
              : "Already a user? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
