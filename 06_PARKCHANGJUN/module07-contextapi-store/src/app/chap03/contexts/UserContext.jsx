// UserContext
// 사용자의 상태를 전역에서 관리하기 위한 컨텍스트
"use client";

import { createContext, useState } from "react";

export const UserContext = createContext(); // 사용자정보를 가지고 있는 컨텍스트

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleSetUser = (user) => {
    if (user === "alice") {
      setUser(null);
    } else {
      setUser("alice");
    }
  };

  return (
    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
