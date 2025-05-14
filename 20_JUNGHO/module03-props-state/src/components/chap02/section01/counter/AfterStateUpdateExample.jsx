"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

export default function AfterStateUpdateExample() {
  const [isOn, setIsOn] = useState(false);
  const style = {
    width: 200,
    height: 200,
    backgroundColor: isOn ? "green" : "red",
    transition: "2s",
    marginBottom: "1rem",
  };

  const onClickWrongClick = () => {
    setIsOn(!isOn);
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다.");
    /* 
    setIsOn(!isOn): 현재 isOn 값을 반전시켜 상태를 업데이트합니다.
    그러나 상태 업데이트는 비동기로 처리되기 때문에,
    아래 console.log는 아직 변경되기 전의 isOn 값을 사용합니다.

    예를 들어, 처음에 불이 꺼져 있는 상태(false)라면,
    setIsOn(true)로 바꾸려 하지만,
    console.log는 이전 상태(false)를 참조해 "불이 꺼졌습니다."를 출력합니다.
  */
  };

  // useEffect() hook 사용
  useEffect(() => {
    console.log(isOn ? "불이 켜졌습니다." : "불이 꺼졌습니다.");
  }, [isOn]);

  return (
    <>
      <div style={style}></div>
      <Button onClick={onClickWrongClick}>😠잘못된 처리</Button>
      <Button onClick={() => setIsOn((prev) => !prev)}>😀올바른 처리</Button>
    </>
  );
}
