/*
  useEffect는 React 컴포넌트에서 '부수 효과(side effects)'를 처리하는 Hook이다.

  부수효과란, 컴포넌트 랜더링과 직접적인 관련은 없지만, 외부에 영향을 미치는 작업을 의미
  > 데이터 요청, DOM조작, 타이머 설정 등

  기본 구조

  useEffect(()=>{
    //수행할 작업 
    }, [])

    useEffect에는 두개의 인자가 있다.
    첫번쨰 인자 : effect 함수 (수행할 작업)
    두번째 인자 : 의존성 배열

    실행시점은 기본적으로 컴포넌트가 렌더링완료된 후 effect함수가 실행된다.
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
        <p>{todo?.id}</p>
        <p>{todo?.complited ? "작업 완료" : "작업 미완료"}</p>
      </div>
    </div>
  );
}
