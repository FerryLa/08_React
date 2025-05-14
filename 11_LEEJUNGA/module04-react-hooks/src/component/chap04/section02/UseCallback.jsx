/*
  [useCallback이란 무엇인가?]
  useCallback은 함수를 메모이제이션하는 Hook이다.
  useMemo와 유사하지만 함수를 메모이제이션하는 것이 목적이다.
  함수를 메모이제이션하면 함수를 재사용할 수 있어 성능 향상에 도움이 된다.

  useCallback 작동 원리
  1. 함수의 메모이제이션 : 컴포넌트가 렌더링될 때마다 내부의 함수들이 새롭게 생성된다.
    useCallback은 이러한 함수들을 메모이제이션하여 불필요한 재생성을 방지한다.

  2. 의존성 배열 : 함수가 의존하는 값들을 배열로 지정한다.
    이 배열의 값이 변경되지 않으면 함수를 재사용한다.

  3. 메모이제이션된 함수 반환 : 함수의 참조값을 반환한다.


  [useCallback 기본 구조]
  const memoizedCallback = useCallback(() => {
    함수 로직;
  }, [의존성]);

  - 하위 컴포넌트에 콜백 함수를 props로 전달할 때
  - 리랜더링 시 매번 새로 만들어지는 함수 인스턴스를 방지하고 싶을 때
*/

"use client";

import React, { useState, useCallback } from "react";

// useCallback을 사용하지 않은 버튼
// React.memo : 함수를 React.memo로 래핑되면 React는 컴포넌트를 랜더링하고 결과를  메모라이징 한다.
const ButtonA = React.memo(({ onClick }) => {
  console.log("props 변경으로 인해 ButtonA 랜더링");
  return <button onClick={onClick}>useCallback 안씀</button>;
});

// useCallback을 사용한 버튼
const ButtonB = React.memo(({ onClick }) => {
  console.log("props 변경으로 인해 ButtonB 랜더링");
  return <button onClick={onClick}>useCallback 사용</button>;
});

// value가 변경되면 buttonA는 렌더링되지만 bauttonB는 렌더링되지 않는다.
// 이는 useCallback을 사용하면 함수를 메모제이션하여 함수를 재사용하기 떄문이다.
// (console을 확인해봄)
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // useCallback을 사용하지 않은 콜백
  const handleClickA = () => {
    console.log("handleClickA 호출");
    setCount((c) => c + 1);
  };

  const handleClickB = useCallback(() => {
    console.log("handleClickB 호출");
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>UseCallback 비교</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="암거나 입력"
      />

      <p>입력값: {value}</p>
      <p>카운트: {count}</p>
      <ButtonA onClick={handleClickA} />
      <ButtonB onClick={handleClickB} />
    </div>
  );
}
