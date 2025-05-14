/**
 * useEffect는 React 컴포넌트에서 '부수 효과(side Effect)'를 처리하는 Hook이다.
 *
 * 부수 효과란?
 * 컴포넌트 렌더링과 직접적인 관련은 없지만,외부에 영향을 미치는 작업을 의미한다.
 * => 데이터 요청, DOM 조작, 타이머 설정 등..
 *
 * 기본 구조
 *
 * useEffect(() => {
 *    // 수행 할 작업
 * }, []);
 * useEffect에는 두 개의 인자가 있다.
 * 첫 번째 인자 : effect함수(수행할 작업 )
 * 두 번째 인자 : 의존성 배열 ([]) 이 배열이 비어 있는 경우 일회성으로 effect함수가 사용된다.
 *
 * 실행 시점은 기본적으로 컴포넌트가 렌더링완료된 후  effect함수가 실행된다. (소스 느낌낌)
 *
 */

"use client";

import { useEffect, useState } from "react";

export default function UseEffectBasic() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        console.log(json);
      });
  },[]);
  return (
    <div>
      <h2>useEffect 기본사용법</h2>
      <div>
        <p>{todo?.title}</p>
        <p>{todo?.completed ? "작업완료" : "작업 미 완료"}</p>
      </div>
    </div>
  );
}
