// LanguageContext
// 언어 상태를 전역에서 관리하기 위한 컨텍스트

// UserContext
// 사용자의 상태를 전역에서 관리하기 위한 컨텍스트
"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext(); // 사용자정보를 가지고 있는 컨텍스트

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
