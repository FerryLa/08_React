/*
[useEffect의 의존성 배열(Dependency Array)]

- useEffect는 기본적으로 모든 렌더링 이후에 effect 함수를 실행한다.
- 그러나 두 번째 인자로 "의존성 배열"을 전달하면, 특정 값이 변경될 때만 effect를 실행할 수 있다.

[의존성 배열 동작 방식]
- [] : 컴포넌트 최초 마운트 시 1번만 실행
- [state] : 해당 state가 변경될 때만 실행
- (생략) : 모든 렌더링마다 실행 (비효율적, 권장하지 않음)

[주의]
- 의존성 배열을 잘못 설정하면 원치 않는 재실행이 발생하거나, 값이 최신이 아닐 수 있다.
*/

"use client";
import { useState, useEffect } from "react";

export default function UseEffectDependency() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("text 값이 변경되었습니다. : " + text);
  }, [text]); // 빈 배열은 일회성, text의 값이 변경될 때만 effect 실행됨.

  const handleClick = () => {
    console.log("count 값이 변경되었습니다. : ", count);
    setCount(count + 1);
  };

  return (
    <div>
      <h2>useEffect 의존성 배열</h2>
      <p>현재 카운트 : {count}</p>
      <button onClick={handleClick}>증가</button>

      <hr />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>현재 텍스트 : {text}</p>
    </div>
  );
}
