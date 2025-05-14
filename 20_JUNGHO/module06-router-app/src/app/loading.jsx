/*
  [loading.jsx란?]

  - 해당 경로 또는 폴더의 비동기 컴포넌트가 데이터를 준비할 때,
    보여주는 대체 로딩 UI.

  - app/폴더 하위 loading.jsx를 만들면,
    해당 경로의 Suspense fallback처럼 작동한다.

  [핵심 특징]
  - 자동으로 Suspense fallback 처리
  - fetch, await 등의 대기 상태에서 활성화

  [비유]
  - 엘리베이터 앞 '잠시만 기다려 주세요' 표시등

  [주의]
  - 'loading.jsx'라는 이름 필수
*/

import React from "react";

export default function LoadingPage() {
  return (
    <>
      <h1>로딩 중...</h1>
      <p>잠시만 기다려 주세요.</p>
    </>
  );
}
