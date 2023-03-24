import React, { useContext, useCallback, useRef } from "react";
import { LanguageContext } from "../components/context/LanguageContext";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { TbCopy } from "react-icons/tb";
import ReactCanvasConfetti from "react-canvas-confetti";

const RobberyScreen = () => {
  const { language } = useContext(LanguageContext);
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -10,
  };
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(180 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      scalar: 0.4,
    });

    makeShot(0.2, {
      spread: 60,
      scalar: 0.5,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.5,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 0.5,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      scalar: 0.4,
    });
  }, [makeShot]);

  return (
    <div className="w-full flex flex-row h-full font-titillium">
      {/* Left Side Options banner */}
      <div className="hscreen font-titillium">
        <div className="rounded-md dark:bg-black py-0 px-2 flex flex-col w-max h-full items-center text-black dark:text-white justify-center mr-3">
          <h4 className="my-6 font-bold">
            {language === "english"
              ? "Burglary maintenances"
              : "Mantenimientos por robos"}
          </h4>
          {/* Buttons */}
          <div className="divide-y divide-[#00000030] dark:divide-[#333] text-sm font-light tracking-wider">
            <div className="hover:bg-[#8181812e] hover:transform hover:scale-106 w-full flex flex-row items-center cursor-pointer border-t border-[#00000030] dark:border-[#333]">
              <MdArrowForwardIos />
              <div className="w-full flex flex-row justify-start">
                <h4 className="ml-3 mr-1 my-4">
                  {language === "english"
                    ? "With signals, No Damage"
                    : "Con Señales, Sin Daños"}
                </h4>
              </div>
            </div>
            <div className="hover:bg-[#8181812e] hover:transform hover:scale-106 w-full flex flex-row items-center cursor-pointer">
              <MdArrowForwardIos />
              <div className="w-full flex flex-row justify-start">
                <h4 className="ml-3 mr-1 my-4">
                  {language === "english"
                    ? "With signals, Damage"
                    : "Con Señales, Con Daños"}
                </h4>
              </div>
            </div>
            <div className="hover:bg-[#8181812e] hover:transform hover:scale-106 w-full flex flex-row items-center cursor-pointer">
              <MdArrowForwardIos />
              <div className="w-full flex flex-row justify-start">
                <h4 className="ml-3 mr-1 my-4">
                  {language === "english"
                    ? "No Signals, Damage"
                    : "Sin Señales, Con Daños"}
                </h4>
              </div>
            </div>
            <div className="hover:bg-[#8181812e] hover:transform hover:scale-106 w-full flex flex-row items-center cursor-pointer border-b border-[#00000030] dark:border-[#333]">
              <MdArrowForwardIos />
              <div className="w-full flex flex-row justify-start">
                <h4 className="ml-3 mr-1 my-4">
                  {language === "english"
                    ? "No Signals, No Damage"
                    : "Sin Señales, Sin Daños"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex 4xl:flex-row flex-col ml-2.5 w-full ">
        {/* Robbery Advices */}
        <div className="items-center flex flex-col h-full w-full justify-center">
          {/* "What to say" card */}
          <div className="h-[330px] flex flex-col w-max">
            {/* top div */}
            <div className="w-[36rem] inner_card bg-[#f6f8fa] dark:border-[#333] p-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center">
              {/* Title */}
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                {language === "english" ? "Important!" : "Importante!"}
              </span>
              {/* Subtitle */}
              <p className="mt-0 4xl:mt-1 text-base font-light text-black dark:text-white">
                {language === "english"
                  ? "Before to start:"
                  : "Antes de empezar:"}
              </p>
            </div>
            {/* bottom div */}
            <div className="w-[36rem] inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-center items-center">
              {/* title form wrapper */}
              <div className="w-full flex flex-row items-center justify-around mt-0 4xl:mt-2.5 ">
                <div className="flex flex-row items-center justify-center">
                  <BsCheckCircleFill className="text-2xl text-green-600 dark:text-green-500" />
                  <h2 className="ml-2 text-md text-black dark:text-white">
                    {language === "english" ? "What to say" : "Que decir"}
                  </h2>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <BsFillXCircleFill className="text-2xl text-red-600 dark:text-red-400" />
                  <h2 className="ml-2 text-md text-black dark:text-white">
                    {language === "english" ? "What to NO say" : "Que NO decir"}
                  </h2>
                </div>
              </div>
              {/* div form wrapper */}
              <div className="mt-2 flex flex-row items-center justify-between font-titillium text-[500] font-light text-neutral-600 dark:text-neutral-400">
                {/* What to say wrapper */}
                <div className="h-full flex flex-col items-center justify-center basis-1/2">
                  <ul className="dark:text-[#00b900] text-[#006000] flex flex-col gap-0 4xl:gap-1 justify-between items-center text-center">
                    <li>
                      {language === "english"
                        ? "Intrussion signals"
                        : "Señales de intrusion"}
                    </li>
                    <li>
                      {language === "english"
                        ? "Tamper Signals"
                        : "Señales tamper"}
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
                    <li>
                      {language === "english"
                        ? "What the customer can watch on his App"
                        : "Lo que el cliente pueda ver en la App"}
                    </li>
                  </ul>
                </div>
                {/* What to NOT say wrapper */}
                <div className="h-full flex flex-col items-center justify-center basis-1/2">
                  <ul className="dark:text-[#ff2e2e] text-[#870000] flex flex-col gap-0 4xl:gap-1 justify-between items-center text-center">
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
                        ? "Comlogs that differ from what is stated in the theft report"
                        : "Comlogs que difieran con lo indicado en el informe de robo"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Maintenance Cards */}
        <div className="h-[330px] flex flex-col w-max">
          <div className="items-center flex flex-col h-full w-full justify-center">
            {/* top div */}
            <div className="dark:text-white inner_card bg-[#f6f8fa] dark:border-[#333] p-2 border-[1px] border-b-0 rounded-t-lg flex flex-col justify-center items-center w-[36rem]">
              {/* Title */}
              <span className="font-semibold text-xl 4xl:text-2xl text-black dark:text-white">
                {language === "english" ? "Maintenances" : "Mantenimientos"}
              </span>
              {/* Subtitle */}
              <p className="mt-0 4xl:mt-1 text-base font-light text-black dark:text-white">
                {language === "english"
                  ? "Before to start:"
                  : "Antes de empezar:"}
              </p>
            </div>
            {/* bottom div */}
            <div className=" inner_card dark:bg-black dark:border-[#333] p-2 rounded-b-lg flex flex-col justify-center items-center w-[36rem]">
              {/* Subtitle */}
              <div className="justify-between flex flex-row my-2 w-full items-center">
                {language === "english"
                  ? "Open maintenances or ticket"
                  : "Abre el mantenimiento o aviso"}
                <div className="flex flex-row">
                  <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-l-md p-0.5 px-1">
                    {language === "english" ? "Type: " : "Tipo: "}
                  </div>
                  <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] border-r-0 rounded-none p-0.5 px-1">
                    500
                  </div>
                  <div className="shadow-none inner_card bg-[#f6f8fa] dark:border-[#333] border-[1px] rounded-r-md p-0.5 px-1">
                    501
                  </div>
                </div>
              </div>
              {/* Text */}
              <p className="dark:text-[#7e7e7e] text-[#606060] text-[0.85rem] my-3">
                ROBO CON SEÑALES Y SIN DAÑOS. NO ES NECESARIO VIEW, POR FAVOR,
                DESCARGAR CÓDIGOS <span>(ESPEFICICAR CODIGOS)</span> DEL
                FOTODETECTOR <span>(INDICAR Nº DE ZONA)</span> Y SI NO LLEGAN
                IMAGENES RETIRAR FOTODETECTOR <span>(ESPEFICICAR ZONA)</span> Y
                ENVIAR A LA CENTRAL PARA EXTRAER IMAGENES. GRACIAS
              </p>
              {/* Button */}
              <div>
                <ReactCanvasConfetti
                  refConfetti={getInstance}
                  style={canvasStyles}
                />
                <button
                  onClick={fire}
                  id="copyBtn"
                  className="dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-[#ffffff73] bg-black text-white hover:bg-white hover:text-black hover:border-black border inline-flex font-bold text-center uppercase align-middle px-4 py-2 rounded-lg cursor-pointer leading-normal text-sm transition-all"
                >
                  <TbCopy className="text-lg" />
                  {language === "english" ? "Copy" : "Copiar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobberyScreen;
