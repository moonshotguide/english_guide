import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logosp from "../assets/images/sp-img.jpg";
import logoen from "../assets/images/us-img.jpg";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const menuClassName = isOpen ? "block " : "hidden";
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative">
      <button onClick={handleClick} type="button" className="hidden md:block">
        <img src={language === 'en' ? logoen : logosp} alt="language" />
        {language === 'en' ? 'English' : 'Español'}
      </button>
      <div className={menuClassName}>
        <div className="border border-slate-400 dark:border-[#9c704c5b] z-10 w-[14rem] bg-l_gold_default rounded divide-y divide-slate-400 shadow dark:bg-gh-bg-default dark:divide-[#9c704c5b] absolute mt-1 right-0 left-auto top-auto">
          {/* List Data */}
          <ul
            className="py-1 text-sm text-gray-700 dark:text-slate-400"
          >
            <li>
              <button
                onClick={setLanguage}
                className="text-sm font-normal block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                English
              </button>
            </li>
            <li>
              <button
                onClick={setLanguage}
                className="text-sm font-normal block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gh-bg-primary dark:hover:text-white"
              >
                Español
              </button>
            </li>
          </ul>
          <div className="py-1 cursor-pointer">

          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;