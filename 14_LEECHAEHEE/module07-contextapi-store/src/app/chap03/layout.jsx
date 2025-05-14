"use client";

import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import LanguageProvider from "./contexts/LanguageContext";

function Layout({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <LanguageProvider>{children}</LanguageProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
export default Layout;
