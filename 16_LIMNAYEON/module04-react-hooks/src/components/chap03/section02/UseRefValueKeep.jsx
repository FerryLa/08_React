/*
  useRef로 렌더링 간 값 유지하기
  - useRef는 DOM 참조뿐만 아니라, 컴포넌트가 재렌더링되어도 값이 유지되는 저장소 역할도 한다.
  - useRef에 저장된 값은 setState처럼 렌더링을 트리거하지 않고 유지된다.

  ref.current를 수정해도 컴포넌트는 재렌더링되지 않는다.
  > 리세되지 않는 메모장과 같다.
  > 최근 입력값, 이전 상태값, 함수 호출 횟수 등을 기억할 때 유용하다.
*/

"use client";

import { useState, useRef } from "react";

export default function UseRefValueKeep() {
  const [inputValue, setInputValue] = useState("");
  const countRef = useRef(0); // 리렌더링과 무관하게 count를 유지하는 ref

  let count = 0; // 지역변수

  const handleChange = (event) => {
    setInputValue(event.target.value);
    countRef.current += 1; // 입력이 바뀔 때
    count += 1; // 일반 변수는 리렌더링 될 때

    console.log(`count : ${count}`);
    console.log(`countRef : ${countRef.current}`);
  };

  return (
    <div>
      <h2>useRef를 이용한 값 유지</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="무엇이든 입력하세요"
      />
      <p>countRef 입력이 변경된 횟수: {countRef.current}회</p>
      <p>count 입력이 변경된 횟수: {count}회</p>
    </div>
  );
}
