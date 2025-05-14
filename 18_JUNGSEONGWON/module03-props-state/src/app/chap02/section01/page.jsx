


import AfterStateUpdateExample from "@/components/chap02/section01/counter/AfterStateUpdateExample";
import Counter from "@/components/chap02/section01/counter/Counter";
import CounterWithPrevState from "@/components/chap02/section01/counter/CounterWithPrevState";
import UseStateStepByStep from "@/components/chap02/section01/counter/UseStateStepByStep";
import StateComponent from "@/components/chap02/section01/StateComponent";

function Section02() {
  return (
    <div>
      <StateComponent/>

      <h2>리액트 상태관리 - useState</h2>
      <Counter />
      <h2>비동기 상태 업데이트 문제</h2>
      <CounterWithPrevState />
      <h2>상태가 변경된 후 특정 작업 수행</h2>
      <AfterStateUpdateExample />
      <h2>UseState 사용</h2>
      <UseStateStepByStep />
    </div>

  
  )
}

export default Section02;