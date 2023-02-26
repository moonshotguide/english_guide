import React from "react";

const languages = []


const LanguageContext = React.createContext({
  language: ["english", "español"],
  changeLanguage: () => {},
});

export default LanguageContext;
