// useLanguage
// React의 Context API를 사용하여 전역적으로 관리되는 언어 상태 (Language)에
// 접근하기 위한 커스텀 hook

import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("useLaguage는 LanguageContext 안에서 사용해야 합니다.");
  return context;
}