import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  //   console.log(user)
  //   // user or admin page route
  //   if(user === 'userAdmin') navigate('/login');
  // }, []);

  return (
    <Routes>
      <Route path="/*" element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
