/*
  [Subscribe]
  - 상태(state)가 변경될 때 마다 특정 콜백 함수를 실행하도록 등록
  - 주로 상태 변경 후 UI업데이트, 로깅, 디버깅에 사용
*/

"use client";

import store from "@/components/chap02/StoreExample";
import { useEffect } from "react";

function SubscribeComponent() {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("store변경됨");
    });

    return () => {
      console.log("컴포넌트 언마운트 시점에 구독 해지");
      unsubscribe(); // 구독을 해제한다
    };
  }, []);

  return (
    <div>
      <h2>Subscribe</h2>
    </div>
  );
}

export default SubscribeComponent;
