import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { homeBanner } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


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
        src={homeBanner}
          alt="background"
          className="h-screen object-cover w-screen opacity-[0.9]"
        />
        <form
          className="p-2 px-5 md:p-12 bg-[rgba(0,0,0,0.7)] absolute top-2 mx-auto  my-36 right-0 left-0 text-white m-4 w-10/12 md:w-3/12"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-center text-xl md:text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 md:p-4 m-2 w-full bg-gray-700 rounded-lg text-sm md:text-lg"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 md:p-4 m-2 w-full bg-gray-700 rounded-lg text-sm md:text-lg"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 md:p-4 m-2 w-full bg-gray-700 rounded-lg text-sm md:text-lg"
            ref={password}
          />
          <p className="text-red-500 m-0 mx-2 md:m-2 py-2 text-sm md:text-lg">{errMessage}</p>
          <button
            className="py-2 md:py-4 m-2 bg-red-700 w-full rounded-lg text-sm md:text-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-2 pt-4 md:pt-0 md:py-4 m-2 cursor-pointer text-xs md:text-lg " onClick={toggleSigninForm}>
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
