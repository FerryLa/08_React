/*
[context 값 읽는 법]
방법 1 : useContext(훅) => 함수형 컴포넌트에서 간편하게 사용
방법 2 : Consumer => render prop 방식으로 class에서도 사용 가능

useContext : 코드 짧고 간결, 직관적이라 추천
Consumer : class 컴포넌트에서 필요
*/
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/chap02/layout";

export default function UseContextExample() {
  const { theme, handleSetTheme } = useContext(ThemeContext); // UseContext로 값 읽기

  return (
    <>
      <p>현재 테마 : {theme}</p>
      <button onClick={() => handleSetTheme(theme)}>다크모드로 변경</button>
    </>
  );
}
