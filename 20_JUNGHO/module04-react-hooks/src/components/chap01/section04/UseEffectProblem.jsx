"use client";
import React, { useEffect, useState } from "react";

/**
 * @component UseEffectProblem
 * @description useEffect 문제 사례를 보여주는 컴포넌트입니다.
 *
 * @example
 * // 컴포넌트를 렌더링하면 초기 카운트는 0입니다.
 * // 버튼을 클릭하여 카운트를 수동으로 증가시킬 수 있습니다.
 *
 * // 주의: useEffect 내부에서 setCount를 호출하면 무한 루프가 발생할 수 있습니다.
 * // 이는 useEffect의 의존성 배열에 count가 포함되어 있기 때문입니다.
 * // 의존성 배열에 포함된 값이 변경될 때마다 useEffect가 실행되므로,
 * // setCount로 인해 count가 변경되면 다시 useEffect가 실행되는 문제가 발생합니다.
 *
 * @returns {JSX.Element} useEffect 문제 사례를 보여주는 JSX 요소
 */

export default function UseEffectProblem() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect 실행");

    // setCount(count + 1);
  }, [count]);

  return (
    <>
      <h2>useEffect 문제 사례</h2>
      <p>현재 카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>수동으로 증가</button>
    </>
  );
}
