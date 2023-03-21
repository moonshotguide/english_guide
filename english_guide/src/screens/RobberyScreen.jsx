import React, { useContext } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const RobberyScreen = () => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {/* fixed left banner */}
      <div className="flex flex-col items-stretch w-[250px]">
        {/* Buttons */}
        <div className="w-full flex flex-row items-center cursor-pointer divide-y divide-[#00000030] dark:divide-[#333]">
          <MdArrowForwardIos />
          <div className="w-full flex flex-row justify-start">
            <h4 className="ml-3 mr-0 my-3">
              {language === "english"
                ? "WITH SIGNALS, NO DAMAGE"
                : "CON SEÑALES, SIN DAÑOS"}
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-row items-center cursor-pointer divide-y divide-[#00000030] dark:divide-[#333]">
          <MdArrowForwardIos />
          <div className="w-full flex flex-row justify-start">
            <h4 className="ml-3 mr-0 my-3">
              {language === "english"
                ? "WITH SIGNALS, DAMAGE"
                : "CON SEÑALES, CON DAÑOS"}
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-row items-center cursor-pointer divide-y divide-[#00000030] dark:divide-[#333]">
          <MdArrowForwardIos />
          <div className="w-full flex flex-row justify-start">
            <h4 className="ml-3 mr-0 my-3">
              {language === "english"
                ? "NO SIGNALS, DAMAGE"
                : "SIN SEÑALES, CON DAÑOS"}
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-row items-center cursor-pointer divide-y divide-[#00000030] dark:divide-[#333]">
          <MdArrowForwardIos />
          <div className="w-full flex flex-row justify-start">
            <h4 className="ml-3 mr-0 my-3">
              {language === "english"
                ? "NO SIGNALS, NO DAMAGE"
                : "SIN SEÑALES, SIN DAÑOS"}
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/* top div */}
        <div className="inner_card bg-[#f6f8fa] dark:border-[#333] py-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center">
          {/* Title */}
          <span className="text-4xl font-extrabold text-black dark:text-white">
            {language === "english" ? "Robbery" : "Robos"}
          </span>
          {/* Subtitle */}
          <p className="mt-2 text-sm font-extralight text-black dark:text-white">
            {language === "english" ? "Procedures" : "Procedimientos"}
          </p>
          <h2 className="text-sm text-black dark:text-white">
            {language === "english"
              ? "What to say and what NOT to say?"
              : "Que decir y que NO decir?"}
          </h2>
        </div>
        {/* botton div */}
        <div className="inner_card dark:bg-black dark:border-[#333] py-2 rounded-b-lg flex flex-col justify-center items-center">
          {/* title form wrapper */}
          <div className="w-full flex flex-row items-center justify-around mt-2.5">
            <div className="flex flex-row items-center justify-center">
              <BsCheckCircleFill className="text-2xl text-green-600 dark:text-green-500" />
              <h2 className="ml-2 text-md text-black dark:text-white">
                What to say
              </h2>
            </div>
            <div className="flex flex-row items-center justify-center">
              <BsFillXCircleFill className="text-2xl text-red-600 dark:text-red-400" />
              <h2 className="ml-2 text-md text-black dark:text-white">
                What to NOT say
              </h2>
            </div>
          </div>
          {/* div form wrapper */}
          <div className="mt-2 flex flex-row items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            {/* What to say wrapper */}
            <div className="h-full flex flex-col items-center justify-center basis-1/2 h-48">
              <ul className="flex flex-col gap-1 justify-between items-center">
                <li>
                  {language === "english"
                    ? "Intrussion signals"
                    : "Señales de intrusion"}
                </li>
                <li>
                  {language === "english" ? "Tamper Signals" : "Señales tamper"}
                </li>
                <li>
                  {language === "english"
                    ? "Jamming Signals"
                    : "Señales inhibición"}
                </li>
                <li>
                  {language === "english"
                    ? "Power cuts"
                    : "Cortes de corriente"}
                </li>
                <li>
                  {language === "english"
                    ? "Central Low/Dead battery"
                    : "Batería baja/agotada de Central"}
                </li>
                <li>
                  {language === "english"
                    ? "O/C Authenticated"
                    : "O/C Controlados"}
                </li>
              </ul>
            </div>
            {/* What to NOT say wrapper */}
            <div className="flex flex-col items-center justify-center basis-1/2 h-48">
              <ul className="flex flex-col gap-1 justify-between items-center text-center">
                <li>
                  {language === "english"
                    ? "Missing Test"
                    : "Fallos de comunicaciones"}
                </li>
                <li>
                  {language === "english"
                    ? "Detectors' Low/Dead battery"
                    : "Batería baja/agotada detectores"}
                </li>
                <li>
                  {language === "english"
                    ? "Informative signs in mustard"
                    : "Señales informativas en mostaza"}
                </li>
                <li>
                  {language === "english"
                    ? "Pending maintenance"
                    : "Mantenimientos pendientes"}
                </li>
                <li>
                  {language === "english"
                    ? "Power cuts"
                    : "Cortes de corriente"}
                </li>
                <li>
                  {language === "english"
                    ? "Comlogs that differ from what is stated in the theft report"
                    : "Comlogs que difieran con lo indicado en el informe de robo"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RobberyScreen;
