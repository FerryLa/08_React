/*
[타이머 ID 저장, 포커스 이동 실습]

- useRef를 이용하면 setInterval, setTimeout 등의 타이머 ID를 안전하게 저장할 수 있다.
- 또한, 여러 ref를 만들어서 다양한 DOM 요소를 제어할 수 있다.

[실습 목표]
1. 버튼 클릭 시 setInterval을 시작하고, 타이머 ID를 useRef에 저장한다.
2. 다른 버튼 클릭 시 input 요소에 포커스를 이동한다.

[주의]
- setInterval ID를 저장할 때 useRef를 사용하면, 렌더링과 무관하게 값을 유지할 수 있다.
*/

"use client";

import React, { useRef } from "react";

function UseRefTimerFocus() {
  const timerRef = useRef(null); // 타이머 ID를 저장할 ref : 초기값은 null
  const countDisplay = useRef(null); // ui 변경을 위한 ref : 초기값은 null
  const count = useRef(0); // 숫자를 셀수있는 ref : 초기값은 0

  const startTimer = () => {
    if (timerRef.current) return; // 이미 타이머가 실행 중이면 새로 시작하지 않음

    timerRef.current = setInterval(() => {
      count.current += 1;
      countDisplay.current.textContent = `경과 시간: ${count.current}초`;
    }, 1000);
  };

  const stopTimer = () => {
    alert(`최종 기록된 시간: ${count.current}초`);
    clearInterval(timerRef.current); // 타이머 종료
    timerRef.current = null; // ref 초기화
  };

  return (
    <div>
      <h2>useRef를 이용한 타이머 관리 & 포커스 이동</h2>

      <p ref={countDisplay}></p>
      <button onClick={startTimer}>타이머 시작</button>
      <button onClick={stopTimer}>타이머 정지</button>
    </div>
  );
}

export default UseRefTimerFocus;
