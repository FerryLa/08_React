import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("uselanguag 에러 발생");
  }

  return context;
}
