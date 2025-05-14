/* 
  [useLocalStorage]
  - 브라우저의 localStorage에 데이터를 저장하고, React 상태와 동기화 하는 커스텀 hook

  기능
  - 초기값은 localStorage에서 불러옴
  - 상태변경 시 localStorage에도 반영
  - 수동 초기화 (삭제) 기능
*/

"use client";
import React, { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // 브라우저 환경이 아니면 초기값 반환
    if (typeof window === "undefined") return initialValue;

    // localStorage에서 값을 가져옴
    const saved = localStorage.getItem(key);

    // 값이 있으면 JSON 파싱하여 반환, 없으면 초기화
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    //상태가 변경될때 localStorage에 저장
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // 상태 변경 함수와 상태 값을 배열로 반환
  return [value, setValue];
}

// 사용자 입력값 브라우저의 스토리지에 저장된다.
export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("userName", "");

  return (
    <>
      <h1>UseLocalStorage-Hook 예제</h1>
      <input type="text" placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)} />
      <p>안녕하세요, {name}님</p>
    </>
  );
}
