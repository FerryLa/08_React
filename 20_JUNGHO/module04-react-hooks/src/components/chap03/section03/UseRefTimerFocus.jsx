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
  // 타이머 ID를 저장할 ref : 초기값(null)
  const timerId = useRef(null);
  // ui 변경을 위한 ref : 초기값(null)
  const countDisplay = useRef(null);
  // 숫자를 세는 용도의 ref : 초기값 (0)
  const count = useRef(0);
  // input 요소에 포커스를 주기 위한 ref : 초기값(null)
  const inputRef = useRef(null);

  const startTimer = () => {
    // 이미 타이머가 실행 중이면 새로 시작하지 않는다.
    if (timerId.current) {
      alert("타이머가 이미 실행 중입니다.");
      return;
    }
    // setInterval() 함수 정의하고 숫자를 1 증가시킴, 경과시간을 표현함
    timerId.current = setInterval(() => {
      count.current += 1;
      countDisplay.current.innerText = `경과시간 : ${count.current}초`;
    }, 1000);
  };

  const stopTimer = () => {
    // 최종시간을 alert으로출력
    // 타이머 종료
    // ref 초기화
    alert(`최종 경과시간 : ${count.current}초`);
    clearInterval(timerId.current);

    timerId.current = null;
    count.current = 0;
  };

  return (
    <div>
      <h2>useRef를 이용한 타이머 관리 & 포커스 이동</h2>

      <p ref={countDisplay}>
        <strong>경과시간 : {count.current}초</strong>
      </p>
      <div className="flex items-center justify-center gap-2 mb-5 mt-5">
        <button type="button" className="border-1 p-2 cursor-pointer" onClick={startTimer}>
          타이머 시작
        </button>
        <button type="button" className="border-1 p-2 cursor-pointer" onClick={stopTimer}>
          타이머 정지
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <input className="border-1 pl-2" placeholder="버튼 누르면 포커스됨" type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>포커스 이동</button>
      </div>
    </div>
  );
}

export default UseRefTimerFocus;
