"use client";

import { Button } from "@/components/ui/button";
import { Pointer } from "lucide-react";
import React, { useState } from "react";

/* 
  React에서는 setState나 setCount와 같은 상태 업데이트 함수가 비동기적으로 작동할 수 있다.
*/

export default function StateComponent() {
  // 상태관리를 할 수 있게 만들어준 hook 중 하나
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>State 비동기성 이해하기</h2>
      <p>현재 카운트 : {count}</p>
      <Button variant={"outline"} onClick={onClickCount}>
        클릭하면 카운트 증가함
      </Button>
    </div>
  );
}
