/*
  [useId란 무엇인가?]
  useId는 React 18에 도입된 Hook이다.
  컴포넌트마다 고유한 ID를 자동으로 생성해준다.

  [배경: 왜 useId가 필요한가?]
  서버사이드 렌더링(SSR)에서는 서버가 HTML을 먼저 만들고, 클라이언트가 하이드레이션(hydration)한다.
  하이드레이션: 서버에서 생성된 HTML을 클라이언트에서 렌더링하는 과정
  서버와 클라이언트가 생성하는 ID가 다르면, React는 일치하지 않는다고 경고한다.
  이를 방지하기 위해 SSR과 CSR 모두에서 '일관된 ID'를 제공할 필요가 있다.

  [useId 기본 구조]
  const id = useId();
  컴포넌트가 렌더링될 때마다 고유한 id가 생성된다.
  SSR/CSR 환경에서도 동일하게 유지된다.

  [사용 예시]
  라벨(label)과 입력(input)을 연결할 때
  컴포넌트에 고유 ID가 필요할 때
*/

"use client";

import { useId } from "react";

export default function UseId() {
  const id = useId();

  return (
    <div>
      <h2>useId SSR/CSR 일관성 유지</h2>
      <label htmlFor="{id}">이름 입력: </label>
      <input id={id} type="text" placeholder="이름" />
    </div>
  );
}
