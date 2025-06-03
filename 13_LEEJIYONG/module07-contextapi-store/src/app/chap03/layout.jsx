import LanguageProvider from "./contexts/LanguageContext";
import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";

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
