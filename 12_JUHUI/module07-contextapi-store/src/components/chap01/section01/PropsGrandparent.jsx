/*
[props drilling 문제란?]
- props drilling = props를 여러 단계 컴포넌트에 거쳐 전달하는 것.
- 하위 컴포넌트가 필요로 하는 데이터를 최상위에서 내려주려고
  중간 컴포넌트들이 '사용하지도 않는 값'을 props로 전달하는 현상.

[문제점]
1. 코드 복잡도 증가 → 중간 컴포넌트가 지나치게 얽힘
2. 유지보수 어려움 → 중간 단계 하나만 수정해도 영향 범위 넓음
3. 재사용성 감소 → 컴포넌트가 특정 props에 강하게 의존
*/

"use client";

import { useState } from "react";
import PropsParent from "./PropsParent";

export default function PropsGrandparent() {
  const [user, setUser] = useState("Alice");
  console.log("Grandparent"); // use의 값을 변경하면 모든 컴포넌트가 리렌더링 된다.

  return (
    <div>
      <h1>Grandparent</h1>
      <PropsParent user={user} />
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
}
