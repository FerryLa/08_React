"use client";

import { useState } from "react";
export default function CounterWithPrevState() {
  const [number, setNumber] = useState(0);
  const [logs, setLogs] = useState([]);
  // 문제상황 - 직접 상태값을 참조해서 연속으로 업데이트
  const handleWrongIncreae = () => {
    setLogs([]); // 로그 초기화화
    setNumber(number + 1); // 직접 number 가지고 와서 표현
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    /**
     * 예상은  0 + 1 + 1 + 1 +1 = 4
     * 실제 결과 : 1(마지막 setNumber만 반영된다.)
     *
     * setState는 비동기로 동작하기 때문에 number 계속해서 0을 참조하고 있어 1이 나오게 된다<div className=""></div>
     */
  };

  // 상태 변경 함수 (preState)
  const handleCorrectIncrease = () => {
    setLogs([]);

    setNumber(prev => {
      const updated = prev + 1
      setLogs(losg => [...logs, `1단계: ${prev} + 1 = ${updated}`])
      return updated 
    })
     setNumber(prev => {
      const updated = prev + 1
      setLogs(losg => [...logs, `2단계: ${prev} + 1 = ${updated}`])
      return updated 
     })
     setNumber(prev => {
      const updated = prev + 1
      setLogs(losg => [...logs, `3단계: ${prev} + 1 = ${updated}`])
      return updated 
     })
     setNumber(prev => {
      const updated = prev + 1
      setLogs(losg => [...logs, `4단계: ${prev} + 1 = ${updated}`])
      return updated 
    })

  };
  return (
    <>
      <h1 style={{ color: number < 0 ? "red" : "blue" }}>Counter: {number}</h1>

      <button onClick={() => setNumber((prev) => prev - 1)}>-1</button>

      <button onClick={handleWrongIncreae}>+1 X 4</button>
      <button onClick={handleCorrectIncrease}>+1 X 4</button>
      <hr />
      <h3>상태변화 로그 </h3>
      <ul>
        {logs.map((log, i) => (
          <li key={i} style={{ fontFamily: "monospace" }}>
            {log}
          </li> // map으로 동적 내용 진행 시 키 값을 넣어 구분 지어줘야 한다.
        ))}
      </ul>
    </>
  );
}
