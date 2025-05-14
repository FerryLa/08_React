/* 
  [useLocalStorage에서]
  - 브라우저의 localStorage에 데이터를 저장하고 , React 상태와 동기화하는 커스텀 hook이다.

  기능
  - 초기값을 localStorage에서 불러옴
  - 상태변경시 localStorage에도 반영
  - 수동 초기화(삭제) 기능
*/

"use client";

import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // 브라우저 환경이 아니면 초기값 반환
    if (typeof window === "undefined") return initialValue;
    // localStorage에서 에서 값을 가져옴
    const saved = localStorage.getItem(key);
    // 값이 있으면 JSON 파싱하여 값을 반환, 없으면 초기값 반환
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    // 상태가 변경될 때 localStorage에 저장
    localStorage.setItem(key, JSON.stringify(value)); // stringify : json객체를 > 문자열, parse는 반대
  }, [key, value]);

  // 상태변경 함수와 상태값을 배ㅕㅇㄹ로 반환
  return [value, setValue];
}

// 사용자가 입력한 브라우저의 스토리지에 저장된다.
export default function UseLocalStorage() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>useLocalStorage Hook 예제</h2>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>안녕하세요. {name}님</p>
    </div>
  );
}
