"use client";

import { createContext, useState } from "react";

// 선언과 동시에 export 허용을 같이 작성
export const ThemeContext = createContext(); // context 생성

function Layout({ children }) {
  const [theme, SetTheme] = useState("light");

  const handleSetTheme = (theme) => {
    SetTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext>
  );
}

export default Layout;
