/**
 * [useLocalStorage]
 * -브라우저의 localStorage에 데이터를 저장하고, React 상태와 동기화하는 커스텀 hook 이다.
 *
 * 기능
 * - 초기값을 localStorage에서 불러옴
 * - 상태변경시 localStorage에도 반영
 * - 수동 초기화(삭제)기능
 */
"use client";

import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // 브라우저 환경이 아니면 초기값 반환
    if (typeof window === "undefined") return initialValue;

    // localStorage에서 값을 가져옴
    const saved = localStorage.getItem(key);
    // 값이 있으면 JSON 파싱하여 반환, 없으면 초기값 반환
    return saved ? JSON.parse(saved) : initialValue;
  });
  useEffect(() => {
    //상태가 변결될 때 localStroage에 저장
    localStorage.setItem(key, JSON.stringify(value)); // JSON 객체를 문자열로 변환
  }, [key, value]);
  return [value, setValue];
}
export default function UseLocalStorageExample() {
  const [name, setName] = useLocalStorage("username", "");
  return (
    <div>
      <h2>useLocalStorage Hook 예제제</h2>
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
