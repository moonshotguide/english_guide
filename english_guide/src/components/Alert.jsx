import React from "react";

const Alert = ({ showAlert, onClose }) => {
  return (
    <>
      {showAlert && (
        <div className="alert fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 bg-gradient-to-br from-indigo-900 to-gray-900 dark:bg-slate-900 bg-gray-50 text-slate-900 dark:text-white">
          Username or Password incorrect!
          <button className="close" onClick={onClose}>
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;