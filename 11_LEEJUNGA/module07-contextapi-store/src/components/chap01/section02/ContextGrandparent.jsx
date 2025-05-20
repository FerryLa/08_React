/*
  [전역 상태 관리란?]

  - 전역 상태: 여러 컴포넌트에서 동시에 공유하는 데이터.
  예: 로그인 정보, 다크모드 설정, 장바구니 데이터

  - 핵심 역할:
  1. 저장 → 상태를 하나의 '공유 공간'에 보관
  2. 구독 → 필요한 컴포넌트가 해당 상태를 읽음
  3. 업데이트 → 상태 변경 시 구독 중인 컴포넌트에 알림
*/

"use client";

import { createContext, useState } from "react";
import ContextParent from "./ContextParent";

// 전역 상태관리를 위한 Context 생성
const UserContext = createContext();

function ContextGrandparent() {
  const [user, setUser] = useState("Alice");
  console.log("ContextGrandparent");

  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div>
      <h1>ContextGrandparent</h1>
      {/* 전역 상태 제공 */}
      <UserContext.Provider value={user}>
        {/* 전역 상태를 사용하는 컴포넌트트 */}
        <ContextParent />
        {/* 전역 상태 업데이트를 위한 입력 필드 */}
        <input type='text' value={user} onChange={handleNameChange} />
      </UserContext.Provider>
    </div>
  );
}

export default ContextGrandparent;
// 컨텍스트 객체를 내보내서 다른 컴포넌트에서 사용할 수 있도록 처리
export { UserContext };
