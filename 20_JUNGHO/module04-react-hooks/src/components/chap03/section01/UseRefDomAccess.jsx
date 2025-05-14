"use client";
import React, { useRef } from "react";

/* 
  useRef()로 DOM 접근하기
  document.querySelector를 대신하여 React 방식으로 안전하게 DOM을 참조한다.
*/

export default function UseRefDomAccess() {
  const inputRef = useRef(null); // DOM을 참조할 ref 생성

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // ref를 통해 input요소에 직접 접근하여 focus메소드 호출
    }
  };

  return (
    <>
      <h2>useRef를 이요한 DOM 접근</h2>
      <input type="text" ref={inputRef} placeholder="여기에 입력 ㄱㄱ" />
      <button onClick={focusInput}>입력창에 포커스 주기</button>
    </>
  );
}
