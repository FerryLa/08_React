/*
  [useMemo란 무엇인가?]
  - React Hook으로, 컴포넌트 안에서 시간이 오래 걸리는 계산의 결과를 기억(메모이제이션)해서 컴포넌트 성능을 좋게 만드는 역할을 한다.
  - 메모이제이션: 같은 입력값으로 계산할 때는 실제 계산을 다시 하지 않고, 이전에 저장해 둔 계산 결과값을 바로 재사용하는 기법이다. 
                불필요한 반복 계산을 줄여 자원을 아낄 수 있다.

  [useMemo 기본 구조]
  const memoizedValue = useMemo(() => {
    // 여기에 메모이제이션하고 싶은 '복잡한 계산' 로직을 작성
    // 이 함수의 '반환값'이 useMemo의 결과값이된다.
    return 계산_결과값;
  }, [계산에_사용되는_값들_목록]); // '의존성 배열'. 이 배열 안의 값들이 바뀔 때만 계산을 다시 한다.

  - 계산 자체가 시간이나 자원을 많이 쓰는 작업 (예: 큰 배열 정렬/필터링, 복잡한 데이터 집계 및 변환)의 결과를 저장할 때.
  - 어떤 계산 결과가 다른 Hook (예: `useEffect`, `useCallback`)의 의존성으로 사용되거나, 
    `React.memo`로 감싸진 자식 컴포넌트에게 Props로 전달될 때, 이 결과값이 안정적으로 유지되어 불필요한 연쇄 업데이트를 막고 싶을 때.
*/

"use client";

import { useState, useMemo } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [nonMemoNumer, setNonMemoNumer] = useState(1);
  const [renderingCount, setRenderingCount] = useState(0);

  // 느린 계산 함수
  function slowFunction(num) {
    console.log("느린 계산 수행중....");
    for (let i = 0; i < 1000000000; i++) {} // 일부러 지연
    return num * 2;
  }

  // useMemo를 사용하여 number가 변경될 때만 slowFunction을 재실행
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const nonMemoHandler = (e) => {
    setNonMemoNumer(slowFunction(parseInt(e.target.value)));
  };

  return (
    <div>
      <h2>useMemo로 계산 결과 메모이제이션</h2>

      <label>
        숫자 입력 :
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        />
      </label>
      <hr />

      <button
        onClick={() => setRenderingCount((prev) => prev + 1)}
        style={{ marginTop: "10px" }}
      >
        {renderingCount}번 렌더링
      </button>

      {/* 아래 주석 */}
      {/* <input type="number" value={nonMemoNumer} onChange={nonMemoHandler} />
      <p>두 배 값: {slowFunction(nonMemoNumer)}</p> */}
    </div>
  );
}
