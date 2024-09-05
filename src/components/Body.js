import React, {useEffect} from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';



const Body = () => {
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
      path: "/", 
      element : <Login/>
    }, 
    {
      path: "/browse",
      element : <Browse/>
    }
  ]);


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
      } else {
        dispatch(removeUser());
      }
    }); 
  } , [])


  return (
   <RouterProvider router = {appRouter}/>
  );
}

export default Body