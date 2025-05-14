"use client";
import { useState } from "react";

export default function CounterWithPreState() {
  const [number, setNumber] = useState(0);
  const [logs, setLogs] = useState([]);

  // 문제상황 넣기 - 직접 상태값을 참조해서 연속으로 업데이트
  const handleWrongIncrease = () => {
    setLogs([]); // 로그 초기화
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);

    /*
    예상은 : 0 + 1 + 1 + 1 + 1 = 4
    실제 결과 : 1(마지막 setNumber만 반영된다.)

    setState는 비동기로 동작하기 때문에(그때 그때마다 호출해서 사용하기 때문에 렌더 되지 않았기 때문에 0이 들어감.) 최종적으로 바뀌고 나서 바뀌기 때문에 누적되지 않음.
    누적하려면 값을 계속해서 이동시켜줘야 함. 직접 변수명은 들고 오는건 안되고 상태값이 어떤지 확인하고(값 참조하고고) 들고 와야함.
    */
  };

  // 상태 변경 함수(prevState)
  const handleCorretIncrease = () => {
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
      <h1 style={{ color: number < 0 ? "red" : "blue" }}>Counter: {number}</h1>

      <button onClick={() => setNumber((prev) => prev - 1)}>- 1</button>
      <button onClick={handleWrongIncrease}>+1 X 4</button>
      <button onClick={handleCorretIncrease}>+1 X 4</button>
      <hr />

      <h3>상태변화 로그</h3>
      <ul>
        {
          // map : 배열 만듦. / 동적으로 만들 때는 꼭 li에 key를 넣어줘야함.
          logs.map((log, i) => (
            <li key={i} style={{ fontFamily: "monospace" }}>
              {log}
            </li>
          ))
        }
      </ul>
    </>
  );
}
