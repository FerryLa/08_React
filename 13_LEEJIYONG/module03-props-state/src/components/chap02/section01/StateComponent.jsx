/*
  React에서는 setState나 setCount와 같은 상태 업데이트 함수가 비동기적으로 작동할 수 있다.
*/

"use client";

import React, { useState } from "react";

function StateComponent() {
  const [count, setCount] = useState(0);
  let count2 = 0;

  // function handleClick() {
  // }

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2>State 비동기성 이해하기</h2>
      <p>현재 카운트 : {count}</p>

      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
export default StateComponent;
