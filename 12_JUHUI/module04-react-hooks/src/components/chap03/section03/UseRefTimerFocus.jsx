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

export default function UseRefTimerFocus() {
  // 타이머 ID를 저장할 ref : 초기값(null)
  const timerIdRef = useRef(null);

  // ui 변경을 위한 ref : 초기값(null)
  const inputRef = useRef(null);

  // 숫자를 세는 용도의 ref : 초기값 (0)
  const countRef = useRef(null);

  //<p ref={countDisplay}></p>가 있어서 추가 구현, 화면에 표시할 요소의 ref
  const countDisplay = useRef(null);

  const startTimter = () => {
    // 이미 타이머가 실행 중이면 새로 시작하지 않는다.
    if (timerIdRef.current != null) return;

    // setInterval() 항수 정의하고 숫자를 1 증가시킴, 경과시간을 표현함
    timerIdRef.current = setInterval(() => {
      countRef.current += 1;
      if (countDisplay.current) {
        countDisplay.current.textContext = `경과 시간 : ${countRef.current}초`;
      }
    }, 1000);
  };

  const stopTimer = () => {
    // 최종시간을 alert으로출력
    alert(`최종 경과 시간 : ${countRef.current}초`);

    // 타이머 종료
    clearInterval(timerIdRef.current);

    // ref 초기화
    timerIdRef.current = null;
    countRef.current = 0;

    if (countDisplay.current) {
      countDisplay.current.textContext = "";
    }
  };

  const focusInput = () => {
    // input 요소에 포커스 이동
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>useRef를 이용한 타이머 관리 & 포커스 이동</h2>

      <p ref={countDisplay}></p>
      <button onClick={startTimter}>타이머 시작</button>
      <button onClick={stopTimer}>타이머 정지</button>

      <div style={{ marginTop: "20px" }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="이곳에 포커스가 이동합니다."
        />
        <button onClick={focusInput}>입력창에 포커스</button>
      </div>
    </div>
  );
}
