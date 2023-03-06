import React, { useContext } from "react";
import { LanguageContext } from "../components/context/LanguageContext";

const Alert = ({ showAlert, onClose }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {showAlert && (
        // <div className="flex flex-col alert fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 dark:bg-gradient-to-br from-indigo-900 to-gray-900 bg-gray-50 text-slate-900 dark:text-white ">
        //   <button className="close mb-1 self-end pr-2" onClick={onClose}>
        //     X
        //   </button>
        //   <span className="mt-3">Username or Password incorrect!</span>
        // </div>

        <div
          class="flex flex-col alert fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 dark:bg-gradient-to-br from-indigo-900 to-gray-900 bg-gray-50 text-slate-900 dark:text-white mb-4 text-red-800 rounded-lg"
        >
          <div class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Info</span>
            <h3 class="text-lg font-medium">{language === "english" ? "Access denied" : "Acceso denegado"}</h3>
          </div>
          <div class="mt-2 mb-4 text-sm">{language === "english" ? "Contact to the master chief to request your login credentials" : "Contacte con el administrador para solicitar sus credenciales de acceso"}</div>
          <div class="flex">
            <button
              type="button"
              onClick={onClose}
              class="font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
            >
             x {language === "english" ? "Close" : "Cerrar"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
