/*
useRef로 DOM 접근하기
useRef를 사용하여 DOM 요소에 직접 접근할 수 있다.
document.querySelector()를 대신하여 React 방식으로 안전하게 DOM을 참조한다.
*/

'use client';
import { useRef } from 'react';

export default function UseRefDomAccess() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    } 
  }

  return(
    <div>
      <h2>useRef를 이용한 DOM 접근</h2>
      <input type="text" ref={inputRef} placeholder='여기에 입력하세요' />
      <button onClick={focusInput}>입력창에 포커스 주기</button>
    </div>
  );
}