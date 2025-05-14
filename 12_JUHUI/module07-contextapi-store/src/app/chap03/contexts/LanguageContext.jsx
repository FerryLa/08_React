// LanguageContext
// 언어 상태를 전역에서 관리하기 위한 context

import { createContext, useState } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");

  const handleSetLanguage = (language) => {
    if (language === "ko") {
      setLanguage("en");
    } else {
      setLanguage("ko");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
export default LanguageProvider;