/*
  중첩 라우팅에서 파라미터 전달:
  이 컴포넌트 (`ProductDetailPage`)는 Next.js App Router의 동적 라우트(Dynamic Route)의 일부로서 사용된다.
  동적 라우트는 폴더/파일 이름에 대괄호 `[]`를 사용하여 정의하며, URL의 특정 가변적인 부분 (예: 상품 ID, 게시물 슬러그 등)을 변수처럼 
  캡처하여 컴포넌트로 전달받을 수 있게 한다.
  예시 구조: `app/nested/[id]/page.js` -> 이 `[id]`가 동적 세그먼트.
 
  path variable (`params` prop) 설명:
  Next.js App Router는 동적 라우트를 처리하는 `page.js`, `layout.js`, `loading.js`, `error.js` 등의 
  컴포넌트에 자동으로 `params`라는 이름의 prop을 객체 형태로 전달한다.
  이 `params` 객체는 URL에서 캡처된 "path variable" (경로 변수)들을 속성으로 담고 있다.
  객체의 각 키(key)는 동적 세그먼트를 정의할 때 사용한 대괄호 안의 이름(예: `[id]`에서는 `id`, `[slug]`에서는 `slug`)이 되며, 
  해당 키에 대한 값(value)은 실제 사용자가 접근한 URL 경로에서 그 위치에 해당하는 문자열이다.
 
  이 코드의 경우, 컴포넌트가 `/nested/[id]`와 같은 동적 라우트에 사용된다면, `params` 객체는 `{ id: '실제_URL에서_캡처된_ID_값_문자열' }` 형태가 된다.
 
  코드에서 `const { id } = params;` 와 같이 객체 구조 분해 할당을 통해 URL에서 캡처된 `id` 값을 쉽게 가져와 컴포넌트 내에서 사용할 수 있습니다.
  (참고: `await params`는 잘못된 사용입니다. `params`는 await가 필요한 Promise가 아니라 일반 JavaScript 객체입니다.)
 
  따라서 `/nested/123` 경로로 접근했다면 `id` 변수에는 '123'이라는 문자열이 할당되어 해당 상품 정보를 보여주는 데 사용된다.
 */

import React from "react";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  // useEffect 비동기처리 값을 채워 작업...

  return (
    <>
      <h2>상품 상세페이지</h2>
      <p>현재 보고 있는 상품 ID : {id}</p>
    </>
  );
}
