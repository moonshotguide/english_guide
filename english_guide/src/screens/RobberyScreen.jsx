import React, { useContext } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { BsCheckCircleFill } from "react-icons/bs"

const RobberyScreen = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="card flex flex-col justify-center items-center">
      {/* Title */}
      <span className="text-2xl font-extrabold ">
        {language === "english" ? "Robbery" : "Robos"}
      </span>
      {/* Subtitle */}
      <p>{language === "english" ? "Procedures" : "Procedimientos"}</p>
      <h2>
        {language === "english"
          ? "What to say and what NOT to say?"
          : "Que decir y que NO decir?"}
      </h2>
      {/* div form wrapper */}
      <div className="flex flex-row items-center justify-between">
        {/* What to say wrapper */}
        <div className="flex flex-col align-center justify-between w-1/2">
          <img src="#" alt="ToSay" />
          <ul className="flex flex-col gap-1 justify-between align-center">
            <li>{language === "english" ? "Intrussion signals" : "Señales de intrusion"}</li>
            <li>{language === "english" ? "Tamper Signals" : "Señales tamper"}</li>
            <li>{language === "english" ? "Jamming Signals" : "Señales inhibición"}</li>
            <li>{language === "english" ? "Power cuts" : "Cortes de corriente"}</li>
            <li>{language === "english" ? "Central Low/Dead battery" : "Batería baja/agotada de Central"}</li>
            <li>{language === "english" ? "O/C Authenticated" : "O/C Controlados"}</li>
          </ul>
        </div>
        {/* What to NOT say wrapper */}
        <div className="flex flex-col align-center justify-between">
          <img src="#" alt="ToNotSay" />
          <ul className="flex flex-col gap-1 justify-between align-center w-1/2">
            <li>{language === "english" ? "Missing Test" : "Fallos de comunicaciones"}</li>
            <li>{language === "english" ? "Detectors' Low/Dead battery" : "Batería baja/agotada detectores"}</li>
            <li>{language === "english" ? "Informative signs in mustard" : "Señales informativas en mostaza"}</li>
            <li>{language === "english" ? "Pending maintenance" : "Mantenimientos pendientes"}</li>
            <li>{language === "english" ? "Power cuts" : "Cortes de corriente"}</li>
            <li>{language === "english" ? "Comlogs that differ from what is stated in the theft report" : "Comlogs que difieran con lo indicado en el informe de robo"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RobberyScreen;
