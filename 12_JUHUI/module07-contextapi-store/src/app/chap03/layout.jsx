"use client";

import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import LanguageProvider from "./contexts/LanguageContext"

function Layout({ children }) {
  return (
    <LanguageProvider>
      <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
    </LanguageProvider>
  );
}
export default Layout;
