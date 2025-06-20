"use client";

// useContext는 컴포넌트 내부에서 전역 상태를 조회하는 훅
import { useContext } from "react";
import { UserContext } from "./ContextGrandparent";

export default function ContextChild() {
  // useContext는 컴포넌트 내부에서 전역상태를 조회하는 훅이다.
  const user = useContext(UserContext);
  console.log("ContextChild");

  return <p>안녕하세요. {user}님</p>;
}
