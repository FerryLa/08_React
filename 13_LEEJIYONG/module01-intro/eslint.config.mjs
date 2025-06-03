/*
ESLint 설정을 정의하는 파일

ESLint란?
ESLint는 JavaScript코드에서 발견된 문제점을 보고하고 자동으로 수정하는데 사용되는
정적 분석도구인 린터(Linter)이다.
코드의 잠재적인 오류, 문법적ㅇ니 문제, 코드 스타일 불일치 등을 검사하여
코드 품질을 높이고 개발자들이 일관된 코딩 컨벤션을 따르도록 돕는다.
*/

import { dirname } from "path"; // 파일 경로 관리를 위한 모듈
import { fileURLToPath } from "url"; // URL을 파일 경로로 변환하는 모듈
import { FlatCompat } from "@eslint/eslintrc"; // ESLint 호환성 관리를 위한 모듈

const __filename = fileURLToPath(import.meta.url); // 현재 파일의 경로를 가져온다.
const __dirname = dirname(__filename); // 현재 파일의 디렉토리의 경로를 가져온다.

const compat = new FlatCompat({
  baseDirectory: __dirname, // 기본 디렉토리 경로 설정
});

const eslintConfig = [...compat.extends("next/core-web-vitals")]; // Next.js 코어 웹 라이브러리 확장 설정 추가

export default eslintConfig; // eslintConfig 배열을 내보내서 ESLint 설정으로 사용할 수 있도록 한다.
