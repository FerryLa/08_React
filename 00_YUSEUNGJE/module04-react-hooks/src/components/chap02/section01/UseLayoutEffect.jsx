/* 
  [useLayoutEffect]
  - React Hook으로, 컴포넌트 렌더링 후 부수 효과를 처리한다
  - DOM 업데이트가 완료된 직후, 브라우저가 화면을 그리기 전에 실행된다.
  - 동기적으로 실행되어 브라우저의 화면 반영(Paint)을 차단한다.
  - DOM 측정이나 레이아웃 관련 변경 작업을 사용자가 화면을 보기 전에 완료해야 할 때 사용된다.

  사용법:
  `useLayoutEffect(setupFunction, dependencyArray)` 형태로 사용한다.
  -   `setupFunction`: `useLayoutEffect`가 실행될 때 수행할 부수 효과 로직을 담는 함수이다. 
      이 함수는 필요에 따라 이전 effect를 정리하는 클린업 함수를 반환할 수 있다.

  -   `dependencyArray`: `setupFunction`이 다시 실행될 조건을 명시하는 배열이다. 
      배열 안의 값이 이전 렌더링 이후 변경되었을 경우에만 `setupFunction`이 다시 실행된다. 
      (빈 배열 `[]`은 마운트 시에만 한 번 실행, 배열 생략 시 매 렌더링 시 실행된다.)

  필요성:
  - 컴포넌트가 렌더링되어 DOM이 업데이트된 상태에서 DOM의 특정 측정값(예: 엘리먼트의 크기, 위치 등)을 읽어와 
      그 값에 기반하여 DOM의 레이아웃이나 스타일을 즉시 변경해야 할 때 필요하다.

  - 만약 `useEffect`로 이러한 작업을 수행하면, 브라우저는 먼저 이전 레이아웃대로 화면을 그린 후 `useEffect`가 실행되어 DOM을 변경하게 된다. 
      이 과정에서 사용자에게 시각적인 깜빡임(Flickering)이나 부자연스러운 UI 변화가 짧게 보일 수 있다.

  - `useLayoutEffect`는 브라우저가 화면을 그리기 전에 동기적으로 실행되어 이러한 레이아웃 관련 변경 작업을 완료함으로써, 
      사용자가 오직 최종적으로 조정된 자연스러운 레이아웃만 보게 하여 깜빡임을 방지하는 데 꼭 필요하다.


  [useLayoutEffect vs useEffect 차이]

  - 둘 다 컴포넌트 렌더링 이후 "부수 효과(side effect)"를 처리하는 Hook이다.
  - 하지만 실행 타이밍과 동기/비동기 여부에서 큰 차이가 있다.

  [useEffect]
  - 렌더링 완료 후 브라우저가 화면을 그린 뒤에 실행된다.
  - 비동기적으로 실행된다.
  - 사용자에게 화면이 먼저 보이고, 이후 작업이 일어난다.

  [useLayoutEffect]
  - 렌더링 직후, 브라우저가 화면을 그리기 전에 실행된다.
  - 동기적으로 실행된다.
  - 화면이 그려지기 전에 작업이 끝나기 때문에 사용자에게 깜빡임이 보이지 않는다.

  [언제 사용해야 할까?]
  - useEffect: 서버 요청, 로그 기록, 애니메이션 트리거 등
  - useLayoutEffect: DOM 크기 측정, 스크롤 위치 조정 등 레이아웃에 영향을 주는 작업

  [주의]
  - useLayoutEffect를 남발하면 렌더링 속도가 느려질 수 있다. 꼭 필요한 경우에만 사용해야 한다.
*/

"use client";

import { useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffect() {
  useEffect(() => {
    console.log(`useEffect :화면이 그려진 후 실행`);
  }, []);

  useLayoutEffect(() => {
    console.log(`useLayoutEffect: 화면이 그리기 직전에 실행`);
  }, []);
  return (
    <div>
      <h1>useLayoutEffect vs useEffect 차이</h1>
      <p>콘솔을 열어서 실행 순서를 비교해보세요</p>
    </div>
  );
}
