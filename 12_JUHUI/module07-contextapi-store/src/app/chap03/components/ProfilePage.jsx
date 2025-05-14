"use client";
import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";
import useUser from "../hooks/useUser";

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();
  const { user, handleSetUser } = useUser();
  const { language, handleSetLanguage } = useLanguage();

  const message = language === "ko" ? "안녕하세요" : "hello";

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Theme : {theme}</p>

      <button onClick={toggleTheme}>현재 토글의 테마 : ✅{theme}</button>
      <br />

      <button onClick={() => handleSetUser(user)}>
        {user ? "❌Logout" : "✅Login"}
      </button>
      {user && <p>Welcome, {user}😉</p>}
      <br />
      <p>Language : {language}</p>
      <button onClick={() => handleSetLanguage(language)}>{message}</button>
    </div>
  );
}
