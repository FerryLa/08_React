// LanguageContext
// 언어 상태를 전역에서 관리하기 위한 context

"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext(); // 사용자정보를 가지고 있는 Context
function LanguageProvider({ children }) {
  const [language, setLangeage] = useState("ko");

  const handleSetLanguage = (language) => {
    if (language === "ko") {
      setLangeage("en");
    } else {
      setLangeage("ko");
    }
  };

  return (
    <LanguageContext.Provider value={{ language, handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
