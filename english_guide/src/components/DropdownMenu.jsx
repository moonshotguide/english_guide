import React, { useState, useContext } from "react";
import logosp from "../assets/images/es-img.svg";
import logoen from "../assets/images/uk-img.svg";
import { LanguageContext } from "./context/LanguageContext";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseOver = () => {
    setIsOpen(true);
  };
  const handleMouseOut = () => {
    setIsOpen(false);
  };

  const changeLanguageHandler = (language) => {
    changeLanguage(language);
  };

  const menuClassName = isOpen ? "flex " : "hidden";
  // const logout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  return (
    <div className="relative text-gray-700 dark:text-gray-300">
      <button
        onClick={handleClick}
        type="button"
        className="hidden md:flex w-max items-center justify-between gap-x-1 mr-3"
      >
        <img
          src={language === "english" ? logoen : logosp}
          className="w-7"
          alt="language"
        />
      </button>
      {/* <div className="absolute left-0 w-[99px] translate-x-0"
        >
          <svg
            fill="none"
            height="46"
            viewBox="0 0 158 46"
            width="158"
            className="top-[-10px] z-20 absolute w-[32px] h-[32px] rotate-180"
          >
            <path
              d="M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z"
              fill="var(--arrow-bg)"
            ></path>
            <path
              d="M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z"
              fill="var(--menu-border-color)"
            ></path>
          </svg> 
        </div>*/}
      <div
        className={`${menuClassName} Toogle dropdownmenu dropmenu absolute z-10 top-full mt-3 -left-1/4 -translate-x-24 space-y-1 rounded-lg divide-y divide-slate-400 p-1 text-sm font-medium `}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* List Data */}
        <ul className="text-sm text-gray-700 dark:text-slate-400">
          <li>
            <button
              onClick={() => changeLanguageHandler("english")}
              className="w-full text-sm font-normal block py-2 px-2 rounded-lg hover:bg-[#f5f5f5] dark:hover:bg-[#ffffff12] dark:hover:text-white"
            >
              Language: English
            </button>
          </li>
          <li>
            <button
              onClick={() => changeLanguageHandler("español")}
              className="w-full text-sm font-normal block py-2 px-2 rounded-lg hover:bg-[#f5f5f5] dark:hover:bg-[#ffffff12] dark:hover:text-white"
            >
              Idioma: Español
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
