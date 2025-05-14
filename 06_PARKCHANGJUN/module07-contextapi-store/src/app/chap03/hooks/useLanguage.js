// useLanguage
// React의 Context API를 사용하여 전역적으로 관리되는 언어 상태(LanguageContext)에
//  접근하기 위한 커스텀 훅

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("useLanguage는 LanguageProvider 안에서 사용해야 합니다.");
  return context;
}
