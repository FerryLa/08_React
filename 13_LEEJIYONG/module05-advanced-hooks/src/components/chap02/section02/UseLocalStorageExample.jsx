/*
  [useLocalStorage]
  - 브라우저의 localStorage에 데이터를 저장하고, React 상태와 동기화하는 커스텀 hook이다.

  기능
  - 초기값을 localStorage에서 불러옴
  - 상태 변경시 localStorage에도 반영
  - 수동 초기화(삭제) 기능
*/

"use client";

import { useState, useEffect } from "react";

function useLocalStorage(key, initailValue) {
  const [value, setValue] = useState(() => {
    // 브라욷저 환경이 아니면 초기값 반환
    if (typeof window === "undefined") return initailValue;
    // lovalStorage에서 값을 가져옴
    const saved = localStorage.getItem(key);
    // 값이 있으면 JSON파싱하여 반환, 없으면 초기값 반환
    return saved ? JSON.parse(saved) : initailValue;
  });

  useEffect(() => {
    // 상태가 변경될 떄 localStorage에 저장
    localStorage.setItem(key, JSON.stringify(value)); // stringfy : JSON 객체를 > 문자열, pars는 반대

    // 상태 변경 함수와 상태 값을 배열로 반환
  }, [key, value]);

  return [value, setValue];
}

export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("usename", "");

  return (
    <div>
      <h1>useLocalStorage Hook 예제</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>안녕하세요, {name}님</p>
    </div>
  );
}
