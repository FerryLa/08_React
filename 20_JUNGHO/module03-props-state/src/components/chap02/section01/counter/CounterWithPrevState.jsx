"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function CounterWithPrevState() {
  const [number, setNumber] = useState(0);
  const [logs, setLogs] = useState([]);

  // 문제상황 - 직접 상태값을 잡초해서 연속으로 업데이트
  const onClickWrongIncrease = () => {
    setLogs([]);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    /* 
      예상은 : 0 + 1 + 1 + 1 + 1 = 4
      실제 결과 : 1 (마지막 setNumber만 반영된다.)

      setState는 비동기로 동작하기 때문에, 값이 누적되지 않는다.
    */
  };

  // 상태 변경 함수(prevState) : 이전 상태값을 기반으로 새로운 상태를 설정
  const onClickCorrectIncrease = () => {
    setLogs([]); // 로그 초기화

    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs], `1단계 : ${prev} + 1 = ${updated}`);
      return updated;
    });
    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs], `2단계 : ${prev} + 1 = ${updated}`);
      return updated;
    });
    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs], `3단계 : ${prev} + 1 = ${updated}`);
      return updated;
    });
    setNumber((prev) => {
      const updated = prev + 1;
      setLogs((logs) => [...logs], `4단계 : ${prev} + 1 = ${updated}`);
      return updated;
    });
  };

  return (
    <>
      <h1 className={number < 0 ? "text-red-500" : "text-blue-500"}>Counter : {number}</h1>
      <div className="flex justify-center gap-8">
        <Button variant={"outline"} onClick={() => setNumber((prev) => prev - 1)}>
          -1
        </Button>
        <Button variant={"outline"} onClick={onClickCorrectIncrease}>
          +1 X 4
        </Button>
      </div>
      <hr />
      <h3>상태변화 로그</h3>
      <ul>
        {logs.map((log, i) => (
          <li key={i} style={{ fontFamily: "monospace" }}>
            {log}
          </li>
        ))}
      </ul>
    </>
  );
}
