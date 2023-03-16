import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LanguageContext } from "./context/LanguageContext";

const Header = () => {
  const { language } = useContext(LanguageContext);

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
      <div>
        <span className="bg-gradient-to-br from-teal-400 to-blue-500"/>
        <span/>
        <span/>
        <Link
          to="/"
          className="bg-black text-white inline-flex px-3 py-3 font-bold text-center uppercase align-middle rounded-lg cursor-pointer leading-normal text-xs transition-all"
        >
          <IoArrowBack fontSize={19.5} className="mr-2" />
          {language === "english" ? "Home" : "Inicio"}
        </Link>
      </div>
    </footer>
  );
};

export default Header;
