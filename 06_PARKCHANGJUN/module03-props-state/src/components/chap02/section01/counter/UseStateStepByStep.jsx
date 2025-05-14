"use client";

import { useState } from "react";

export default function UseStateStepByStep() {
  console.log("===> 컴포넌트 리렌더링 됨"); // 상태 변경 시마다 호출됨

  const [message, setMessage] = useState("기본상태"); // 비워놔도 상관 없고 이와 같이 기본상태라고 적어도 상관없다.
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroungColor] = useState("white");

  return (
    // 하나로 묶어서 상위 객체 만들어줌(<> </>)
    // 속성명, 컬럼명 color 적용
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
        <button onClick={() => setBackgroungColor("white")}>기본배경</button>
        <button onClick={() => setBackgroungColor("black")}>반전배경</button>
      </div>
    </>
  );
}
