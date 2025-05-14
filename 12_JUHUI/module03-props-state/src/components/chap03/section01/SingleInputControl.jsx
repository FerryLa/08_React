/*
- Controlled Component(제어 컴포넌트)는 폼 입력 요소(input, textarea, select 등)의 값을 컴포넌트의 State로 제어하는 방식을 말한다.
- 입력 요소의 value를 컴포넌트가 직접 소유하고 관리한다.


- 입력값을 프로그램적으로 제어할 수 있다.
- 입력값 검증(validation), 조건부 렌더링 등을 손쉽게 구현할 수 있다.
- 사용자의 입력 흐름을 명확히 추적할 수 있다.

- Controlled: 입력값이 State에 저장되고, 컴포넌트가 이를 직접 관리한다.
- Uncontrolled: 입력값이 DOM에 직접 저장된다. (ex: ref 사용)
*/

"use client";

import { useState } from "react";

export default function SingleInputControl() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <div>
      <h2>단일 입력값 제어</h2>
      <input type="text" value={name} onChange={handleChange} placeholder="이름을 입력하세요" />

      <hr />
      <p>입력한 이름 : {name}</p>
    </div>
  );
}
