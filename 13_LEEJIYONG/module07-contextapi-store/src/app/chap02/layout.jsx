"use client";

import { createContext, useState } from "react";

// 선언과 동시에 export허용을 같이 작성
export const ThemeContext = createContext(); // context 생성

function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  const handleSetTheme = (theme) => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default Layout;
