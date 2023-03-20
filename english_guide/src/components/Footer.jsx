import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const [gradientColors, setGradientColors] = useState(["#00dfd8", "#007cf0"]); // Definir los colores iniciales del gradiente

  useEffect(() => {
    // Cambiar los colores del gradiente cada 5 segundos
    const interval = setInterval(() => {
      setGradientColors(getRandomColors());
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const getRandomColors = () => {
    // Generar dos colores aleatorios para el gradiente
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const color2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return [color1, color2];
  };

  return (
    <footer className="py-3.5 px-5 md:flex md:items-center md:justify-between dark:bg-black">
      {/* Return Back Button */}
      <button
        className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-[#ffffff73]  bg-black text-white hover:bg-white hover:text-black hover:border-black border inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all  "
        onClick={() => window.history.back()}
      >
        <IoArrowBack fontSize={19.5} className="mr-2" />
        {language === "english" ? "Back" : "Volver"}
      </button>
      <div
        className="search-container"
        style={{
          background: `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
      >
        <Link
          to="/"
          className="search-input dark:bg-black bg-white dark:hover:bg-transparent hover:bg-transparent dark:text-white dark:hover:text-white text-black hover:text-white inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all"
        >
          <IoArrowBack fontSize={19.5} className="mr-2" />
          {language === "english" ? "Home" : "Inicio"}
        </Link>
      </div>
    </footer>
  );
};

export default Header;
