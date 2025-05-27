"use client";

import { useState } from "react";
export default function UseStateStepByStep() {
  console.log("===> 컴포넌트 리랜더링 됨"); // 상태 변경 시마다 호출됨

  const [message, setMessage] = useState("기본 상태");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const [color, setColor] = useState("black");

  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <>
      <h1 style={{ color, backgroundColor }}>{message}</h1>

      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>

      <div>
        <button onClick={() => setColor("red")}>빨강색</button>
        <button onClick={() => setColor("purple")}>보라색</button>
        <button onClick={() => setColor("green")}>초록색</button>
      </div>

      <div>
        <button onClick={() => setBackgroundColor("white")}>기본배경</button>
        <button onClick={() => setBackgroundColor("black")}>반전배경</button>
      </div>
    </>
  );
}
