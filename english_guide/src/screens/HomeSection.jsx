import React, { useContext, useState } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { pages } from "../constants/index";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCopy } from "react-icons/io";

const HomeSection = ({ textToCopy }) => {
  const { language } = useContext(LanguageContext);
  const [copied, setCopied] = useState(false);

  // const handleClick = () => {
  //   navigator.clipboard.writeText(textToCopy);
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000);
  // };
  const handleClick = () => {
    const el = document.createElement(textToCopy);
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 grid-rows-2 justify-center items-center h-[44rem] w-[70rem] gap-6 mx-auto">
      {pages.map((page, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center w-max my-0 mx-auto"
        >
          <div className="relative">
            {/* White Shadow */}
            {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div> */}
            <div className="card p-0 h-[20rem]">
              <img
                src={page.icon}
                alt={page.title[language]}
                className="rounded-t-lg w-60"
              />
              <div className="p-5 w-60 flex flex-col justify-between h-[11.5rem]">
                <h5 className="mb-2 font-semibold text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {page.title[language]}
                </h5>
                <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">
                  {page.description[language]}
                </p>
                {/* Divider */}
                <hr className="h-px my-4 dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
                <div className="flex flex-row justify-between">
                  <Link
                    to={page.to}
                    className="inline-flex items-center px-2 py-1 text-sm text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 hover:text-white  bg-gradient-to-tl from-slate-800 to-slate-600 hover:border-slate-400 hover:bg-slate-600"
                  >
                    {language === "english" ? "Read more" : "Acceder"}
                  </Link>
                  <button
                    onClick={handleClick}
                    textToCopy={page.ext[language]}
                    className="flex items-center bg-transparent px-2 py-1 border border-solid shadow-none rounded-lg dark:border-slate-700 border-slate-300 bg-clip-border  ease-in-out group text-slate-500 "
                  >
                    <IoMdCopy />
                    <span className="ml-1 text-xs leading-normal">
                      {page.ext[language]}
                    </span>
                  </button>
                </div>
                {/* Copied Alert */}
                {copied && (
                  <span className="fixed bottom-[3.5rem] left-[5.5rem]   bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    {language === "english" ? "copied" : "copiado"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection;
