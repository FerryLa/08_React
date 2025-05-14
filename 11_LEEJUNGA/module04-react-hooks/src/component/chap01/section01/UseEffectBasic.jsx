/*
  useEffect는 React컴포넌트에서 '부수 효과(side effect)'를 처리하는 Hook이다. 
  부수효과란, 컴포넌트 렌더링과 직접적인 관련은 없지만, 외부에 영향을 미치는 작업을 의미
  > 데이터 요청, DOM조작, 타이머 설정 등
*/

"use client";

import { useEffect, useState } from "react";

export default function UseEffectBasic() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setTodo(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h2>useEffect 기본 사용법</h2>
      <div>
        <p>{todo?.title}</p>
        <p>{todo?.completed ? "작업 완료" : "작업 미완료"}</p>
      </div>
    </div>
  );
}
