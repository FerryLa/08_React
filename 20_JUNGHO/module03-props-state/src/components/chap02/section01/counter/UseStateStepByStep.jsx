"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function useStateStepByStep() {
  console.log("컴포넌트가 렌더링 됨"); // 상태 변경 시마다 호출

  const [message, setMessage] = useState("기본상태");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  return (
    <>
      <h1 style={{ color, backgroundColor }}>{message}</h1>

      <div>
        <Button onClick={onClickEnter}>입장</Button>
        <Button onClick={onClickLeave}>퇴장</Button>
      </div>

      <div>
        <Button onClick={() => setBackgroundColor("white")}>기본 배경</Button>
        <Button onClick={() => setBackgroundColor("black")}>반전배경</Button>
      </div>

      <div>
        <Button onClick={() => setColor("red")}>빨간색</Button>
        <Button onClick={() => setColor("purple")}>보라색</Button>
        <Button onClick={() => setColor("yellow")}>노란색</Button>
      </div>
    </>
  );
}
