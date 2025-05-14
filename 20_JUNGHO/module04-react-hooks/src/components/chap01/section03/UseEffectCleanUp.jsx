"use client";
import React, { useEffect, useState } from "react";

/* 
[useEffect에서 클린업(Cleanup) 함수 작성하기]

클린업 함수는 컴포넌트가 언마운트될 때 호출된다.
이는 컴포넌트가 사라질 때 정리(clean-up)가 필요한 부수 효과가 있을 때 사용되며
이를 통해 부수 효과를 남기지 않고 정리할 수 있다.
(예: 타이머 제거, 이벤트 리스너 해제 등)

[클린업 함수 작성 방법]
useEffect 내부에서 함수를 반환(return)하면, 컴포넌트가 언마운트될 때 호출된다.

[예시]
useEffect(() => {
  // 부수 효과 실행

  return () => {
    // 클린업 실행
  };
}, []); 
*/

export default function UseEffectCleanUp() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <h2>UseEffect CleanUp 함수</h2>
      <p>이 페이지를 떠나면 타이머가 정리됩니다.(콘솔확인)</p>
      {showComponent && <CleanupComponent />}
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "컴포넌트 숨기기" : "컴포넌트 보이기"}
      </button>
    </div>
  );
}

function CleanupComponent() {
  // const [count, setCount] = React.useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // timer에는 생성된 setInterval 객체값을 담아둔다.
  //     setCount((prev) => prev + 1);
  //     console.log("타이머 실행 중...");
  //   }, 1000);

  //   /*
  //   useEffect 내부에서 함수를 반환하면, 컴포넌트가 언마운트일 때 호출된다.
  //   이는 주로 리소스 해제, 정리 작업 등을 수행하는 용도로 사용된다. (unmount 단계)
  //   */
  //   return () => {
  //     clearInterval(timer);
  //     console.log("타이머가 정리되었답니다~~");
  //   };
  // }, []);

  // 언 마운트 시 count 값을 로컬 스토리지에 저장하는 예시
  const [count, setCount] = React.useState(() => {
    // 로컬 스토리지에서 초기값을 가져옵니다.
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        localStorage.setItem("count", newCount); // 현재 count 값을 로컬 스토리지에 저장
        return newCount;
      });
      console.log("타이머 실행 중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머가 정리되었답니다~~");
    };
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>CleanupComponent</h2>
      <p>Count: {count}</p>
    </div>
  );
}
