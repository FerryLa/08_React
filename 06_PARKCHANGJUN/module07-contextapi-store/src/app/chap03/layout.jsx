"use client";

import LanguageProvider from "./contexts/LanguageContext";
import ThemeProvier from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";

function Layout({ children }) {
  return (
    <LanguageProvider>
      <UserProvider>
        <ThemeProvier>{children}</ThemeProvier>
      </UserProvider>
    </LanguageProvider>
  );
}

export default Layout;
