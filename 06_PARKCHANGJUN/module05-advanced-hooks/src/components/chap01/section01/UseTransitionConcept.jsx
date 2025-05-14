/*
  [useTransition이란 무엇인가?]
  - useTransition은 React 18에 추가된 Hook이다.
  - 상태 업데이트를 낮은 우선순위로 처리하여, 해당 업데이트에 의존하는 렌더링을 지연시킨다.


  [배경: 왜 useTransition이 필요한가?]
  - React 컴포넌트는 state가 변경되면 화면을 다시 그린다(리렌더링).
  - 만약 변경되는 과정에서 '무거운 작업'이 있다면, 화면 갱신이 지연되어 입력/클릭 같은 인터페이스 반응이 느려질 수 있다.
    예) 대량 데이터 필터링, 복잡한 UI 업데이트 등

  [useTransition 작동 원리]
  - 긴 작업(heavy task)을 별도의 "트랜지션 상태"로 처리해서, UI 반응성(interactivity)은 그대로 유지한다.
  - 중요한 입력(state 업데이트)과 덜 급한 작업(화면 업데이트)을 분리한다.
  - startTransition 함수 안에 '긴 작업'을 감싸서, React가 우선순위를 조절할 수 있도록 한다.

  [useTransition 기본 구조]
  const [isPending, startTransition] = useTransition();

  - isPending : 현재 트랜지션 작업이 진행 중인지 boolean 값으로 알려준다.
  - startTransition(callback) : 긴 작업을 묶는 함수. 이 안에 있는 코드는 '트랜지션' 우선순위로 실행된다.

  [언제 사용해야 할까?]
  - 검색창 입력에 따라 수천 개 리스트를 필터링할 때
  - 무한 스크롤 구현처럼 대량 렌더링이 필요한 경우
  - 사용자 클릭이나 입력 반응을 우선 부드럽게 보장하고 싶을 때
*/

"use client";

import { useState, useTransition, UseTransition } from "react";
import { resolve } from "styled-jsx/css";

// 초기 데이터(서버에서 미리 생성 가능)
const ITEMS = Array.from({ length: 5000 }, (_, i) => `아이템 ${i + 1}`);

export default function UseTransitionConcept() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // 즉시반영(높은 우선순위)

    startTransition(() => {
      // 비동기 지연(2초)으로 작업 시뮬레이션
      return new Promise((resolve) => {
        setTimeout(() => {
          const filtered = ITEMS.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
          setFilteredItems(filtered);
          resolve();
        }, 2000);
      });
    });
  };

  return (
    <div>
      <h2>useTransition 예제</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="아이템 검색..."
      />

      <p>
        상태:{" "}
        {isPending ? (
          <span style={{ color: "red" }}>{query} 검색중 ...</span>
        ) : (
          "완료"
        )}
      </p>

      <p>검색된 아이템: {filteredItems.length}개</p>
      <ul>
        {filteredItems.slice(0, 50).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// boolean 연산자이므로 삼항연산자 가능
