// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCoiaaV7FezEsJXlVri5NkE892BC7MAw",
  authDomain: "netflixgpt-39666.firebaseapp.com",
  projectId: "netflixgpt-39666",
  storageBucket: "netflixgpt-39666.appspot.com",
  messagingSenderId: "661043510991",
  appId: "1:661043510991:web:02d5ab3c7086868fdec1ba",
  measurementId: "G-EDGNBMTMQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();