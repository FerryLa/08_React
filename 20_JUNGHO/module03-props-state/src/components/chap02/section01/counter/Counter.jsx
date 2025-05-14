"use client"; // Next.js 13+의 서버 컴포넌트 구조에서 클라이언트 컴포넌트임을 암시
import { Button } from "@/components/ui/button";
import React, { useState } from "react"; // React내의 useState 훅을 불러온다.

/* 
  state란?
  state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미하며,
  props는 외부에서 전달외어 읽기만 가능하지만,
  state는 컴포넌트 내부에서 설정하고 수정할 수 있다.

  React에서는 클래스형 컴포넌트에서 this.state로 state를 관리하지만, 함수형 컴포넌트에서는
  useState를 통해서 state를 관리한다.
*/

export default function Counter() {
  const [number, setNumber] = useState(0);
  let count = 0;

  return (
    <>
      <h1>number : {number}</h1>
      <h1>count : {count}</h1>
      <div className="flex gap-8">
        <Button variant={"outline"} className={"cursor-pointer"} onClick={() => setNumber(number - 1)}>
          현재 값의 -1
        </Button>
        <Button variant={"outline"} className={"cursor-pointer"} onClick={() => setNumber(number + 1)}>
          현재 값의 +1
        </Button>
        <Button variant={"outline"} className={"cursor-pointer"} onClick={() => setNumber((count = count - 1))}>
          -1
        </Button>
        <Button variant={"outline"} className={"cursor-pointer"} onClick={() => setNumber((count = count + 1))}>
          +1
        </Button>
      </div>
    </>
  );
}
