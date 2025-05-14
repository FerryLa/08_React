"use client";

import { useLayoutEffect, useEffect, useState, useRef } from "react";

export default function DomMeaSure() {
  // 1. useRef(Dom 요소에 접근할 때 사용하는 hook)
  // 2. useLayoutEffect로 요소의 크기를 읽는다.
  // 3. 필요한 경우 setState를 통해 상태를 업데이트한다.

  const boxRef = useRef(null); // 측정할 DOM 요소를 참조
  const [width, setWidth] = useState(0); // 측정한 width 값을 저장할 상태

  // useLayoutEffect(() => {   // 박스의 너비가 바로 뜸(0px 안뜸)
  useEffect(() => {
    // 박스의 너비가 0px에서 바로 바뀜
    if (boxRef.current) {
      const boxWidth = boxRef.current.offsetWidth;
      setWidth(boxWidth);
    }
  }, []);

  return (
    <div>
      <h2>DOM 크기 측정 예재</h2>
      <div
        ref={boxRef}
        style={{ width: "50%", height: "100px", backgroundColor: "lightblue" }}
      >
        측정할 박스
      </div>
      <p>박스의 너비 : {width}px</p>
    </div>
  );
}
