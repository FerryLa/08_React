import AfterStateUpdateExample from "@/components/chap02/section01/counter/AfterStateUpdateExample";
import Counter from "@/components/chap02/section01/counter/Counter";
import CounterWithPrevState from "@/components/chap02/section01/counter/CounterWithPrevState";
import StateComponent from "@/components/chap02/section01/StateComponent";
import UseStateStepByStep from "@/components/chap02/section01/counter/UseStateStepByStep";
import React from "react";

export default function page() {
  return (
    <div>
      <StateComponent />
      <hr />
      <h2 className="pt-10">리액트 상태관리 - useState</h2>
      <Counter />
      <hr />
      <h2>비동기 상태업데이트 문제</h2>
      <CounterWithPrevState />
      <hr />
      <h2>상태가 변경된 후 특정 작업 수행</h2>
      <AfterStateUpdateExample />
      <hr />
      <h2>useState 사용</h2>
      <UseStateStepByStep />
    </div>
  );
}
