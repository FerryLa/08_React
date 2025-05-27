"use client";

import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";
import useUser from "../hooks/useUser";

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme();
  const { user, handleSetUser } = useUser();
  const { language, handleSetLanguage } = useLanguage();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Theme : {theme}</p>
      <button onClick={toggleTheme}>현재 토글의 테마 : {theme}</button>
      <button onClick={() => handleSetUser(user)}>login</button>
      {user && <p>Welcome, {user}</p>}

      <button onClick={() => handleSetLanguage(language)}>언어 변경</button>
      <p>언어 : {language}</p>
    </div>
  );
}
