"use client";

import { useState } from "react";

// 자식 컴포넌트 : 부모로부터 받은 setCount함수를 사용
function ChildButton({increaseCount}) {
  // console.log(props);
  return <button onClick={increaseCount}>자식 컴포넌트에서 카운트 증가</button>
}

// 부모 컴포넌트
export default function ChildUpdateParentState() {
  /*
    부모의 상태를 자식 컴포넌트에서 변경하기

    일반적으로 State는 컴포넌트 내부에서 관리된다.
    그러나 때로는 자식 컴포넌트가 부모 컴포넌트의 상태를 변경해야 할 필요가 있다.
    ex) 모달 닫기버튼, 입력값 초기화 등

    [방법]
    - 부모 컴포넌트가 자신의 상태를 업데이트하는 setState 함수를 props를 통해 자식 컴포넌트에 넘긴다.
    - 자식 컴포넌트는 전달받은 함수를 호출하여 부모의 상태를 변경할 수 있다.

    [핵심 개념]
    - 자식은 부모의 상태 자체를 알지 못한다.
    - 단지 "부모가 준 함수"를 호출할 뿐이다.
    - 따라서 여전히 **단방향 데이터 흐름(one-way data flow)** 이 유지된다.
  */

  const [count, setCount] = useState(); // 부모가 관리하는 상태값

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>부모 자식 상태제어</h2>
      <p>현재 카운트: {count}</p>
      <ChildButton increaseCount={handleIncrease} />
    </div>
  );
}
