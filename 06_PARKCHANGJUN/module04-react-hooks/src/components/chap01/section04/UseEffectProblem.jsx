"use client";

import { useState, useEffect } from "react";

export default function UseEffectProblem() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`useEffect 실행`);

    // setCount(count + 1); // 무한루프에 빠지게 된다.
  }, [count]);

  return (
    <div>
      <h2>useEffect 문제 사례</h2>
      <p>현재 카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>수동으로 증가</button>
    </div>
  )
}
