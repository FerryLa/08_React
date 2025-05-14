/* 
  React에서는 setState나 setCount와 같은 상태 업데이트 함수가 비동기적으로 작동할 수 있다. 
*/

"use client";

import React, { useState } from "react";

export default function StateComponent() {
  const [count, setCount] = useState(0); // 상태관리를 할 수 있게 만들어준 hook 중에 하나
  console.log(React);
  // function handleClick() = {
  // }

  const handleClick = () => {
    console.log(count);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>State 비동기성 이해하기</h2>
      <p>현재 카운트: {count}</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
