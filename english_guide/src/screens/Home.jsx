import React from "react";
import Header from "../components/Header";
import { Link, Route, Routes } from "react-router-dom";
import HomeSection from "./HomeSection";
import MaintenanceScreen from "./MaintenanceScreen";
import RobberyScreen from "./RobberyScreen";
import FeaturesScreen from "./FeaturesScreen";

const HomeScreen = () => {
  return (
    <>
      <Header />
      {/* Body */}
      <Routes>
        <Route path="/*" element={<HomeSection />} />
        <Route path="/maintenance" element={<MaintenanceScreen />} />
        <Route path="/robbery" element={<RobberyScreen />} />
        <Route path="/features" element={<FeaturesScreen />} />
      </Routes>
    </>
  );
};

export default HomeScreen;
