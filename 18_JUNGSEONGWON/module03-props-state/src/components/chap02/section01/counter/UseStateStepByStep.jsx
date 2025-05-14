"use client";
import { useState } from "react";
export default function UseStateStepByStep() {
  console.log("===> 컴포넌트 리렌더링 됨"); // 상태 변경 시 마다 호출됨

  const [message, setMessage] = useState("기본상태");
  const onClickEnter = () => setMessage("하이");
  const onClickLeave = () => setMessage("바바이");

  const [color, setColor] = useState("black"); // 기본 색상 블랙으로 설정
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <>
      <h1 style={{ color, backgroundColor }}>{message}</h1>

      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>

      <div>
        <button onClick={() => setColor("green")}>초록색</button>
        <button onClick={() => setColor("red")}>빨간색</button>
        <button onClick={() => setColor("purple")}>보라색</button>
      </div>

      <div>
        <button onClick={() => setBackgroundColor("green")}>초록색</button>
        <button onClick={() => setBackgroundColor("yellow")}>노란색</button>
      </div>
    </>
  );
}
