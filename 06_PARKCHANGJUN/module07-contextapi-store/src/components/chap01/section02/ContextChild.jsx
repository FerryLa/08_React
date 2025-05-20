"use client";

import { useContext } from "react";
import { UserContext } from "./ContextGrandparent";

function ContextChild() {
  // useContext는 컴포넌트 내부에서 전역 상태를 조회하는 훅이다.
  const user = useContext(UserContext);
  console.log("contextChild");
  return <p>안녕하세요. {user}님!</p>;
}

export default ContextChild;
