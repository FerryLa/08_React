/*
  useRef로 DOM 접근하기
  useRef는 DOM 요소에 직접 접근할 수 있게 해주는 hook이다.
  document.querySelector를 대신하여 React 방식으로 안전하게 DOM을 참조한다.
*/

"use client";

import { useRef } from "react";

export default function UseRefDomAccess() {
  const inputRef = useRef(null); // DOM을 참조할 ref 생성

  const focusInput = () => {
    console.log(inputRef.current); // <input type="text" placeholder="여기에 입력하세요">
    if (inputRef.current) {
      inputRef.current.focus(); // ref를 통해 input요소에 직접 접근하여 focus 메소드 호출
    }
  };

  return (
    <div>
      <h2>useRef를 이용한 DOM 접근</h2>
      <input type="text" ref={inputRef} placeholder="여기에 입력하세요" />
      <button onClick={focusInput}>입력창에 포커스주기</button>
    </div>
  );
}
