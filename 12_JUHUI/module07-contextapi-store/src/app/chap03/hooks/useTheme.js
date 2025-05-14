/*
useTheme :
React의 Context API를 사용하여 전역적으로 관리되는 테마 상태(ThemeContext)에 접근하기 위해서
생성한 커스텀 훅을 정의

ThemeContext의 값을 컴포넌트에서 편하고 안전하게 가져올 수 있도록 추상화한다.
Context를 사용하는 컴포넌트가 매번 useContext, context 객체를 직접 import 하는 코드가 반복적으로로 발생
*/

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme는 ThemeProvider 안에서 사용해야 합니다.");
  return context;
}
