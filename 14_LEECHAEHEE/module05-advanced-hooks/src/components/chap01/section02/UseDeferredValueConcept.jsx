/*
  [useDeferredValue란 무엇인가?]
- useDeferredValue는 React 18에 도입된 Hook이다.
- State의 변경을 즉시 반영하는 대신, '나중에 천천히' 반영하도록 만들어 UI 반응성을 높여준다.
- 특정 값의 렌더링을 낮은 우선순위로 지연시켜, 그 값에 의존하는 무거운 작업(예: SlowList)을 뒤로 미룬다.

[배경: 왜 필요한가?]
- 사용자의 입력(input 등)을 즉시 반영하면서, 
- 그에 따라 발생하는 무거운 작업(예: 대규모 리스트 필터링)은 '지연'시켜,
- 입력 반응성은 부드럽게, 무거운 렌더링은 나중에 처리할 수 있도록 한다.

[useDeferredValue 작동 원리]
- 사용자가 입력한 값은 바로 저장된다.
- 하지만 화면에 보여주는 값은 "deferred(지연된)" 버전이다.
- 무거운 렌더링은 deferredValue가 업데이트될 때 진행된다.

[useDeferredValue 기본 구조]
const deferredValue = useDeferredValue(value);

- value : 원본 입력값
- deferredValue : 나중에 반영될 지연된 값

[언제 사용하면 좋을까?]
- 실시간 입력이 빠르게 일어나야 하는 상황 (ex: 검색창, 필터링)
- 입력 반응은 즉시 주고 싶지만, 무거운 렌더링은 천천히 처리하고 싶을 때

*/

"use client";

import { useState, useDeferredValue } from "react";

// 느린 렌더링을 시뮬레이션하기위한 컴포넌트
function SlowList({ text }) {
  const items = [];
  for (let i = 0; i < 3000; i++) {
    items.push(
      <li key={i}>
        {text || "아이템"} #{i}
      </li>
    );
  }

  return <ul style={{ maxHight: "200px", overflowY: "auto", marginTop: "10px" }}>{items}</ul>;
}

export default function UseDeferredValueConcept() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);
  return (
    <div>
      <h1>UseDeferredValue 예제</h1>

      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='텍스트를 입력하세요'
      />
      <p>즉시 입력값 : {input}</p>
      <p>지연된 입력값 : {deferredInput}</p>

      <SlowList text={input} />

      <p>
        입력창에 텍스트를 빠르게 입력하면, "즉시 입력값"은 즉시 반영되고 입력창은 반응성을 유지된다. 반면,
        "지연된 입력값"과 그에 기반하는 리스트는 약간의 지연 후에 업데이트된다. 이는 useDefferredValue가 무거운
        렌더링(SlowList)을 낮은 우선순위로 처리하기 때문이다.
      </p>
    </div>
  );
}
