"use client";

import ProfilePage from "./components/ProfilePage";
import ThemeProvider from "./contexts/ThemeContext";

export default function HomePage() {
  return (
    <div>
      <h1>App Router Context 설계 예제</h1>
      <ThemeProvider>
        <ProfilePage />
      </ThemeProvider>
    </div>
  );
}
