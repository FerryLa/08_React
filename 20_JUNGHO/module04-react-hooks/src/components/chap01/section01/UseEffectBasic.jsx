"use client";
import React, { useEffect, useState } from "react";

/* 
  useEffect는 React컴포넌트에서 '부수 효과(side Effect)'를 처리하는 Hook이다.

  부수효과 : 컴포넌트 렌더링과 직접적인 관련은 없지만, 외부에 영향을 미치는 작업을 의미
  ex) 데이터 요청, DOM조작, 타이머 설정 등

  기본구조

  useEffect(()=>{
    // 수행할 작업
    }, [])

    useEffect에는 두개의 인자가 있다.
    첫번째 인자 : effect 함수 (수행할 작업)
    두번째 인자 : 의존성배열

*/

export default function UseEffectBasic() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 실행되는 부수효과
    console.log("useEffect - 컴포넌트가 마운트되었습니다.");

    // API 요청을 통해 데이터를 가져오는 예시
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data.title);
        console.log(data);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <>
      <h2>useEffect 기본 사용법</h2>
      <div>
        <p>{todo}</p>
        <p>{todo?.completed ? "완료" : "미완료"}</p>
      </div>
    </>
  );
}
